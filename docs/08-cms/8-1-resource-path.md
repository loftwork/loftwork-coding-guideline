# 8-1. リソースパス構成 <Badge type="warning" text="推奨" />

CSSファイル・JSファイルおよび全ページで共通の画像については、ドキュメントルートに `common` ディレクトリを作成し、その配下に各ディレクトリを作成して格納します。

```
common/
  css/
    style.css
  js/
    common.js
  img/
    logo.png
    favicon.ico
```

> **注意：** WebRelease2用コーディングをおこなう場合、リソース名として使用できないため外部ファイル名にハイフンを使用しないでください。
