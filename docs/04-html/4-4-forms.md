# 4-4. フォーム <Badge type="danger" text="必須" />

## 4-4-1. ラベルの関連付け

フォームには `label` 要素を用いてテキストのラベルとフォームコントロールを関連付けます。

```html
<label for="name">お名前:</label>
<input type="text" id="name" name="name">
```

## 4-4-2. グループ化

ラジオボタン・チェックボックスなどグループを形成するコントロールは、`fieldset` 要素と `legend` 要素でグループ化します。

```html
<fieldset>
  <legend>ご連絡方法</legend>
  <input type="radio" name="contact" id="contact-email" value="email">
  <label for="contact-email">メール</label>
  <input type="radio" name="contact" id="contact-tel" value="tel">
  <label for="contact-tel">電話</label>
</fieldset>
```

## 4-4-3. select要素のグループ化

`select` 要素内のoption要素が複数の分類を包含する場合、`optgroup` 要素を用いてグループ化します。
