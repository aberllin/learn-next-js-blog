import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
const FirstPost = () => {
  return (
    <Layout>
      <h1>First Post</h1>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
