import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      Welcome to my{" "}
      <a
        href="https://github.com/flohip/capstone-project"
        rel="noreferrer"
        target="_blank"
      >
        Capstone-Project!
      </a>
    </StyledHeader>
  );
}

const StyledHeader = styled.h1`
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  color: var(--fontColor);
  margin-bottom: 1rem;
  font-size: inherit;
  text-align: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  > a {
    color: #0070f3;
  }

  > a:hover,
  > a:focus,
  > a:active {
    text-decoration: underline;
  }
`;
