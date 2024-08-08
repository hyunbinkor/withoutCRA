import Svg from '@/components/atomic/Svg';

interface Props {
  isFolder?: boolean;
  commitMessage: string;
  commitNumber?: number;
  commitDate: Date;
}

function FileTreeLine({
  isFolder = false,
  commitMessage,
  commitNumber,
  commitDate,
}: Props) {
  // 에러 핸들링을 한 번 넣어주면 좋을듯? -> 데이터 유효성 검사를

  return (
    <tr className="filetree-document-line">
      <td className="filetree-document-line-filename">
        <Svg icon={isFolder ? 'folder' : 'file' } />
        <a className="h3 filetree-document-line-filename-text-text">.github</a> 
      </td>
      <td className="filetree-document-line-commitmessage">
        <div className="filetree-document-line-commitmessage-container">
          <a className="h3 filetree-document-line-commitmessage-text tarnished">chore(ci): update to node 20 (</a>{/*
          */}<a className="h3 filetree-document-line-commitmessage-text blue" href="">#6774</a>{/*
          */}<a className="h3 filetree-document-line-commitmessage-text tarnished" href="">)</a>
        </div>
      </td>
      <td className="filetree-document-line-modifieddate">
        <a className="h3 filetree-document-line-modifieddate-text tarnished">4 month ago</a> 
      </td>
    </tr>
  );
};

export default FileTreeLine;