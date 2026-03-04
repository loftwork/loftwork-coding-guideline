# 4-6. JavaScriptとDOMの操作 <Badge type="danger" text="必須" />

HTML・CSS・JavaScript はそれぞれ「構造」「表現」「ロジック」を担う役割分担を守ります（[4-2-1. 構成要素の分離](/04-html/4-2-semantics#4-2-1-構成要素の分離) 参照）。JavaScriptでDOMを操作する際も、この原則を維持した実装にします。

## 4-6-1. style属性の直接書き換えを避ける <Badge type="danger" text="必須" />

JavaScriptから `element.style.xxx` を直接操作することは原則禁止します。

スタイルを JavaScript で直接書き換えると、スタイルの定義がCSSとJavaScriptに分散し、管理が難しくなります。また、CSS側で `!important` による上書きが必要になるなど、意図しない副作用を生みやすくなります。

状態に応じたスタイル変更は、**`data-*` 属性またはclassの付け外し**で状態を管理し、スタイルの定義はCSS側に集約します。

::: code-group

```js [NG]
// styleプロパティを直接書き換えている
el.style.display = 'none';
el.style.backgroundColor = '#ff0000';
el.style.transform = 'translateX(100px)';
```

```js [OK]
// 状態を表すdata属性を変更する
el.setAttribute('data-open', 'false');
el.setAttribute('data-status', 'error');
el.setAttribute('data-position', 'moved');
```

:::

```css
/* スタイルの定義はCSSに集約する */
[data-open="false"] {
  display: none;
}

[data-status="error"] {
  background-color: #ff0000;
}

[data-position="moved"] {
  transform: translateX(100px);
}
```

### classの付け外しも有効

状態が単純なON/OFFの場合は、`classList` を使う方法も適切です。

```js
// classを付け外しする
el.classList.add('is-active');
el.classList.remove('is-active');
el.classList.toggle('is-open');
```

```css
.c-menu.is-open {
  display: block;
}
```

## 4-6-2. 動的な値にはCSSカスタムプロパティを経由する <Badge type="info" text="任意" />

スクロール量・要素の幅・マウス座標など、JavaScriptで取得した**数値**をスタイルに反映させる場合は、`style.setProperty()` でCSSカスタムプロパティに渡します。

スタイルの定義はCSSに残したまま、変数の値だけをJavaScriptが更新する形にすることで、責務の分離が保たれます。

```js
// CSSカスタムプロパティに値を渡す
const onScroll = () => {
  const scrollY = window.scrollY;
  document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
};

window.addEventListener('scroll', onScroll, { passive: true });
```

```css
/* CSSでカスタムプロパティを使う */
.c-parallax {
  transform: translateY(calc(var(--scroll-y, 0px) * 0.3));
}
```

## 4-6-3. イベントリスナーのパフォーマンス <Badge type="info" text="任意" />

スクロール・リサイズ・タッチムーブなど高頻度で発火するイベントには、以下の対策を取り入れます。

### passive オプションの指定

スクロール系イベントには `{ passive: true }` を指定することで、ブラウザのスクロール処理をブロックせず、パフォーマンスが向上します。

```js
window.addEventListener('scroll', onScroll, { passive: true });
element.addEventListener('touchmove', onTouchMove, { passive: true });
```

`passive: true` のリスナー内では `preventDefault()` が使えない点に注意してください。

### requestAnimationFrame の活用

同一フレーム内で複数回の処理が発生する場合は `requestAnimationFrame` で間引き、不要な再描画を防ぎます。

```js
let rafId;

const update = () => {
  // DOMの更新処理
};

const onScroll = () => {
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(update);
};

window.addEventListener('scroll', onScroll, { passive: true });
```
