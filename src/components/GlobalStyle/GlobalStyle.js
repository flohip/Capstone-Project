import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --backgroundColor: rgb(10, 78, 89);
  --fontColor: rgb(255, 237, 212);
  --buttonBorderColor: rgb(230, 212, 187);
}

html {
  padding: 0;
  margin: 0;
  min-height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: rgb(10, 78, 89);
  background: -moz-linear-gradient(
    0deg,
    rgba(10, 78, 89, 1) 0%,
    rgba(25, 130, 147, 1) 50%,
    rgba(10, 78, 89, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(10, 78, 89, 1) 0%,
    rgba(25, 130, 147, 1) 50%,
    rgba(10, 78, 89, 1) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(10, 78, 89, 1) 0%,
    rgba(25, 130, 147, 1) 50%,
    rgba(10, 78, 89, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0a4e59",endColorstr="#0a4e59",GradientType=1);
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}


`;
