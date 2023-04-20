import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { useEffect } from "react";
import { useLocalStorage } from "react-use";

import "../styles/globals.css";

import { apolloClient } from "@/lib";
import { useCheckoutCreateMutation } from "@/saleor/api";

const Root = ({ Component, pageProps }: AppProps) => {
  const [token, setToken] = useLocalStorage("token");
  const [checkoutCreate, { data, loading }] = useCheckoutCreateMutation();

  useEffect(() => {
    async function doCheckout() {
      const { data } = await checkoutCreate();
      const token = data?.checkoutCreate?.checkout?.token;

      setToken(token);
    }

    doCheckout();
  }, []);

  return <Component {...pageProps} token={token} />;
};

const MyApp = (props: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <Root {...props} />
  </ApolloProvider>
);

export default MyApp;