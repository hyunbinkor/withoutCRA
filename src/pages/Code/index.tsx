import Title from "./Title";
import SubTitle from "./SubTitle";
import FileTree from "./FileTree";
import Markdown from "./Markdown";
import Aside from "./Aside";
import FlexContainer from "@/components/atomic/FlexContainer";
import FlexRowContainer from "@/components/atomic/FlexRowContainer";


function Code() {

  return (
    <FlexRowContainer>
      <Title />
      <FlexContainer alignItems="start">
        <FlexRowContainer tag="main">
          <SubTitle />
          <FileTree />
          <Markdown />
        </FlexRowContainer>
        <Aside />
      </FlexContainer>
    </FlexRowContainer>
  );
}

export default Code;