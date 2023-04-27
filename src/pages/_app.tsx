import Layout from "@src/Components/Layout";
import Modal from "@src/Components/Modal";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Modal isOpen />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
