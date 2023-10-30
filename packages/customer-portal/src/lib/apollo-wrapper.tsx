"use client";

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
    // https://studio.apollographql.com/public/splacex-l4uc6p/
        // uri: "https://api.globxtrade.co.in/graphql",
    uri: "http://localhost:3000/graphql",
    // uri: process.env.BACKEND_ENDPOINT,
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(), 
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
        : httpLink,
  });
}

// also have a function to create a suspense cache
function makeSuspenseCache() {
  return new SuspenseCache();
}

export default function ApolloWrapper({ children }: React.PropsWithChildren) {
  // console.log("env",process.env);
  
  return (
    <ApolloNextAppProvider makeClient= { makeClient }  >
    { children }
    </ ApolloNextAppProvider>
  );
}