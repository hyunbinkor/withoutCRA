import commitUserIcon from '@/assets/main-filetree-tab-line-left-usericon.png'

import getLastCommit from '@/utils/api/getLastCommit';
import useFromDate from '@/utils/hook/useFromDate';

import Text from '@/components/atomic/Text';
import Button from '@/components/atomic/Button';
import ImageButton from '@/components/atomic/ImageButton';
import FlexContainer from '@/components/atomic/FlexContainer';
import Svg from '@/components/atomic/Svg';

function FileTreeDocumentTab() {
  const lastCommit = getLastCommit();

  return (
    <tr className='filetree-tab'>
      <td
        className='filetree-tab-td'
        colSpan={3}
        style={{
          backgroundColor: "#F6F8FA",
          padding: '8px 6px',
        }}
      >
        <FlexContainer className='filetree-tab-container'>
          <FlexContainer
            className='filetree-tab-left'
            justifyContents='flex_start'
            gap={3}
          >
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
          <FlexContainer
            className='filetree-tab-right'
            justifyContents='flex_end'
            gap={3}
          >
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
      </td>
    </tr>
  );
}

export default FileTreeDocumentTab;
