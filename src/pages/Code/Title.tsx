import StyleContainer from '@/components/atomic/StyleContainer';
import FlexContainer from '@/components/atomic/FlexContainer';

import Text from '@/components/atomic/Text';
import Button from '@/components/atomic/Button';
import Boundary from '@/components/atomic/Boundary';
import ImageButton from '@/components/atomic/ImageButton';
import WatchButton from '@/components/functional/WatchButton';
import RepoIcon from '@/assets/title-left-repository-icon.png'

import COLORS from '@/utils/constants/COLORS';

function Title() {
  return (
    <StyleContainer
      className='title-style'
      borderBottom={`solid 1px ${COLORS.GRAY_300}`}
      padding='16px 0px'
    >
      <FlexContainer className="title-flex">
        <FlexContainer className="title_left-flex" justifyContent="flex-start" gap='10px'>
          <ImageButton
            btnSize='mini'
            btnImg={RepoIcon}
            btnIsRec
            btnHandleClick={() => console.log('repo button clicked')}
          >
          </ImageButton>
          <Text
            fontSize='px18'
            color='black'
            isBold
            text='react-bootstrap'
            link='https://github.com/react-bootstrap/react-bootstrap'
          />
          <Boundary
            hasBorder
            backgroundColor='white'
            borderColor='gray_300'
          >
            <Text
              fontSize='px12'
              color='gray_400'
              isBold
              text='Public'
            />
          </Boundary>
        </FlexContainer>
        <FlexContainer className="title_right-flex" justifyContent="flex-end" gap='8px'>
          <WatchButton/>
          <Button
            btnIcon='fork'
            btnSize='small'
            btnHasBorder
            btnHasToggle
            btnToggleSeperate
            btnHandleClick={() => console.log('fork button clicked')}
          >
            <Text
              fontSize='px12'
              color='black'
              text='Fork'
            />
            <Boundary
              backgroundColor='gray_200'
            >
              <Text
                fontSize='px12'
                color='black'
                text='3.6k'
              />
            </Boundary>
          </Button>
          <Button
            btnIcon='star'
            btnSize='small'
            btnHasBorder
            btnHasToggle
            btnToggleSeperate
            btnHandleClick={() => console.log('star button clicked')}
          >
            <Text
              fontSize='px12'
              color='black'
              text='Star'
            />
            <Boundary
              backgroundColor='gray_200'
            >
              <Text
                fontSize='px12'
                color='black'
                text='22.3k'
              />
            </Boundary>
          </Button>
        </FlexContainer>
      </FlexContainer>
    </StyleContainer>
  );
}

export default Title;
