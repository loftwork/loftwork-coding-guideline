# 6-3. Retina対応 <Badge type="warning" text="推奨" />

画像のRetina対応は原則2x対応とし、`srcset` / `sizes` による最適配信を標準とします。

## img要素

`srcset` で1x / 2x画像を指定し、必要に応じて `sizes` を併用します。`width` / `height` 属性は、表示サイズの明示とレイアウトシフト防止のために指定します。

```html
<img
  src="/common/img/250x150.png"
  srcset="/common/img/250x150.png 1x, /common/img/500x300.png 2x"
  sizes="250px"
  width="250"
  height="150"
  alt="">
```

## 背景画像

`image-set()` で解像度別画像を指定するか、`background-size` と組み合わせて高解像度画像を適用します。

## 6-3-3. picture要素による画像の出し分け <Badge type="danger" text="必須" />

SP・PCで異なる画像を表示する場合、`display: none` による切り替えを使ってはなりません。非表示にしている側の画像もブラウザのリクエストが発生し続けるため、通信の無駄が生じます。`picture` 要素と `source[media]` を使って、必要な画像だけを読み込む実装にします。

::: code-group

```html [OK]
<picture>
  <source srcset="/img/hero@sp.jpg" media="(max-width: 767px)">
  <img src="/img/hero.jpg" alt="メインビジュアル">
</picture>
```

```html [NG]
<!-- display: none で切り替えても両方読み込まれる -->
<img class="sp-only" src="/img/hero@sp.jpg" alt="メインビジュアル">
<img class="pc-only" src="/img/hero.jpg" alt="メインビジュアル">
```

:::

Retina対応と組み合わせる場合は `srcset` の2x指定、`media`、`sizes` を併用します。

```html
<picture>
  <source
    srcset="/img/hero@sp.jpg 1x, /img/hero@sp@2x.jpg 2x"
    media="(max-width: 767px)"
    sizes="100vw">
  <img
    src="/img/hero.jpg"
    srcset="/img/hero@2x.jpg 2x"
    sizes="1200px"
    alt="メインビジュアル">
</picture>
```
