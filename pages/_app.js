import GlobalStyle from "../src/components/GlobalStyle/GlobalStyle";
import HeadData from "../src/components/Head/Head";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadData />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
