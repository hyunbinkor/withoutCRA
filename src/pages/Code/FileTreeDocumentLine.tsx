import Svg from '@/components/Atomic/Svg';
import useFromDate from '@/utils/hook/useFromDate'

interface Props {
  isFolder?: boolean;
  fileName: string;
  commitMessage: string;
  mergeNumber?: number;
  commitDate: Date;
}

function FileTreeDocumentLine({
  isFolder = false,
  fileName,
  commitMessage,
  mergeNumber,
  commitDate,
}: Props) {

  const fromCommitDate = useFromDate(commitDate);

  return (
    <tr className='filetree-document-line'>
      <td className='filetree-document-line-filename'>
        { isFolder ?
          <Svg color={'blue_200'} icon={'folder'} />
          :
          <Svg color={'gray_400'} icon={'file'} />
        }
        <a className='font-14 black'>{fileName}</a> 
      </td>
      <td className='filetree-document-line-commitmessage'>
        <a className='font-14 gray-300'>{commitMessage}</a>
        { mergeNumber ?? 
          <>
            <a className='font-14 gray-300'> (</a>
            <a className='font-14 blue' href=''>#6774</a>
            <a className='font-14 gray-300' href=''>)</a>
        </>}
      </td>
      <td className='filetree-document-line-modifieddate'>
        <a className='font-14 gray-300'>{fromCommitDate}</a> 
      </td>
    </tr>
  );
};

export default FileTreeDocumentLine;