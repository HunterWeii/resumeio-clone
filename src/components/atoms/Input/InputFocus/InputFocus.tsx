import React from "react";
import InputBase from "../InputBase";
import FocusBase from "components/atoms/Focus/FocusBase";
import style from "../Input.module.scss";

const InputFocus = (props: any) => {
  return (
    <FocusBase>
      <InputBase {...props} inputClass={style['input-focusable']} />
    </FocusBase>
  )
};

export default InputFocus;