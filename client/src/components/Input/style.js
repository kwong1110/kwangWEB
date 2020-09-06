import styled from "styled-components";
import theme from "../../commons/Themes";

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border: solid 2px ${theme.palette.decoGray[2]};
  border-radius: 4px;

  &:focus {
    outline-color: ${theme.palette.emphasis[2]};
  }

  & + & {
    margin-top: 1rem;
  }
`;
