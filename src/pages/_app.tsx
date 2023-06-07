import Layout from "@src/Components/Layout";
import LoginModal from "@src/Components/modals/LoginModal";
import RegisterModal from "@src/Components/modals/RegisterModal";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import EditModal from "@src/Components/modals/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Toaster />
      <LoginModal />
      <RegisterModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
