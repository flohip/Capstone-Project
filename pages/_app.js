import GlobalStyle from "../src/components/GlobalStyle/GlobalStyle";
import HeadData from "../src/components/Head/Head";
import styled from "styled-components";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StyledWrapper>
      <HeadData />
      <GlobalStyle />
      <Component {...pageProps} />
    </StyledWrapper>
  );
}

export default MyApp;

const StyledWrapper = styled.div``;
