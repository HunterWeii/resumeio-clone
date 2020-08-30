import React from 'react';
import InputTitle from 'components/atoms/Text/InputTitle/InputTitle';
import InputFocus from 'components/atoms/Input/InputFocus/InputFocus';
import style from "./TitleInput.module.scss";

type TitleInputProps = {
  titleInputClass ?: string,
  title: string
  onInputChange ?: React.FormEventHandler<HTMLInputElement>
}

const TitleInput = (props: TitleInputProps) => {
  const { title, titleInputClass, ...inputProps } = props;

  return (
    <div className={titleInputClass}>
      <InputTitle>{ title }</InputTitle>
      <div className={style.title_input_seperator}>
        <InputFocus { ...inputProps } />
      </div>
    </div>
  )
}

export default TitleInput;