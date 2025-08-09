# Slack連携設定ガイド

## 概要
お問い合わせフォームから送信された内容を自動的にSlackチャンネルに通知する機能です。

## セットアップ手順

### 1. Slack Appの作成

1. [Slack API](https://api.slack.com/apps)にアクセス
2. 「Create New App」をクリック
3. 「From scratch」を選択
4. App名を入力（例：LandBridge Contact Form）
5. ワークスペースを選択

### 2. Incoming Webhookの設定

1. 作成したAppの設定画面で「Incoming Webhooks」を選択
2. 「Activate Incoming Webhooks」をONにする
3. 「Add New Webhook to Workspace」をクリック
4. 通知を送信したいチャンネルを選択
5. 生成されたWebhook URLをコピー

### 3. 環境変数の設定

1. `.env.local.example`を`.env.local`にコピー
```bash
cp .env.local.example .env.local
```

2. `.env.local`を編集してWebhook URLを設定
```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 4. 動作確認

1. 開発サーバーを再起動
```bash
npm run dev
```

2. フォームから送信テストを実行
3. 指定したSlackチャンネルに通知が届くことを確認

## 通知内容

以下の情報がSlackに送信されます：
- お名前
- 会社名
- メールアドレス
- 電話番号（任意）
- 役職（任意）
- メッセージ（任意）
- 送信日時

## トラブルシューティング

### 通知が届かない場合

1. Webhook URLが正しく設定されているか確認
2. Slackワークスペースの権限を確認
3. サーバーログでエラーを確認
```bash
# Next.jsのコンソールでエラーメッセージを確認
```

### セキュリティに関する注意

- Webhook URLは秘密情報として扱ってください
- `.env.local`ファイルはGitにコミットしないでください
- 本番環境では環境変数を適切に管理してください（Vercel等のプラットフォームの環境変数機能を使用）

## カスタマイズ

### 通知フォーマットの変更

`app/api/contact/route.ts`の`slackMessage`オブジェクトを編集することで、通知のフォーマットをカスタマイズできます。

### 通知先チャンネルの変更

Slack Appの設定画面から新しいWebhookを追加し、環境変数を更新してください。