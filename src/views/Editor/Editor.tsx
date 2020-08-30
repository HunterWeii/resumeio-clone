import React from 'react';
import BlockTitlePanel from "components/molecules/BlockTitlePanel/BlockTitlePanel";
import TitleInput from "components/component/TitleInput/TitleInput";

const Editor = () => {
  return (
    <div className="test" >
      <BlockTitlePanel 
        title="Personal Details"
        blockClass="test-fly-big"
      >
        <TitleInput
          titleInputClass="test-fly"
          title="Name"
        ></TitleInput>
        <TitleInput
          title="Job Title"
        ></TitleInput>
      </BlockTitlePanel>

      <BlockTitlePanel 
        title="Employment History"
        subtitle="Include your last 10 years of relevant experience and dates in this section. List your most recent position first"
      >
        <TitleInput
          titleInputClass="test-fly"
          title="Job"
        ></TitleInput>
      </BlockTitlePanel>
    </div>
  )
}

export default Editor;