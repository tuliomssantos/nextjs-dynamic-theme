import App, { AppContext, AppProps } from "next/app";

import axios from "axios";

import "../styles/globals.css";

import { ThemeProvider } from "@material-ui/core/styles";

import { themeCreator } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = themeCreator(pageProps.themeData);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const {
    data: { theme: themeData },
  } = await axios.get("http://localhost:3000/api/theme");

  appProps.pageProps.themeData = themeData;

  return { ...appProps };
};
