# 4-5. JavaScript <Badge type="warning" text="推奨" />

## 4-5-1. 配置場所

スクリプトの記述位置は原則として `</body>` 直前とします。必要に応じて `<head>` および `<body>` 内部に記述してもよいですが、依存関係に注意してください。

## 4-5-2. 配信方式（defer / バンドル）

外部ライブラリは原則としてビルド時にバンドルし、実行時のCDNフォールバックに依存しない構成を推奨します。

スクリプトの読み込みは `defer` または `type="module"` を基本とし、依存順はビルド設定で管理します。

```html
<script type="module" src="/common/js/main.js"></script>
<script nomodule defer src="/common/js/legacy.bundle.js"></script>
```
