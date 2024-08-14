import Title from "./Title";
import SubTitle from "./SubTitle";
import FileTree from "./FileTree";
import Markdown from "./Markdown";
import Aside from "./Aside";
import FlexContainer from "@/components/atomic/FlexContainer";
import FlexRowContainer from "@/components/atomic/FlexRowContainer";


function Code() {

  return (
    <FlexRowContainer justifyContents="center">
      <Title />
      <FlexContainer justifyContents="center" alignItems="start">
        <FlexRowContainer tag="main" gap={5} columnPadding={10} maxWidth={896}>
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