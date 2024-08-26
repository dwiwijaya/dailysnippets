import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link
          rel='icon'
          type='image/png'
          href='/star.png'
        />
      </Head>
      <body className="">
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
