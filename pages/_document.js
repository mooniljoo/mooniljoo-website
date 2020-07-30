import Document, { Head, Main, NextScript } from "next/document";

import desc from "../description.json";
export default class RootDocument extends Document {
  render() {
    return (
      <html lang="kr">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="description" content={desc.description} />
          <link rel="icon" href="/favicon.png" />
          {/* OpenGraph */}
          <meta property="og:type" content={desc.type} />
          <meta property="og:locale" content={desc.locale} />
          <meta property="og:title" content={desc.title} />
          <meta property="og:site_name" content={desc.sitename} />
          <meta property="og:description" content={desc.description} />
          <meta property="og:image" content={desc.image} />
          <meta property="og:url" content={desc.url} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
