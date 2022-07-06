import "../styles/globals.css";
import { createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#101727",
    },
  },
});
const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#101727",
    },
  },
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_SPOTIFY_API,
  }),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NextThemesProvider
          value={{ light: lightTheme.className, dark: darkTheme.className }}
          attribute="class"
          defaultTheme="system"
        >
          <Component {...pageProps} />
        </NextThemesProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
