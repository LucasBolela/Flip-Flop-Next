import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyyDocument extends Document{
  render(){
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap" rel="stylesheet"/>

          <link rel="shortcut icon" href="../public/favicon.png" type="image/png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}