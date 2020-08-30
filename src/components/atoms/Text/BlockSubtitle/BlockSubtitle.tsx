import React, { ReactNode } from "react";
import TextBase from "../TextBase";
import style from "../Text.module.scss";

type BlockTitleProps = {
  children: ReactNode
}

const BlockSubtitle = (props: BlockTitleProps) => (
  <TextBase textClass={ style.block_sub_title }>{ props.children }</TextBase>
);

export default BlockSubtitle;