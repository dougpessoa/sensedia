import { useEffect, useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { useHome } from "contexts/home";
import { default as HomeTemplate } from "components/templates/Home";

export default function Home() {
  const { handleList } = useHome();
  const [title] = useState("Sensedia Software");
  const [description] = useState(
    "Table with lorem ipsum content. List, Cards, Search, Sorter and paginate"
  );
  const [url] = useState("https://sensedia.vercel.app");
  const [image] = useState("/images/sensedia.jpg");

  useEffect(() => {
    handleList();
  }, [handleList]);

  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>
      <HomeTemplate />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};
