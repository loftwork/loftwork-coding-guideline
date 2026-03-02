# 3-2. 命名規則 <Badge type="danger" text="必須" />

class名・id名・変数名・関数名などの命名規則は以下の通りです。

- 使用する言語の予約語をclass名・変数名・関数名として利用してはならない
- 単語間の区切りにはハイフン「-」・アンダーバー「_」・キャメルケースのいずれかを使用する。ただし、制作物内でルールを混在させてはならない
- BEM記法など、一定のルール内でハイフン・アンダーバーが併用されるものは例外

::: code-group

```html [NG]
<div id="contents-area">
  <p class="noteText">
```

```html [OK]
<div id="contentsArea">
  <p class="noteText">
```

:::
