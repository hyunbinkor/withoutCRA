import userIcon from '@/assets/header-upper-right-user-icon.png';

import getRepositoryInfo from '@/utils/api/getRepositoryInfo';

import Button from '@/components/atomic/Button';
import FlexContainer from '@/components/atomic/FlexContainer';
import Text from '@/components/atomic/Text';
import ImageButton from '@/components/atomic/ImageButton';
import FlexRowContainer from '@/components/atomic/FlexRowContainer';

function Header() {
  const repositoryInfo = getRepositoryInfo();

  return (
    <FlexRowContainer tag='header'>
      <FlexContainer
        tag="nav"
        className="header-upper">
        <FlexContainer
          className="header-upper-left"
          justifyContents="flex_start"
          gap={6}
        >
          <Button
            btnIcon="menu"
            btnHasBorder
            btnHandleClick={() => console.log('menu button')}
          />
          <Button
            btnIcon="logo"
            btnLogo
            btnIconColor='black'
            btnHandleClick={() => console.log('logo button')}
          />
          <FlexContainer
            className="header-upper-left-repository"
            justifyContents="flex_start"
          >
            <Button
              btnHandleClick={() => console.log('go to Repository owner')}
            >
              <Text
                fontSize="px14"
                color="black"
                link={repositoryInfo.userPageLink}
                text="react-bootstrap"
              />
            </Button>
            <Text fontSize="px14" color="black" text="/" />
            <Button
              btnHandleClick={() => console.log('go to Repository owner')}
            >
              <Text
                fontSize="px14"
                color="black"
                isBold
                link={repositoryInfo.repositoryLink}
                text="react-bootstrap"
              />
            </Button>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          className="header-upper-right"
          justifyContents="flex_end"
          gap={4}
        >
          <Button
            btnIcon="search"
            btnHasBorder
            btnHandleClick={() => console.log('search button clicked')}
          >
            <Text fontSize="px14" color="black" text="Type " />
            <Text fontSize="px14" color="black" text="/" />
            <Text fontSize="px14" color="black" text=" to search" />
          </Button>      
          <FlexContainer
            className="header-upper-right-buttons"
            justifyContents="flex_end"
            gap={4}
          >
            <div
              className="header-upper-right-slash"
              style={{
                width: '1px',
                height: '20px',
                backgroundColor: '#d1d8df',
                margin: '4px'
              }}
            />
            <Button
              btnIcon="create"
              btnHasToggle
              btnHasBorder
              btnHandleClick={() => console.log('create btn clicked')}
            />
            <Button
              btnIcon="issue"
              btnHasBorder
              btnHandleClick={() => console.log('issue btn clicked')}
            />
            <Button
              btnIcon="pull_request"
              btnHasBorder
              btnHandleClick={() => console.log('pullreq btn clicked')}
            />
            <Button
              btnIcon="notification"
              btnHasBorder
              btnHandleClick={() => console.log('notification btn clicked')}
            />
          </FlexContainer>
            <ImageButton
              btnImg={userIcon}
              btnHandleClick={() => console.log('user icon clicked')}
            />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        tag="nav"
        className="header-lower"
        justifyContents="flex_start"
        gap={6}
      >
        <Button
          btnIcon="code"
          btnHandleClick={() => console.log('code btn clicked')}
        >
          <Text fontSize="px14" color="black" text="Code" />
        </Button>
        <Button
          btnIcon="issue"
          btnHandleClick={() => console.log('issue btn clicked')}
        >
          <Text fontSize="px14" color="black" text="Issues" />
        </Button>
        <Button
          btnIcon="pull_request"
          btnHandleClick={() => console.log('pull_request btn clicked')}
        >
          <Text fontSize="px14" color="black" text="Pull requests" />
        </Button>
        <Button
          btnIcon="action"
          btnHandleClick={() => console.log('action btn clicked')}
        >
          <Text fontSize="px14" color="black" text="Actions" />
        </Button>
        <Button
          btnIcon="project"
          btnHandleClick={() => console.log('project btn clicked')}
        >
          <Text fontSize="px14" color="black" text="Projects" />
        </Button>
        <Button
          btnIcon="wiki"
          btnHandleClick={() => console.log('wiki btn clicked')}
        >
          <Text fontSize="px14" color="black" text="Wiki" />
        </Button>
        <Button
          btnIcon="security"
          btnHandleClick={() => console.log('security btn clicked')}
        >
          <Text fontSize="px14" color="black" text="Security" />
        </Button>
        <Button
          btnIcon="insight"
          btnHandleClick={() => console.log('insight btn clicked')}
        >
          <Text fontSize="px14" color="black" text="Insights" />
        </Button>
      </FlexContainer>
    </FlexRowContainer>
  );
}

export default Header;
