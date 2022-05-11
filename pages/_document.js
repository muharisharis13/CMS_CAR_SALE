// ./pages/_document.js
import Document, { Head, Main, NextScript, Html } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>ThewayShop - Ecommerce</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/assets/css/bootstrap.css" />
          <link rel="stylesheet" href="/assets/vendors/iconly/bold.css" />
          <link
            rel="stylesheet"
            href="/assets/vendors/perfect-scrollbar/perfect-scrollbar.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendors/bootstrap-icons/bootstrap-icons.css"
          />
          <link rel="stylesheet" href="/assets/css/app.css" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* TAGS SCRIPT ============== */}
          <script src="/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js" />
          <script src="/assets/vendors/apexcharts/apexcharts.js" />
          <script src="/assets/js/mazer.js" />

          <script src="/assets/js/bootstrap.bundle.min.js" />
          <script src="/assets/js/pages/dashboard.js" />
          <script src="/assets/js/mazer.js" />
        </body>
      </Html>
    );
  }
}
