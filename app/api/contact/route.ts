import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, position, message } = body

    // Slack Webhook URL (環境変数から取得)
    const webhookUrl = process.env.SLACK_WEBHOOK_URL

    if (!webhookUrl) {
      console.log('Slack Webhook URL is not configured - using development mode')
      console.log('Form submission:', { name, email, phone, company, position, message })
      
      // 開発環境では成功レスポンスを返す
      return NextResponse.json({ success: true })
    }

    // Slackに送信するメッセージを構築
    const slackMessage = {
      text: 'AIコーチングLPからお問い合わせが届きました',
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📨 AIコーチングLPからのお問い合わせ'
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*お名前:*\n${name}`
            },
            {
              type: 'mrkdwn',
              text: `*会社名:*\n${company}`
            },
            {
              type: 'mrkdwn',
              text: `*メール:*\n${email}`
            },
            {
              type: 'mrkdwn',
              text: `*電話番号:*\n${phone || '未入力'}`
            },
            {
              type: 'mrkdwn',
              text: `*役職:*\n${position || '未入力'}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*メッセージ:*\n${message || '未入力'}`
          }
        },
        {
          type: 'divider'
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`
            }
          ]
        }
      ]
    }

    // Slackに送信
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    })

    if (!response.ok) {
      throw new Error('Failed to send message to Slack')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending to Slack:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}