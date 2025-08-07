#!/bin/bash

# Claude CLI hook script for sending prompts to Claude CMS
# This script handles both JSON and plain text formats from Claude CLI hooks

# Log hook execution - FIRST THING
echo "$(date) START - PID:$$ PPID:$PPID" >> ~/.claude-queue/hook.log
echo "=== HOOK CALLED: $(date) ===" >> ~/claude_cms_hook_debug.log
# 音を鳴らす（macOSの場合）- より目立たない音に変更
afplay /System/Library/Sounds/Tink.aiff 2>/dev/null || true

# Claude CLI hooks pass data via stdin
INPUT_DATA=$(cat)

# Debug: Log the received data
echo "Received data: $INPUT_DATA" >> ~/claude_cms_hook_debug.log

# Try to parse as JSON first
if [ -n "$INPUT_DATA" ]; then
    # Check if it's valid JSON
    if echo "$INPUT_DATA" | jq -e . >/dev/null 2>&1; then
        # It's JSON - parse it
        PROMPT=$(echo "$INPUT_DATA" | jq -r '.prompt // .input // .message // empty' 2>/dev/null)
        CWD=$(echo "$INPUT_DATA" | jq -r '.cwd // empty' 2>/dev/null)
        SESSION_ID=$(echo "$INPUT_DATA" | jq -r '.session_id // empty' 2>/dev/null)
        
        # Extract task list if present
        TASK_LIST=$(echo "$INPUT_DATA" | jq -c '.task_list // empty' 2>/dev/null)
        if [ "$TASK_LIST" = "null" ] || [ -z "$TASK_LIST" ]; then
            TASK_LIST=""
        fi
        
        echo "Parsed as JSON: prompt='$PROMPT', cwd='$CWD', session_id='$SESSION_ID', has_tasks=$([ -n "$TASK_LIST" ] && echo 'yes' || echo 'no')" >> ~/claude_cms_hook_debug.log
        
        # If prompt is still empty, use the whole input
        if [ -z "$PROMPT" ] || [ "$PROMPT" = "null" ]; then
            PROMPT="$INPUT_DATA"
            echo "Using full input as prompt" >> ~/claude_cms_hook_debug.log
        fi
    else
        # Not JSON - treat as plain text prompt
        PROMPT="$INPUT_DATA"
        CWD=""
        SESSION_ID=""
        TASK_LIST=""
        echo "Treated as plain text prompt" >> ~/claude_cms_hook_debug.log
    fi
else
    echo "Error: No data received" >&2
    exit 1
fi

# Check if we have a prompt
if [ -z "$PROMPT" ]; then
    echo "Error: No prompt received" >&2
    exit 1
fi

# Environment variables are now passed from settings.local.json
echo "Environment check - CLAUDE_CMS_API_TOKEN: ${CLAUDE_CMS_API_TOKEN:0:10}..." >> ~/claude_cms_hook_debug.log
echo "Environment check - CLAUDE_CMS_USER: $CLAUDE_CMS_USER" >> ~/claude_cms_hook_debug.log
echo "Environment check - CLAUDE_CMS_URL: $CLAUDE_CMS_URL" >> ~/claude_cms_hook_debug.log

# Fallback to defaults if not set (should not happen with settings.local.json)
if [ -z "$CLAUDE_CMS_API_TOKEN" ]; then
    CLAUDE_CMS_API_TOKEN="79yd6UurmPhjrNBhr4OJw3FfCONP8etkAPuYJmJ4"
    echo "Warning: Using fallback API token" >> ~/claude_cms_hook_debug.log
fi

if [ -z "$CLAUDE_CMS_USER" ]; then
    CLAUDE_CMS_USER="mimori@landbridge.co.jp"
    echo "Warning: Using fallback user" >> ~/claude_cms_hook_debug.log
fi

# URL is now also passed from settings.local.json
if [ -z "$CLAUDE_CMS_URL" ]; then
    CLAUDE_CMS_URL="https://cli-r4ucjtf7x-land-bridge.vercel.app"
    echo "Warning: Using fallback URL" >> ~/claude_cms_hook_debug.log
fi

# Get project name from Claude CLI's cwd or fall back to current directory
if [ -n "$CWD" ] && [ "$CWD" != "null" ] && [ "$CWD" != "" ]; then
    PROJECT_NAME=$(basename "$CWD")
    echo "Using CWD: $CWD, Project: $PROJECT_NAME" >> ~/claude_cms_hook_debug.log
else
    PROJECT_NAME=$(basename "$PWD")
    echo "Using PWD: $PWD, Project: $PROJECT_NAME" >> ~/claude_cms_hook_debug.log
fi

# Use Supabase Edge Function directly - this bypasses Vercel authentication issues
SUPABASE_URL="https://pjaljjkcovdrakunpxug.supabase.co/functions/v1/save_prompt"
SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqYWxqamtjb3ZkcmFrdW5weHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNjQxNTMsImV4cCI6MjA2ODg0MDE1M30.o31bBEmLZFQMbw56KmukSIZGoMmmS61edabDxH4PLgc"

# Clean up the prompt - remove escape sequences like \n
CLEAN_PROMPT=$(echo "$PROMPT" | sed 's/\\n/\n/g')

# Create JSON payload
if [ -n "$TASK_LIST" ]; then
    JSON_PAYLOAD=$(cat <<EOF
{
  "prompt": $(echo "$CLEAN_PROMPT" | jq -Rs .),
  "user_name": "$CLAUDE_CMS_USER",
  "project": "$PROJECT_NAME",
  "api_token": "$CLAUDE_CMS_API_TOKEN",
  "task_list": $TASK_LIST
}
EOF
    )
else
    JSON_PAYLOAD=$(cat <<EOF
{
  "prompt": $(echo "$CLEAN_PROMPT" | jq -Rs .),
  "user_name": "$CLAUDE_CMS_USER",
  "project": "$PROJECT_NAME",
  "api_token": "$CLAUDE_CMS_API_TOKEN"
}
EOF
    )
fi

# Send to Supabase Edge Function
RESPONSE=$(curl -s -X POST "$SUPABASE_URL" \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d "$JSON_PAYLOAD")

# Log the response and project info for debugging
echo "User: $CLAUDE_CMS_USER" >> ~/claude_cms_hook_debug.log
echo "Project: $PROJECT_NAME (from CWD: $CWD)" >> ~/claude_cms_hook_debug.log
echo "API Token: $CLAUDE_CMS_API_TOKEN" >> ~/claude_cms_hook_debug.log
echo "Response: $RESPONSE" >> ~/claude_cms_hook_debug.log

# Check if prompt was successfully saved
if echo "$RESPONSE" | jq -e '.success' >/dev/null 2>&1; then
    echo "✓ Prompt saved to Claude CMS" >> ~/claude_cms_hook_debug.log
else
    echo "✗ Failed to save prompt: $RESPONSE" >> ~/claude_cms_hook_debug.log
fi

# UserPromptSubmit hook: Output the original prompt for Claude to process
# This is REQUIRED - Claude CLI expects the hook to output the prompt
echo "$PROMPT"

# Log exit status
EXIT_CODE=$?
echo "$(date) END - Exit code: $EXIT_CODE" >> ~/.claude-queue/hook.log

# Exit with success to allow Claude to continue processing
exit 0