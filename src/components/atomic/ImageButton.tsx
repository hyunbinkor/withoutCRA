import '@components/Atomic/ImageButton.css'
import Svg from "@components/atomic/Svg";
import { SizeType, SvgType } from '@components/atomic/Type';
import { ReactNode } from 'react';

interface Props {
  btnSize?: SizeType,
  btnImg: string,
  btnIsRec?: boolean,
  btnBorderWidth?: number,
  btnBorderColor?: string,
  btnHandleClick: () => (void),
}

function ImageButton({
  btnSize='medium',
  btnImg,
  btnIsRec = false,
  btnBorderWidth = 1,
  btnBorderColor='gray_300',
  btnHandleClick,
}: Props) {
  
  return (
    <button
      className={[
        btnIsRec ? 'imgbtnrec' : 'imgbtn',
        `imgbtn-${btnSize}`,
        `imgbtn-border-${btnBorderColor}`,
        `imgbtn-border-${btnBorderWidth}px`
      ].join(' ')}
      onClick={btnHandleClick}
    >
      <img
        src={btnImg}
        className={[
        btnIsRec ? 'imgbtnrec' : 'imgbtn',
        `imgbtn-${btnSize}`,
      ].join(' ')}
      />
    </button>
  );
};

export default ImageButton;