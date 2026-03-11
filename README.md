# loftwork-coding-guideline

フロントエンド実装向けのコーディングガイドラインです。  
VitePress でドキュメントを管理しています。

## ローカル起動

### 前提
- Node.js（LTS推奨）
  - 動作確認済み: Node.js v22.18.0（2026-03-02時点）
- npm

### セットアップ
```bash
npm install
```

### 開発サーバー起動
```bash
npm run docs:dev
```

起動後、ターミナルに表示されるURL（通常 `http://localhost:5173`）にアクセスしてください。

## その他コマンド

### ビルド
```bash
npm run docs:build
```

> 補足: GitHub Actions（GitHub Pagesデプロイ）を設定済みのため、`main` への push 時はCI側でビルドされます。デプロイ目的であればローカルでの `npm run docs:build` は必須ではありません。

### ビルド成果物のプレビュー
```bash
npm run docs:preview
```
