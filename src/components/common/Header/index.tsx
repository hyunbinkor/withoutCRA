import StyleContainer from '@/components/atomic/StyleContainer';
import FlexContainer from '@/components/atomic/FlexContainer';

import Button from '@/components/atomic/Button';
import Text from '@/components/atomic/Text';
import ImageButton from '@/components/atomic/ImageButton';
import userIcon from '@/assets/header-upper-right-user-icon.png';

import COLORS from '@/utils/constants/COLORS';

import getRepositoryInfo from '@/utils/api/getRepositoryInfo';
import Boundary from '@/components/atomic/Boundary';
import MiniStyleContainer from '@/components/atomic/MiniStyleContainer';
import CodeBoundary from '@/components/atomic/CodeBoundary';

function Header() {
  const repositoryInfo = getRepositoryInfo();

  return (
    <StyleContainer
      className='header-style'
      borderBottom={`solid 1px ${COLORS.GRAY_300}`}
      padding='16px 16px 0px 16px'
      backgroundColor={COLORS.GRAY_100}
    >
      <FlexContainer className='header-flex' flexDirection='column' gap='8px'>
        <FlexContainer className='header_upper-flex'>
          <FlexContainer className='header_upper_left-flex' justifyContent='flex-start' gap='8px'>
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
            <FlexContainer className='header_upper_left_repository-flex' justifyContent='flex-start' alignItems='center'>
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
          <FlexContainer className='header_upper_right-flex' justifyContent='flex-end' gap='8px'>
            <Button
              btnWidth={350}
              btnIcon="search"
              btnHasBorder
              btnHandleClick={() => console.log('search button clicked')}
            >
              <Text fontSize="px14" color="gray_400" text="Type" />
              <CodeBoundary borderColor='gray_400' backgroundColor='gray_100'>
                <Text fontSize="px14" color="gray_400" text="/" />
              </CodeBoundary>
              <Text fontSize="px14" color="gray_400" text="to search" />
            </Button>
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
            <ImageButton
              btnImg={userIcon}
              btnHandleClick={() => console.log('user icon clicked')}
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer className='header_lower-flex' justifyContent='flex-start' gap='8px'>
          <MiniStyleContainer backgroundColor={COLORS.GRAY_100} padding='9px 3px' borderBottom='solid 2px #FD8C73'>
            <Button
              btnIcon="code"
              btnHandleClick={() => console.log('code btn clicked')}
            >
              <Text fontSize="px14" isBold color="black" text="Code" />
            </Button>
          </MiniStyleContainer>
          <MiniStyleContainer backgroundColor={COLORS.GRAY_100} padding='9px 3px'>
            <Button
              btnIcon="issue"
              btnHandleClick={() => console.log('issue btn clicked')}
            >
              <Text fontSize="px14" color="black" text="Issues" />
              <Boundary>
                <Text fontSize="px14" color="black" text="145" />
              </Boundary>
            </Button>
          </MiniStyleContainer>
          <MiniStyleContainer backgroundColor={COLORS.GRAY_100} padding='9px 3px'>
            <Button
              btnIcon="pull_request"
              btnHandleClick={() => console.log('pull_request btn clicked')}
            >
              <Text fontSize="px14" color="black" text="Pull requests" />
              <Boundary>
                <Text fontSize="px14" color="black" text="51" />
              </Boundary>
            </Button>
          </MiniStyleContainer>
          <MiniStyleContainer backgroundColor={COLORS.GRAY_100} padding='9px 3px'>
            <Button
              btnIcon="action"
              btnHandleClick={() => console.log('action btn clicked')}
            >
              <Text fontSize="px14" color="black" text="Actions" />
            </Button>            
          </MiniStyleContainer>
          <MiniStyleContainer backgroundColor={COLORS.GRAY_100} padding='9px 3px'>
            <Button
              btnIcon="project"
              btnHandleClick={() => console.log('project btn clicked')}
            >
              <Text fontSize="px14" color="black" text="Projects" />
              <Boundary>
                <Text fontSize="px14" color="black" text="1" />
              </Boundary>
            </Button>
          </MiniStyleContainer>
          <MiniStyleContainer backgroundColor={COLORS.GRAY_100} padding='9px 3px'>
            <Button
              btnIcon="wiki"
              btnHandleClick={() => console.log('wiki btn clicked')}
            >
              <Text fontSize="px14" color="black" text="Wiki" />
            </Button>
          </MiniStyleContainer>
          <MiniStyleContainer backgroundColor={COLORS.GRAY_100} padding='9px 3px'>
            <Button
              btnIcon="security"
              btnHandleClick={() => console.log('security btn clicked')}
            >
              <Text fontSize="px14" color="black" text="Security" />
            </Button>
          </MiniStyleContainer>
          <MiniStyleContainer backgroundColor={COLORS.GRAY_100} padding='9px 3px'>
            <Button
              btnIcon="insight"
              btnHandleClick={() => console.log('insight btn clicked')}
            >
              <Text fontSize="px14" color="black" text="Insights" />
            </Button>
          </MiniStyleContainer>
        </FlexContainer>
      </FlexContainer>
    </StyleContainer>
  );
}

export default Header;
