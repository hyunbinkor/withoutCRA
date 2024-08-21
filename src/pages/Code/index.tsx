import Title from "./Title";
import SubTitle from "./SubTitle";
import FileTree from "./FileTree";
import Markdown from "./Markdown";
import Aside from "./Aside";
import FlexContainer from "@/components/atomic/FlexContainer";
import StyleContainer from "@/components/atomic/StyleContainer";


function Code() {

  return (
    <FlexContainer flexDirection='column' alignItems="center">
      <StyleContainer maxWidth="1216px" flexBasis='704px'>
        <Title />
        <FlexContainer justifyContent="center" alignItems="start" gap="24px">
          <StyleContainer padding="20px 0px" flexBasis="404px" flexGrow={57}>
            <FlexContainer flexDirection="column" gap="10px" >
              <SubTitle />
              <FileTree />
              <Markdown />
            </FlexContainer>
          </StyleContainer>
          <StyleContainer padding="8px 0px" flexBasis="240px" flexGrow={7}>
            <Aside />
          </StyleContainer>
        </FlexContainer>
      </StyleContainer>
    </FlexContainer>
  );
}

export default Code;