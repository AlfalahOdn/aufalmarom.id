import { HeaderType } from "@/models/HeaderType";
import { Html, Head, Main, NextScript } from "next/document";


const document = ({ title, description } : HeaderType ) => {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <title>aufalmarrom.id</title>
      <title className='w-full'>{title}</title>
        <meta name="keywords" content="web development, remote, specialist, software" />
        <meta name="author" content="Aufal Marom" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <meta name="description" content={description} />
        <meta property="og:title" content="Aufal Marom" key="ogtitle" />
        <meta property="og:url" content="https://aufalmarom.id" key="ogurl" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:site_name" content="https://aufalmarom.id" key="ogsitename" />
        <meta property="og:image" content="https://res.cloudinary.com/aufalmarom-id/image/upload/v1673532054/aufalmarom.id/img/logo-aufalmarom.id_x1o1jv.png" key="ogimage" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="Aufal Marom" key="twhandle" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <body className="w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default document