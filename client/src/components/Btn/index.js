import React from "react";
import * as S from "./style";
import { GoPlus, GoMarkGithub, GoLinkExternal, GoMail } from "react-icons/go";
import { AiOutlineForm, AiOutlineClose } from "react-icons/ai";

function iconHandler(icon) {
  switch (icon) {
    case "plus":
      return <GoPlus />;
    case "delete":
      return <AiOutlineClose />;
    case "update":
      return <AiOutlineForm />;
    case "github":
      return <GoMarkGithub />;
    case "link":
      return <GoLinkExternal />;
    case "mail":
      return <GoMail />;
    default:
      return;
  }
}

function Btn({ children, color, size, outline, fullWidth, icon, ...rest }) {
  if (icon) {
    return (
      <S.IconBtn
        color={color}
        outline={outline}
        data-tip={children}
        data-place="bottom"
        data-effect="solid"
        data-iscapture="false"
        data-arrow-color="rgba(0, 0, 0, 0)"
        data-text-color="rgba(255, 255, 255, 0.9)"
        data-background-color="rgba(0, 0, 0, 0.7)"
        {...rest}
      >
        {iconHandler(icon)}
      </S.IconBtn>
    );
  }
  return (
    <S.StyledBtn
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </S.StyledBtn>
  );
}

Btn.defaultProps = {
  color: "primary",
  size: "medium",
  fullWidth: false,
  outline: false,
};

export default Btn;
