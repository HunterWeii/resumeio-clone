import React, { ReactNode } from "react";
import classNames from "classnames";
import style from "./Text.module.scss";

type TextProps = {
  textClass ?: string,
  children: ReactNode,
  secondary ?: boolean
};

const TextBase = (props: TextProps) => {
  const textStyle = props.secondary ? style["font-secondary"] : style["font-primary"];
  const textClass = classNames( textStyle, style.font, props.textClass );

  return (
    <span   
      className={textClass}
    >
      { props.children }
    </span>
  )
}

TextBase.defaultProps = {
  textClass: '',
  secondary: false
};

export default TextBase;