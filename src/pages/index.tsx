import { useEffect } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { useHome } from "contexts/home";
import { default as HomeTemplate } from "components/templates/Home";

export default function Home() {
  const { handleList } = useHome();

  useEffect(() => {
    handleList();
  }, [handleList]);

  return (
    <main>
      <Head>
        <title>Sensedia</title>
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
