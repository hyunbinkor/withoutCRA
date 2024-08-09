import { Children, ReactNode } from "react";
import Svg from "./Svg";

interface Props {
  btnIcon?: // 이거 리스트 만들어서 대체해야 할듯?
    'folder' | 
    'file' |
    'toggle' |
    'past',
  btnIconColor?: string,
  btnHasToggle?: boolean,
  btnToggleSeperate?: boolean,
  btnSize?: 'small' | 'medium',
  btnBackgroundColor?: string,
  btnHasBorder?: boolean,
  btnBorderColor?: string,
  btnHandleClick: () => (void),
  btnHandleToggleClick?: () => (void),
  children?: ReactNode,
}

function Button({
  btnIcon,
  btnIconColor='gray-400',
  btnHasToggle=false,
  btnToggleSeperate=false,
  btnSize='medium',
  btnBackgroundColor='gray-100',
  btnHasBorder=false,
  btnBorderColor='gray-300',
  btnHandleClick,
  btnHandleToggleClick,
  children,
}: Props) {
  
  if (btnHasToggle && btnToggleSeperate) {
    return (
      <>
        <button
          className={[
            `btn-${btnSize}`,
            `background-${btnBackgroundColor}`,
            `border-${btnBorderColor}`,
            btnHasBorder && 'border-1px',
          ].join(' ')}
          onClick={btnHandleClick}
        >
          {btnIcon && <Svg color={btnIconColor} icon={btnIcon} />}
        </button>
        {Children}
        <button
          className={[
            `btn-${btnSize}`,
            `background-${btnBackgroundColor}`,
            `border-${btnBorderColor}`,
            btnHasBorder && 'border-1px',
          ].join(' ')}
          onClick={btnHandleToggleClick}
        >
          {btnIcon && <Svg color={btnIconColor} icon={'toggle'} />}
        </button>
      </>
    );
  } else {
    return (
      <button
        className={[
          `btn-${btnSize}`,
          `background-${btnBackgroundColor}`,
          `border-${btnBorderColor}`,
          btnHasBorder && 'border-1px',
        ].join(' ')}
        onClick={btnHandleClick}
      >
        {btnIcon && <Svg color={btnIconColor} icon={btnIcon} />}
        {children}
        {btnHasToggle && <Svg color={btnIconColor} icon={'toggle'} />}
      </button>
    );
  };
};

export default Button;