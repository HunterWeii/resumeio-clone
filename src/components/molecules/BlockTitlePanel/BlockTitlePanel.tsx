import React, {ReactNode} from "react";
import BlockTitle from "components/atoms/Text/BlockTitle/BlockTitle";
import BlockSubtitle from "components/atoms/Text/BlockSubtitle/BlockSubtitle";
import style from "./Panel.module.scss";

type props = {
  title: string,
  subtitle ?: string,
  blockClass ?: string,
  children: ReactNode
}

const BlockTitlePanel = (props: props) => {
  const Subtitle = props.subtitle !== '' ? <div className={style.block_seperator_min} ><BlockSubtitle>{props.subtitle}</BlockSubtitle></div> : null;
  return (
    <section className={props.blockClass} >
      <BlockTitle>{ props.title }</BlockTitle>
      { Subtitle }
      <div className={ style.block_seperator_max }>
        { props.children }
      </div>
    </section>
  )
};

BlockTitlePanel.defaultProps = {
  subtitle: ''
};

export default BlockTitlePanel;