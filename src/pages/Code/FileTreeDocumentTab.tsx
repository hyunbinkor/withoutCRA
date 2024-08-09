import getLastCommit from "@/utils/api/getLastCommit";
import useFromDate from "@/utils/hook/useFromDate";

function FileTreeDocumentTab() {
  const lastCommit = getLastCommit();

  return (
    <tr className="filetree-tab">
      <td className="filetree-tab-line">
        <div className="filetree-tab-line-left">
          <img src="./assets/main-filetree-tab-line-left-usericon.png" alt="" className="filetree-tab-line-left-usericon" />
          <a className="h3 filetree-tab-line-left-userid bold">
            {lastCommit.commitUser}
          </a>
          <a className="h3 filetree-tab-line-left-commitmessage tarnished">
            {lastCommit.commitMessage + lastCommit.mergeNumber && `(#${lastCommit.mergeNumber})`}
          </a>
          <svg className="filetree-tab-line-left-githubaction" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>
        </div>
        <div className="filetree-tab-line-right">
          <a className="h2 filetree-tab-line-right-commitinfo tarnished">
            {lastCommit.commitId + ' · ' + useFromDate(lastCommit.commitDate)}
          </a>
          <button className="filetree-tab-line-right-pastcommit">
            <svg className="filetree-tab-line-right-pastcommit-icon" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg>
            <a className="h2 filetree-tab-line-right-pastcommit-text bold">
              {lastCommit.commitNumber + ' Commits'}
            </a>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default FileTreeDocumentTab;