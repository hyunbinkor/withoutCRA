import FlexContainer from "@/components/atomic/FlexContainer";
import FlexRowContainer from "@/components/atomic/FlexRowContainer";
import Button from "@/components/atomic/Button";
import Text from "@/components/atomic/Text";
import List from "@/components/atomic/List";

function Footer() {
  return (
    <FlexRowContainer columnPadding={10}>
      <FlexContainer
        justifyContents="center"
        gap={10}
      >
        <FlexContainer
          justifyContents="flex_start"
          gap={4}
        >
          <Button
            btnIcon="logo"
            btnLogo
            btnIconColor='gray_400'
            btnHandleClick={() => console.log('logo button')}
          />
          <Text
            fontSize="px12"
            color="gray_400"
            text="© 2024 GitHub, Inc."
          />
        </FlexContainer>
        <FlexContainer>
          <List gap={7}>
            {[
              <Text
                fontSize="px12"
                color="gray_400"
                text="Terms"
                link=""
              />,
              <Text
                fontSize="px12"
                color="gray_400"
                text="Privacy"
                link=""
              />,
              <Text
                fontSize="px12"
                color="gray_400"
                text="Security"
                link=""
              />,
              <Text
                fontSize="px12"
                color="gray_400"
                text="Status"
                link=""
              />,
              <Text
                fontSize="px12"
                color="gray_400"
                text="Docs"
                link=""
              />,
              <Text
                fontSize="px12"
                color="gray_400"
                text="Contact"
                link=""
              />,
              <Text
                fontSize="px12"
                color="gray_400"
                text="Manage Cookies"
                link=""
              />,
              <Text
                fontSize="px12"
                color="gray_400"
                text="Do not share my personal information"
                link=""
              />,            
            ]}
          </List>
        </FlexContainer>
      </FlexContainer>
    </FlexRowContainer>
  );
};

export default Footer;