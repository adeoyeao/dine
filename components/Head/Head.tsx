import Head from "next/head";

const HtmlHead = () => {
  return (
    <Head>
      <title>Dine Restaurant</title>
      <meta name="description" content="Free Web tutorials" />
      <meta name="keywords" content="HTML,CSS,JavaScript" />
      <meta name="author" content="John Doe" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Spartan:wght@200&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default HtmlHead;
