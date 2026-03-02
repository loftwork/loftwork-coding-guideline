# 5-4. フォント指定 <Badge type="warning" text="推奨" />

## 5-4-1. フォントファミリー

Webフォントの利用や独自のフォント指定がない場合は以下を基本とします。

```css
font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;
```

## 5-4-2. フォントサイズ

ブラウザでの文字サイズ制御に対応するため、フォントサイズの指定単位は `rem` または `%` を基本とします。ベースフォントのサイズはpxでの指定も可とします。

::: code-group

```css [NG]
h1 { font-size: 18px; }
```

```css [OK]
body { font-size: 62.5%; }
h1 { font-size: 2.4rem; }
```

:::
