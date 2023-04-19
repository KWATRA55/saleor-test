import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "https://demo.saleor.io/graphql/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: relayStylePagination([]),
        },
      },
    }
  }),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

//https://shashwat-store-8138.saleor.cloud/