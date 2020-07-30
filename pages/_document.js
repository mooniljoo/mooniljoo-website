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

          <style global jsx>
            {`
              body {
                background: #f1f1f1;
              }

              html,
              body,
              #__next {
                height: 100%;
                width: 100%;
                font-family: "RobotoSlabEN", "NotoSerif", 맑은 고딕,
                  malgun gothic, AppleGothicNeoSD, Apple SD 산돌고딕 Neo,
                  Microsoft NeoGothic, Arial, Droid sans, sans-serif;
                color: #333;

                font-variation-settings: "wght" 400;
                font-weight: 400;
                font-size: 100%;
                -webkit-text-size-adjust: 100%;
                font-variant-ligatures: none;
                -webkit-font-variant-ligatures: none;
                -webkit-font-smoothing: antialiased;
                -moz-font-smoothing: unset;
                -moz-osx-font-smoothing: grayscale;
                font-smoothing: antialiased;
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
                backface-visibility: hidden;
                text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
                -webkit-text-stroke: 0.001em;
                /* line-height: 1.5em; */
                letter-spacing: -0.03em;
                color: #333;
              }
              .prose_text {
                line-height: 1.8em;
                font-size: 1.2em;
              }

              @font-face {
                font-family: "RobotoSlabEN";
                src: url("/fonts/RobotoSlab-Thin.ttf");
                font-weight: 100;
              }
              @font-face {
                font-family: "RobotoSlabEN";
                src: url("/fonts/RobotoSlab-Light.ttf");
                font-weight: 300;
              }
              @font-face {
                font-family: "RobotoSlabEN";
                src: url("/fonts/RobotoSlab-Regular.ttf");
                font-weight: 400;
              }
              @font-face {
                font-family: "RobotoSlabEN";
                src: url("/fonts/RobotoSlab-Medium.ttf");
                font-weight: 500;
              }
              @font-face {
                font-family: "RobotoSlabEN";
                src: url("/fonts/RobotoSlab-Bold.ttf");
                font-weight: 700;
              }
              @font-face {
                font-family: "RobotoSlabEN";
                src: url("/fonts/RobotoSlab-Black.ttf");
                font-weight: 900;
              }

              @font-face {
                font-family: "NotoSerif";
                src: url("/fonts/NotoSerifKR-ExtraLight.otf");
                font-weight: 200;
              }
              @font-face {
                font-family: "NotoSerif";
                src: url("/fonts/NotoSerifKR-Light.otf");
                font-weight: 300;
              }
              @font-face {
                font-family: "NotoSerif";
                src: url("/fonts/NotoSerifKR-Regular.otf");
                font-weight: 400;
              }
              @font-face {
                font-family: "NotoSerif";
                src: url("/fonts/NotoSerifKR-Medium.otf");
                font-weight: 500;
              }
              @font-face {
                font-family: "NotoSerif";
                src: url("/fonts/NotoSerifKR-Bold.otf");
                font-weight: 700;
              }
              @font-face {
                font-family: "NotoSerif";
                src: url("/fonts/NotoSerifKR-Black.otf");
                font-weight: 900;
              }

              @media screen and (max-width: 1040px) {
                body {
                  font-size: 14px;
                }
              }
            `}
          </style>
        </body>
      </html>
    );
  }
}
