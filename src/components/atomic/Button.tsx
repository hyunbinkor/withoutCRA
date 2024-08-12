import '@components/Atomic/Button.css'
import { Children, ReactNode } from "react";
import Svg from "./Svg";
import { SizeType, SvgType } from './Type';

interface Props {
  btnIcon?: SvgType,
  btnIconColor?: string,
  btnHasToggle?: boolean,
  btnToggleSeperate?: boolean,
  btnSize?: SizeType,
  btnBackgroundColor?: string,
  btnHasBorder?: boolean,
  btnBorderColor?: string,
  btnHandleClick: () => (void),
  btnHandleToggleClick?: () => (void),
  children?: ReactNode,
}

function Button({
  btnIcon,
  btnIconColor='gray_400',
  btnHasToggle=false,
  btnToggleSeperate=false,
  btnSize='medium',
  btnBackgroundColor='gray_100',
  btnHasBorder=false,
  btnBorderColor='gray_300',
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
            btnHasBorder ? 'border-1px' : 'border-0px',
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
            btnHasBorder ? 'border-1px' : 'border-0px',
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
          btnHasBorder ? 'border-1px' : 'border-0px',
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