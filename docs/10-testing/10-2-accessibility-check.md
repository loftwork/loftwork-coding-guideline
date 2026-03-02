# 10-2. アクセシビリティ検証 <Badge type="danger" text="必須" />

本ガイドラインでは WCAG 2.2 レベルA の達成を最低基準としています（[7章 アクセシビリティ](/07-accessibility/7-1-alt) 参照）。コーディング段階からアクセシビリティの問題を発見・修正するために、以下のチェックを実施します。

**凡例：** <Badge type="danger" text="必須" /> / <Badge type="warning" text="推奨" /> / <Badge type="info" text="任意" />

## 10-2-1. axe DevTools による自動チェック <Badge type="danger" text="必須" />

**axe DevTools** はアクセシビリティの問題を自動検出するブラウザ拡張機能です。納品前の最終確認だけでなく、**ローカル開発（localhost）の段階から**継続的に使用し、問題を早期に発見します。

🔗 [axe DevTools – Chrome ウェブストアからインストール](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)

### 使い方

1. Chrome DevTools を開き「axe DevTools」タブを選択する
2. 「Scan ALL of my page」ボタンを押す
3. 検出された問題を確認し、**Critical・Serious レベルはすべて修正する**
4. Moderate・Minor レベルはプロジェクト要件に応じて対応を判断する

### 合格基準

| レベル | 対応方針 |
|---|---|
| Critical | 必須修正 |
| Serious | 必須修正 |
| Moderate | 原則修正（困難な場合はPMと相談） |
| Minor | 任意対応 |

## 10-2-2. キーボード操作テスト <Badge type="danger" text="必須" />

マウスを使わずキーボードのみでページを操作し、以下を確認します。

| 操作 | 確認内容 |
|---|---|
| `Tab` | フォーカスがすべての操作可能要素に順番に移動する |
| `Shift + Tab` | フォーカスが逆順に移動する |
| `Enter` / `Space` | ボタン・リンク・チェックボックスが操作できる |
| `Esc` | モーダル・ドロップダウンが閉じられる |
| 矢印キー | ラジオボタン・タブなどで選択が移動する |

また、フォーカスリング（枠線）が**常に視覚的に確認できる状態**であることを確認します。`outline: none` の指定は代替のフォーカス表示なしに使用してはなりません。

## 10-2-3. スクリーンリーダーテスト（要件に応じて） <Badge type="info" text="任意" />

プロジェクト要件でWCAG 2.2 レベルAA以上が指定されている場合や、行政・医療・教育関連など公共性の高いサイトでは、スクリーンリーダーでの読み上げ確認を実施します。

| OS | スクリーンリーダー | 主な確認ブラウザ |
|---|---|---|
| macOS / iOS | VoiceOver（OS標準） | Safari |
| Windows | NVDA（無料） | Chrome / Firefox |
| Android | TalkBack（OS標準） | Chrome |

### 確認のポイント

- ページタイトルが正しく読み上げられる
- 見出し構造を使ってページを探索できる
- 画像の代替テキストが適切に読み上げられる
- フォームのラベルとコントロールが関連付けられている
- エラーメッセージが読み上げられる

## 10-2-4. HTMLバリデーション <Badge type="warning" text="推奨" />

[4-1. HTMLの記述スタイル](/04-html/4-1-extension) に記載の通り、Nu Html Checker でバリデーションを実施します。マークアップのエラーはアクセシビリティツールの誤動作につながる場合があります。

🔗 [Nu Html Checker](https://validator.w3.org/nu/)

## 10-2-5. DoDチェック（納品最低条件） <Badge type="danger" text="必須" />

以下7項目をすべて満たした場合、アクセシビリティ観点の最低限DoDを満たしたものとします。

### A. 静的検証（Nu Html Checkerで吸収する項目）

- [ ] Nu Html Checker でエラーがない
- [ ] `title` 要素が設定されている
- [ ] `html` 要素に `lang` 属性が設定されている
- [ ] 画像に `alt` 属性が付与されている（装飾画像は `alt=""`）

### B. 実装検証（axe / 手動で確認する項目）

- [ ] axe DevTools で Critical / Serious の指摘がない
- [ ] キーボードのみで主要操作（移動・実行・フォーム送信）ができる
- [ ] フォーカス表示が視認できる（代替なしの `outline: none` を使用していない）
