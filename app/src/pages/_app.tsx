import { Layout } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients",
};

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
