import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

  initializeIcons();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
