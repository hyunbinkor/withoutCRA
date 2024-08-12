import userIcon from '@/assets/header-upper-right-user-icon.png';
import Button from '@/components/atomic/Button';
import FlexContainer from '@/components/atomic/FlexContainer';
import getRepositoryInfo from '@/utils/api/getRepositoryInfo';
import Text from '@/components/atomic/Text';

function Header() {
  const repositoryInfo = getRepositoryInfo();

  return (
    <header>
      <FlexContainer tag="nav" className="header-upper">
        <FlexContainer className="header-upper-left" justifyContents="left">
          <Button
            btnIcon="menu"
            btnHasBorder
            btnHandleClick={() => console.log('menu button')}
          />
          <Button
            btnIcon="logo"
            btnHandleClick={() => console.log('logo button')}
          />
          <FlexContainer
            className="header-upper-left-repository"
            justifyContents="left"
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
        <FlexContainer className="header-upper-right" justifyContents="right">
          <Button
            btnIcon="search"
            btnHasBorder
            btnHandleClick={() => console.log('search button clicked')}
          >
            <Text fontSize="px14" color="black" text="Type " />
            <Text fontSize="px14" color="black" text="/" />
            <Text fontSize="px14" color="black" text=" to search" />
          </Button>
          <div className="header-upper-right-slash"></div>
          <FlexContainer
            className="header-upper-right-buttons"
            justifyContents="right"
          >
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
          <div className="header-upper-right-user">
            <img
              className="header-upper-right-user-icon"
              src={userIcon}
              alt=""
            />
          </div>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer tag="nav" className="header-lower" justifyContents="left">
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
    </header>
  );
}

export default Header;
