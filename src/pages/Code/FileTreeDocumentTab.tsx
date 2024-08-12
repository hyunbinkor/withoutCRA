import getLastCommit from "@/utils/api/getLastCommit";
import useFromDate from "@/utils/hook/useFromDate";

import Text from "@/components/Atomic/Text";
import Button from "@/components/Atomic/Button";
import Svg from "@/components/Atomic/Svg";

function FileTreeDocumentTab() {
  const lastCommit = getLastCommit();

  return (
    <tr className="filetree-tab">
      <td className="filetree-tab-line">
        <div className="filetree-tab-line-left">
          {/* img도 뭔가 따로 처리 필요 */}
          <img src="./assets/main-filetree-tab-line-left-usericon.png" alt="" className="filetree-tab-line-left-usericon" />
          <Text
            fontSize='px14'
            color='black'
            isBold
            link={lastCommit.commitUserLink}
            text={lastCommit.commitUser}
          />
          <Text
            fontSize='px14'
            color='gray_300'
            link={lastCommit.commitLink}
            text={lastCommit.commitMessage + lastCommit.mergeNumber && `(#${lastCommit.mergeNumber})`}
          />
          {/* Lastcommit.isCommitSucceded로 svg 분기 처리 */}
          <svg className="filetree-tab-line-left-githubaction" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>
        </div>
        <div className="filetree-tab-line-right">
          <Text
            fontSize='px12'
            color='gray_300'
            link={lastCommit.commitLink}
            text={lastCommit.commitId}
          />
          <Text
            fontSize='px12'
            color='gray_300'
            text={' · ' + useFromDate(lastCommit.commitDate)}
          />
          <Button
            btnIcon='past'
            btnHandleClick={
              // 임시 땜빵 함수
              () => console.log('https://github.com/react-bootstrap/react-bootstrap/commits/master/')}
          >
            <Text
              fontSize='px12'
              color='black'
              isBold
              link={lastCommit.pastCommitLink}
              text={lastCommit.commitNumber + ' Commits'}
            />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default FileTreeDocumentTab;