import React from "react";
import * as S from "./style";
import DefaultDiv from "../../components/DefaultDiv";

function SubTitle({ titleName }) {
  return (
    <DefaultDiv>
      <S.SubTitle>{titleName.name}</S.SubTitle>
    </DefaultDiv>
  );
}

export default SubTitle;
