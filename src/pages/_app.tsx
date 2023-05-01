import Layout from "@src/Components/Layout";
import LoginModal from "@src/Components/modals/LoginModal";
import RegisterModal from "@src/Components/modals/RegisterModal";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
