import Button from "@/components/atomic/Button";
import FlexContainer from "@/components/atomic/FlexContainer";
import FlexRowContainer from "@/components/atomic/FlexRowContainer";
import Text from "@/components/atomic/Text";
import '@/pages/Code/SubTitle.css'

function SubTitle() {
  return (
    <FlexRowContainer>
      <FlexContainer className="subtitle">
        <FlexContainer
          className="subtitle-left"
          justifyContents="flex_start"
          gap={4}
        >
          <Button
            btnIcon="branch"
            btnHasBorder
            btnHasToggle
            btnHandleClick={() => console.log('branch button clicked')}
          >
            <Text
              fontSize="px14"
              color="black"
              text="master"
            />
          </Button>
          <Button
            btnIcon="branch"
            btnBackgroundColor="white"
            btnHandleClick={() => console.log('branches button clicked')}
          >
            <Text
              fontSize="px14"
              color="black"
              isBold
              text="24"
            />
            <Text
              fontSize="px14"
              color="black"
              text="branches"
            />
          </Button>
          <Button
            btnIcon="tag"
            btnBackgroundColor="white"
            btnHandleClick={() => console.log('tags button clicked')}
          >
            <Text
              fontSize="px14"
              color="black"
              isBold
              text="232"
            />
            <Text
              fontSize="px14"
              color="black"
              text="tags"
            />
          </Button>
        </FlexContainer>
        <FlexContainer
          className="subtitle-right"
          justifyContents="flex_end"
          gap={4}
        >
          <Button
            btnIcon="search"
            btnBackgroundColor="white"
            btnHasBorder
            btnHandleClick={() => console.log('file search!')}
          >
            <input placeholder="Go to file" type="text"/>
            <Button
              btnSize="small"
              btnHasBorder
              btnHandleClick={() => console.log('tab buttonclicked')}
            >
              <Text
                fontSize="px12"
                color="black"
                text="t"
              />
            </Button>
          </Button>
          <Button
            btnHasBorder
            btnHasToggle
            btnHandleClick={() => console.log('add file?')}
          >
            <Text
              fontSize="px14"
              color="black"
              isBold
              text="AddFile"
            />
          </Button>
          <Button
            btnIcon="code"
            btnIconColor="white"
            btnBackgroundColor="green_300"
            btnHasBorder
            btnHasToggle
            btnHandleClick={() => console.log('download code?')}
          >
            <Text
              fontSize="px14"
              color="white"
              isBold
              text="Code"
            />
          </Button>
        </FlexContainer>
      </FlexContainer>
    </FlexRowContainer>
  );
};

export default SubTitle;