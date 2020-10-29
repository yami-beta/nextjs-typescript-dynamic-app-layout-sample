# nextjs-typescript-dynamic-app-layout-sample

Next.js の [with-dynamic-app-layout](https://github.com/vercel/next.js/tree/canary/examples/with-dynamic-app-layout) を TypeScript 実装したものです。  
以下の仕様を満たすサンプルとなっています。

- Layout は全ページで共通ではない
    - `pages/_app.tsx` で分岐する処理はコードの見通しが良くないため避けたい
- ページ遷移しても動画の再生を継続出来る
    - 全てのページで動画を設置するわけではなく一部のページのみ設置したい
    - `pages/_app.tsx` で `router.pathname` を見て分岐するような処理は避けたい
    - `/about` ページのみ動画が無く、それ以外のページ間の遷移では動画の再生が継続出来ている

[layout-component](https://github.com/vercel/next.js/tree/canary/examples/layout-component) のサンプルでは Layout コンポーネントがページ遷移ごとに unmount, mount が走ってしまい、ページ遷移しても動画の再生を継続したい、というケースに対応出来ません。  
with-dynamic-app-layout の例だとページ遷移しても Layout コンポーネントの unmount が走らないため、`/about` 以外のページで HLS 動画プレーヤーを配置したデモを実装しました。

