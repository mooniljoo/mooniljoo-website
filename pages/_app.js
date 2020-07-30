import App from "next/app";
import Head from "next/head";
import React from "react";
import SiteLayout from "../components/SiteLayout";

import "../public/sass/reset.scss";
import desc from "../description.json";
import Layout from "../components/SiteLayout";

export default class RootApp extends App {
  componentDidCatch(error, errorInfo) {
    console.log("CUSTOM ERROR HANDLING", error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }
  render() {
    const { Component, ...pageProps } = this.props;
    return (
      <>
        <Head>
          <title>{desc.title}</title>
        </Head>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>

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
              font-family: "RobotoSlabEN", "NotoSerif", 맑은 고딕, malgun gothic,
                AppleGothicNeoSD, Apple SD 산돌고딕 Neo, Microsoft NeoGothic,
                Arial, Droid sans, sans-serif;
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
      </>
    );
  }
}
