import React, { ReactNode } from "react";
import TextBase from "../TextBase";
import style from "../Text.module.scss";

type InputTitle = {
  children: ReactNode,
}

const InputTitle = (props: InputTitle) => (
  <TextBase 
    secondary 
    textClass={ style.input_title }
  >
    { props.children }
  </TextBase>
);

export default InputTitle;