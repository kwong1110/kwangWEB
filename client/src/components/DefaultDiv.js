import React from "react";
import theme from "../commons/Themes";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.interval.box};
`;

function DefaultDiv({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default DefaultDiv;
