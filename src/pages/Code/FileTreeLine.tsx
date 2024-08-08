import Svg from '@/components/Atomic/Svg';
import useFromDate from '@components/Hook/useFromDate'

interface Props {
  isFolder?: boolean;
  commitMessage: string;
  mergeNumber?: number;
  commitDate: Date;
}

function FileTreeLine({
  isFolder = false,
  commitMessage,
  mergeNumber,
  commitDate,
}: Props) {
  // 에러 핸들링을 한 번 넣어주면 좋을듯? -> 데이터 유효성 검사를

  const fromCommitDate = useFromDate(commitDate);

  return (
    <tr className="filetree-document-line">
      <td className="filetree-document-line-filename">
        <Svg icon={isFolder ? 'folder' : 'file' } />
        <a className="font-14 black">.github</a> 
      </td>
      <td className="filetree-document-line-commitmessage">
        <a className="font-14 gray-300">{commitMessage}</a>
        { mergeNumber ?? 
          <>
            <a className="font-14 gray-300">(</a>
            <a className="font-14 blue" href="">#6774</a>
            <a className="font-14 gray-300" href="">)</a>
        </>}
      </td>
      <td className="filetree-document-line-modifieddate">
        <a className="font-14 gray-300">{fromCommitDate}</a> 
      </td>
    </tr>
  );
};

export default FileTreeLine;