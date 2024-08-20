import FlexContainer from '@/components/atomic/FlexContainer';
import ImageButton from '@/components/atomic/ImageButton';
import Text from '@/components/atomic/Text';

import RepoIcon from '@/assets/title-left-repository-icon.png'
import Button from '@/components/atomic/Button';
import Boundary from '@/components/atomic/Boundary';
import FlexRowContainer from '@/components/atomic/FlexRowContainer';
import WatchButton from '@/components/functional/WatchButton';

function Title() {
  return (
    <FlexRowContainer hasBottom columnPadding={8}>
      <FlexContainer className="title">
        <FlexContainer
          className="title-left"
          justifyContents="flex_start"
          gap={5}>
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
        <FlexContainer
          className="title-right"
          justifyContents="flex_end"
          gap={4}
        >
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
    </FlexRowContainer>
  );
}

export default Title;
