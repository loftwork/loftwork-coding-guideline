# 7-9. WAI-ARIAの使用基準 <Badge type="warning" text="推奨" />

WAI-ARIA（Web Accessibility Initiative – Accessible Rich Internet Applications）は、HTMLのセマンティクスを補うための属性仕様です。正しく使えばアクセシビリティを高めますが、誤用・過剰使用はスクリーンリーダーの読み上げを混乱させる原因になります。

**基本原則：まずHTMLネイティブ要素で解決できないか検討してから、ARIAを使う。**

## 7-9-1. ARIAを使う前にHTMLで解決する

HTMLのネイティブ要素は、ブラウザが適切なロールとアクセシビリティ情報をデフォルトで提供します。ARIAより安定して動作するため、まずHTMLの範囲で解決できないかを検討します。

::: code-group

```html [NG]
<!-- div+ARIAよりbuttonを使うべき -->
<div role="button" tabindex="0" onclick="submit()">送信</div>
```

```html [OK]
<!-- ネイティブbuttonを使う -->
<button type="button" onclick="submit()">送信</button>
```

:::

以下はARIAが不要なケースの代表例です。

| 使いたいARIA | 代わりに使うべきHTML |
|---|---|
| `role="navigation"` | `<nav>` |
| `role="main"` | `<main>` |
| `role="banner"` | `<header>` |
| `role="contentinfo"` | `<footer>` |
| `role="button"` | `<button>` |
| `role="link"` | `<a href="...">` |
| `role="checkbox"` | `<input type="checkbox">` |

## 7-9-2. ARIAを使ってよいケース

以下の状況では、ARIAの使用が適切です。

### 状態の付与

HTMLネイティブ要素に、標準では表現できない状態を付与する場合。

```html
<!-- トグルボタンの開閉状態 -->
<button type="button" aria-expanded="false" aria-controls="menu">
  メニュー
</button>
<ul id="menu" hidden>...</ul>

<!-- 選択状態のあるボタン -->
<button type="button" aria-pressed="true">太字</button>
```

### HTMLに対応する要素がないコンポーネント

タブUI・アコーディオン・スライダーなど、HTMLにネイティブ対応する要素がないコンポーネントを作る場合。

```html
<!-- タブコンポーネントの例 -->
<div role="tablist" aria-label="コンテンツ切り替え">
  <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">概要</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2">詳細</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">...</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>...</div>
```

### ライブリージョン

非同期で更新されるコンテンツ（通知・エラーメッセージ・検索結果など）をスクリーンリーダーに自動通知する場合。

```html
<!-- フォーム送信後のメッセージ -->
<div aria-live="polite" aria-atomic="true">
  <!-- 動的に挿入されるメッセージ -->
</div>
```

## 7-9-3. ARIAを使うときの注意点

### ARIA APG のパターンに準拠する

HTMLにないコンポーネントを実装する際は、W3CのARIA Authoring Practices Guide（APG）が公開しているパターンとキーボード操作の仕様に準拠します。独自実装はスクリーンリーダーとの相性問題が起きやすいため、APGのサンプルコードを参考にしてください。

🔗 [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)

### aria-hidden の乱用に注意する

`aria-hidden="true"` はスクリーンリーダーからその要素を完全に隠します。装飾アイコンなどに使うのは適切ですが、意味のあるコンテンツや、フォーカス可能な要素に指定することは避けます。

```html
<!-- OK: 装飾アイコンを読み上げから除外 -->
<span class="icon-arrow" aria-hidden="true"></span>

<!-- NG: フォーカス可能な要素にaria-hiddenを付与 -->
<button aria-hidden="true">送信</button>
```

### ARIAは見た目を変えない

ARIAはアクセシビリティツリーに影響するだけで、見た目には影響しません。`role="button"` を付与してもボタンのスタイルにはならず、`tabindex` の付与も別途必要です。HTMLネイティブ要素を使うほうが、ブラウザのデフォルトスタイルやフォーカス管理も含めて正しく動作します。
