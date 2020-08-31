import React from 'react';
import classNames from 'classnames';
import style from "./Input.module.scss";

type InputBaseProps = {
  inputclass ?: string,
  value ?: any,
  onInputChange ?: React.FormEventHandler<HTMLInputElement>
}

const InputBase = (props: InputBaseProps) => {
  const className = classNames( style.input, props.inputclass );
  return (
    <input 
      { ...props }
      className={ className }
      value={props.value} 
      onChange={props.onInputChange}
    />
  );
}

export default InputBase;