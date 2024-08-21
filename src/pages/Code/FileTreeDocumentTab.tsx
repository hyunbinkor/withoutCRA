import commitUserIcon from '@/assets/main-filetree-tab-line-left-usericon.png'

import getLastCommit from '@/utils/api/getLastCommit';
import useFromDate from '@/utils/hook/useFromDate';

import Text from '@/components/atomic/Text';
import Button from '@/components/atomic/Button';
import ImageButton from '@/components/atomic/ImageButton';
import FlexContainer from '@/components/atomic/FlexContainer';
import Svg from '@/components/atomic/Svg';
import StyleContainer from '@/components/atomic/StyleContainer';

import COLORS from '@/utils/constants/COLORS';

function FileTreeDocumentTab() {
  const lastCommit = getLastCommit();

  return (
    <tr className='filetree_tab-tr'>
      <td
        className='filetree_tab-td'
        colSpan={3}
      >
        <StyleContainer
          className='header-style'
          padding='8px'
          backgroundColor={COLORS.GRAY_100}
        >
          <FlexContainer className='filetree_tab-flex'>
            <FlexContainer className='filetree_tab_left-flex' justifyContent='flex-start' alignItems='center' gap='8px' >
              <ImageButton
                btnSize='mini'
                btnImg={commitUserIcon}
                btnHandleClick={() => console.log('commit user clicked')}
              />
              <Text
                fontSize="px14"
                color="black"
                isBold
                link={lastCommit.commitUserLink}
                text={lastCommit.commitUser}
              />
              <Text
                fontSize="px14"
                color="gray_400"
                link={lastCommit.commitLink}
                text={
                  lastCommit.commitMessage + `(#${lastCommit.mergeNumber})`
                }
              />
              {lastCommit.isCommitSucceded ? 
                <Svg
                  icon='success'
                  color='green_300'
                />
                : 
                <Svg
                  icon='fail'
                  color='red_300'
                />
              }
            </FlexContainer>
            <FlexContainer className='filetree_tab_right-flex' justifyContent='flex-end' alignItems='center' gap='6px'>
              <Text
                fontSize="px12"
                color="gray_400"
                link={lastCommit.commitLink}
                text={lastCommit.commitId}
              />
              <Text
                fontSize="px12"
                color="gray_400"
                text={' · ' + useFromDate(lastCommit.commitDate)}
              />
              <Button
                btnIcon="past"
                btnHandleClick={
                  // 임시 땜빵 함수
                  () =>
                    console.log(
                      'https://github.com/react-bootstrap/react-bootstrap/commits/master/',
                    )
                }
              >
                <Text
                  fontSize="px12"
                  color="black"
                  isBold
                  link={lastCommit.pastCommitLink}
                  text={lastCommit.commitNumber + ' Commits'}
                />
              </Button>
            </FlexContainer>
          </FlexContainer>
        </StyleContainer>
      </td>
    </tr>
  );
}

export default FileTreeDocumentTab;
