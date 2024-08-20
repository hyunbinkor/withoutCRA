import Title from "./Title";
import SubTitle from "./SubTitle";
import FileTree from "./FileTree";
import Markdown from "./Markdown";
import Aside from "./Aside";
import FlexContainer from "@/components/atomic/FlexContainer";
import FlexRowContainer from "@/components/atomic/FlexRowContainer";


function Code() {

  return (
    <FlexRowContainer alignItems="center">
      <div style={{
        minWidth: '704px',
        maxWidth: '1216px',
      }}>
        <Title />
        <FlexContainer justifyContents="center" alignItems="start" gap={12}>
          <div style={{
            flexBasis: '440px',
            flexGrow: 57,
          }}>
            <FlexRowContainer tag="main" gap={5} columnPadding={10}>
              <SubTitle />
              <FileTree />
              <Markdown />
            </FlexRowContainer>
          </div>
          <div style={{
            flexBasis: '240px',
            flexGrow: 7,
          }}>
            <Aside />
          </div>
        </FlexContainer>
      </div>
    </FlexRowContainer>
  );
}

export default Code;