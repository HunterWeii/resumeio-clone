import React, { ReactNode } from "react";
import style from "./Focus.module.scss";

type props = {
  children: ReactNode
}

const FocusBase = (props: props) => {
  return (
    <div className={style.focusBar} >
      { props.children } 
      <span className={style.focusBar_bar} ></span>
    </div>
  )
}

export default FocusBase;