import { ApolloProvider } from "@apollo/client";
import client from "@/config/ApolloClient";
import "../styles/globals.scss";

//swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
