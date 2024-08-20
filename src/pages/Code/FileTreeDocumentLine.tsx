import FlexContainer from '@/components/atomic/FlexContainer';
import Svg from '@/components/atomic/Svg';
import Text from '@/components/atomic/Text';
import useFromDate from '@/utils/hook/useFromDate';

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
    <tr className="filetree-document-line">
      <td className="filetree-document-line-filename">
        <FlexContainer
          justifyContents='flex_start'
          gap={4}
        >
          {isFolder ? (
            <Svg color={'blue_200'} icon={'folder'} />
          ) : (
            <Svg color={'gray_400'} icon={'file'} />
          )}
          <Text
            text={fileName}
            link={"https://github.com/react-bootstrap/react-bootstrap"}
          />
        </FlexContainer>
      </td>
      <td className="filetree-document-line-commitmessage">
        <Text
          color='gray_400'
          text={commitMessage}
          link={"https://github.com/react-bootstrap/react-bootstrap"}
        />
        {mergeNumber && (
          <>
            <Text
              color='gray_400'
              text=' ('
              link={"https://github.com/react-bootstrap/react-bootstrap"}
            />
            <Text
              color='blue_300'
              text={`#${mergeNumber}`}
              link={"https://github.com/react-bootstrap/react-bootstrap"}
            />
            <Text
              color='gray_400'
              text=')'
              link={"https://github.com/react-bootstrap/react-bootstrap"}
            />
          </>
        )}
      </td>
      <td className="filetree-document-line-modifieddate">
        <Text
          color='gray_400'
          text={fromCommitDate}
          link={"https://github.com/react-bootstrap/react-bootstrap"}
        />
      </td>
    </tr>
  );
}

export default FileTreeDocumentLine;
