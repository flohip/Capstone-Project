import { useState } from "react";
import styled from "styled-components";

export const InputFields = () => {
  const topKeys = keyboardTopRow.map((key, index) => {
    return (
      <StyledTopKeys key={"TopRow"}>
        <button key={index}>{key}</button>
      </StyledTopKeys>
    );
  });
  const middleKeys = keyboardMidRow.map((key, index) => {
    return (
      <StyledMidKeys key={"MiddleRow"}>
        <button key={index}>{key}</button>
      </StyledMidKeys>
    );
  });
  const bottomKeys = keyboardBottomRow.map((key, index) => {
    return (
      <StyledBottomKeys key={"BottomRow"}>
        <button key={index}>{key}</button>
      </StyledBottomKeys>
    );
  });

  return (
    <StyledLetters>
      {topKeys}
      {middleKeys}
      {bottomKeys}
    </StyledLetters>
  );
};

const StyledLetters = styled.div`
  padding: 1rem;
  background-color: grey;
  display: flex;
  flex-wrap: wrap;
`;

const StyledTopKeys = styled.div`
  display: flex;
`;
const StyledMidKeys = styled.div`
  display: flex;
`;
const StyledBottomKeys = styled.div`
  display: flex;
`;

const keyboardTopRow = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ü"];
const keyboardMidRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"];
const keyboardBottomRow = ["Y", "X", "C", "V", "B", "N", "M"];
