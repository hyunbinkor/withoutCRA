import StyleContainer from '@/components/atomic/StyleContainer';
import FlexContainer from '@/components/atomic/FlexContainer';
import List from "@/components/atomic/List";

import Button from "@/components/atomic/Button";
import Text from "@/components/atomic/Text";

function Footer() {
  return (
    <StyleContainer className='footer-style' padding='64px 0px 40px 0px'>
      <FlexContainer className='footer-flex' justifyContent="center" gap='20px'>
        <FlexContainer className='footer_logo-flex' justifyContent='center' alignItems='center' gap='8px'>
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
    </StyleContainer>
  );
};

export default Footer;