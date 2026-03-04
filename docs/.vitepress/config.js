import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/loftwork-coding-guideline/',
  title: 'Loftwork Coding Guideline',
  description: 'ロフトワーク Webサイト制作コーディングガイドライン',
  lang: 'ja',

  themeConfig: {
    logo: null,
    siteTitle: 'Loftwork Coding Guideline',

    nav: [
      { text: 'はじめに', link: '/intro' },
      { text: 'アクセシビリティ', link: '/07-accessibility/7-1-alt' },
      { text: '検証とテスト', link: '/10-testing/10-1-browser-check' },
    ],

    sidebar: [
      { text: 'はじめに', link: '/intro' },
      {
        text: '1. 開発環境',
        items: [
          { text: '1-1. バージョン管理', link: '/01-environment/1-1-version-control' },
          { text: '1-2. ローカル開発環境', link: '/01-environment/1-2-local-env' },
          { text: '1-3. ビルド（圧縮・結合）', link: '/01-environment/1-3-build' },
        ],
      },
      {
        text: '2. 対応ブラウザ・デバイス',
        items: [
          { text: '2-1. 必須確認ブラウザ', link: '/02-browsers/2-1-required' },
          { text: '2-2. 推奨確認ブラウザ', link: '/02-browsers/2-2-recommended' },
          { text: '2-3. レガシーブラウザ対応', link: '/02-browsers/2-3-legacy' },
          { text: '2-4. モバイル・タブレット', link: '/02-browsers/2-4-mobile' },
        ],
      },
      {
        text: '3. 共通ルール',
        items: [
          { text: '3-1. ファイル名・ディレクトリ名', link: '/03-common/3-1-filenames' },
          { text: '3-2. 命名規則', link: '/03-common/3-2-naming' },
          { text: '3-3. 大文字・小文字', link: '/03-common/3-3-case' },
          { text: '3-4. インデント', link: '/03-common/3-4-indent' },
          { text: '3-5. コメント', link: '/03-common/3-5-comments' },
        ],
      },
      {
        text: '4. HTML',
        items: [
          { text: '4-1. 拡張子', link: '/04-html/4-1-extension' },
          { text: '4-2. セマンティクスと構造', link: '/04-html/4-2-semantics' },
          { text: '4-3. メタ情報', link: '/04-html/4-3-meta' },
          { text: '4-4. フォーム', link: '/04-html/4-4-forms' },
          { text: '4-5. JavaScript', link: '/04-html/4-5-javascript' },
          { text: '4-6. JavaScriptとDOMの操作', link: '/04-html/4-6-js-dom' },
        ],
      },
      {
        text: '5. CSS',
        items: [
          { text: '5-1. ファイル構成', link: '/05-css/5-1-file-structure' },
          { text: '5-2. 命名規則', link: '/05-css/5-2-naming' },
          { text: '5-3. 記述ルール', link: '/05-css/5-3-rules' },
          { text: '5-4. フォント指定', link: '/05-css/5-4-fonts' },
          { text: '5-5. 印刷用CSS', link: '/05-css/5-5-print' },
        ],
      },
      {
        text: '6. モバイル・レスポンシブ対応',
        items: [
          { text: '6-1. ブレークポイント', link: '/06-mobile/6-1-breakpoints' },
          { text: '6-2. メディアクエリの単位', link: '/06-mobile/6-2-media-queries' },
          { text: '6-3. Retina対応', link: '/06-mobile/6-3-retina' },
          { text: '6-4. Safe Area', link: '/06-mobile/6-4-safe-area' },
        ],
      },
      {
        text: '7. アクセシビリティ',
        items: [
          { text: '7-1. テキストの代替', link: '/07-accessibility/7-1-alt' },
          { text: '7-2. 構造と見出し', link: '/07-accessibility/7-2-structure' },
          { text: '7-3. 色・コントラスト', link: '/07-accessibility/7-3-color' },
          { text: '7-4. キーボード操作', link: '/07-accessibility/7-4-keyboard' },
          { text: '7-5. ページタイトルと言語', link: '/07-accessibility/7-5-language' },
          { text: '7-6. フォームのアクセシビリティ', link: '/07-accessibility/7-6-forms' },
          { text: '7-7. リンクテキスト', link: '/07-accessibility/7-7-links' },
          { text: '7-8. スキップリンク', link: '/07-accessibility/7-8-skip-links' },
          { text: '7-9. WAI-ARIAの使用基準', link: '/07-accessibility/7-9-wai-aria' },
        ],
      },
      {
        text: '8. CMS・テンプレートコーディング',
        items: [
          { text: '8-1. リソースパス構成', link: '/08-cms/8-1-resource-path' },
          { text: '8-2. 繰り返しへの対応', link: '/08-cms/8-2-repeat' },
          { text: '8-3. テキスト増減への対応', link: '/08-cms/8-3-text-overflow' },
          { text: '8-4. パターンの網羅', link: '/08-cms/8-4-patterns' },
          { text: '8-5. 未入力時の表示', link: '/08-cms/8-5-empty-state' },
          { text: '8-6. WYSIWYGエリアへの対応', link: '/08-cms/8-6-wysiwyg' },
        ],
      },
      {
        text: '9. 外部ライブラリの選定基準',
        items: [
          { text: '9-1. メンテナンスの継続性', link: '/09-libraries/9-1-maintenance' },
          { text: '9-2. WCAG/アクセシビリティ対応', link: '/09-libraries/9-2-accessibility' },
          { text: '9-3. ライセンス', link: '/09-libraries/9-3-license' },
        ],
      },
      {
        text: '10. 検証とテスト',
        items: [
          { text: '10-1. ブラウザ・デバイス検証', link: '/10-testing/10-1-browser-check' },
          { text: '10-2. アクセシビリティ検証', link: '/10-testing/10-2-accessibility-check' },
        ],
      },
    ],

    outline: { label: 'このページの内容', level: [2, 3] },
    docFooter: { prev: '前のページ', next: '次のページ' },
    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え',
    returnToTopLabel: 'トップに戻る',
    search: { provider: 'local' },
  },
})
