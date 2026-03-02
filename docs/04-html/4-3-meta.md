# 4-3. メタ情報 <Badge type="warning" text="推奨" />

## 4-3-1. OGP対応

以下のOGPプロパティを原則記載します。上記以外はプロジェクトごとの取り決めに従います。

- `og:title` / `og:description` / `og:url` / `og:image` / `og:type` / `og:site_name`

Twitterカードに対応する場合は `twitter:card` および `twitter:site` を追加します。

## 4-3-2. favicon

faviconはlink要素で明示的に指定します。`favicon.ico` がサイトルートに設置されている場合は省略可。複数デバイスへの対応を前提とし、16・32・48・152pxのマルチアイコン形式が望ましいです。

```html
<link rel="icon" href="/common/img/favicon.ico">
```

## 4-3-3. viewport（モバイル対応）

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

PCコンテンツをそのまま表示する場合などはコンテンツ幅に合わせたcontentの値を指定します。
