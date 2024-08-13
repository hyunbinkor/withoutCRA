import Button from "@/components/atomic/Button";
import FlexContainer from "@/components/atomic/FlexContainer";
import Text from "@/components/atomic/Text";

function SubTitle() {
  return (
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
          btnHandleClick={() => console.log('file search!')}
        >
          <input className="subtitle-right-searchbar-text tarnished" placeholder="Go to file" type="text" />
          <Button
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
            text="AddFile"
          />
        </Button>
        <Button
          btnIcon="code"
          btnHasBorder
          btnHasToggle
          btnHandleClick={() => console.log('download code?')}
        >
          <Text
            fontSize="px14"
            color="black"
            text="Code"
          />
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};

export default SubTitle;