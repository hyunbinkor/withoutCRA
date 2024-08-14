import FlexContainer from "@/components/atomic/FlexContainer";
import FlexRowContainer from "@/components/atomic/FlexRowContainer";
import Button from "@/components/atomic/Button";
import Text from "@/components/atomic/Text";

function Footer() {
  return (
    <FlexRowContainer>
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
        <ul className="footer-navigation-list">
          <li className="footer-navigation-list-item">
            <a href="" className="footer-navigation-list-text blue">Terms</a>
          </li>
          <li className="footer-navigation-list-item">
            <a href="" className="footer-navigation-list-text blue">Privacy</a>
          </li>
          <li className="footer-navigation-list-item">
            <a href="" className="footer-navigation-list-text blue">Security</a>
          </li>
          <li className="footer-navigation-list-item">
            <a href="" className="footer-navigation-list-text blue">Status</a>
          </li>
          <li className="footer-navigation-list-item">
            <a href="" className="footer-navigation-list-text blue">Docs</a>
          </li>
          <li className="footer-navigation-list-item">
            <a href="" className="footer-navigation-list-text blue">Contact</a>
          </li>
          <li className="footer-navigation-list-item">
            <a href="" className="footer-navigation-list-text blue">Manage cookies</a>
          </li>
          <li className="footer-navigation-list-item">
            <a href="" className="footer-navigation-list-text blue">Do not share my personal information</a>
          </li>
        </ul>
      </FlexContainer>
    </FlexRowContainer>
  );
};

export default Footer;