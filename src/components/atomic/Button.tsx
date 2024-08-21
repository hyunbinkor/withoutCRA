import { ReactNode } from 'react';

import '@components/atomic/Button.css';
import Svg from '@/components/atomic/Svg';
import { SizeType, SvgType } from '@/components/atomic/Type';
import FlexContainer from './FlexContainer_past';

interface Props {
  className?: string;
  btnWidth?: number;
  btnIcon?: SvgType;
  btnIconColor?: string;
  btnHasToggle?: boolean;
  btnToggleSeperate?: boolean;
  btnSize?: SizeType;
  btnLogo?: boolean;
  btnBackgroundColor?: string;
  btnHasBorder?: boolean;
  btnBorderColor?: string;
  btnGap?: number,
  btnHandleClick: () => void;
  btnHandleToggleClick?: () => void;
  children?: ReactNode;
}

function Button({
  className,
  btnWidth,
  btnIcon,
  btnIconColor = 'gray_400',
  btnHasToggle = false,
  btnToggleSeperate = false,
  btnSize = 'medium',
  btnLogo = false,
  btnBackgroundColor = 'gray_100',
  btnHasBorder = false,
  btnBorderColor = 'gray_300',
  btnGap = 5,
  btnHandleClick,
  btnHandleToggleClick,
  children,
}: Props) {
  if (btnHasToggle && btnToggleSeperate) {
    return (
      <div className='btn-toggle-seperate'>
        <button
          className={[
            'btn',
            `btn-body-${btnSize}`,
            `btn-background-${btnBackgroundColor}`,
            `btn-border-${btnBorderColor}`,
            btnHasBorder ? 'btn-border-1px' : 'btn-border-0px',
            `btn-gap_${btnGap}`,
            className,
          ].join(' ')}
          onClick={btnHandleClick}
        >
          {btnIcon && <Svg color={btnIconColor} icon={btnIcon} />}
          {children}
        </button>
        <button
          className={[
            'btn',
            `btn-toggle-${btnSize}`,
            `btn-background-${btnBackgroundColor}`,
            `btn-border-${btnBorderColor}`,
            btnHasBorder ? 'btn-border-1px' : 'btn-border-0px',
            className,
          ].join(' ')}
          onClick={btnHandleToggleClick}
        >
          {btnIcon && <Svg color={btnIconColor} icon={'toggle'} />}
        </button>
      </div>
    );
  } else if(btnWidth) {
    return (
      <button
        className={[
         'btn',
          btnLogo ? 'btn-logo' : `btn-${btnSize}`,
          `btn-background-${btnBackgroundColor}`,
          `btn-border-${btnBorderColor}`,
          btnHasBorder ? 'btn-border-1px' : 'btn-border-0px',
          `btn-gap_${btnGap}`,
          className,
        ].join(' ')}
        onClick={btnHandleClick}
        style={{width: `${btnWidth}px`}}
      >
        <FlexContainer className='flex_search' justifyContent='flex-start' gap={4}>
          {btnIcon && <Svg color={btnIconColor} icon={btnIcon} />}
          {children}
          {btnHasToggle && <Svg color={btnIconColor} icon={'toggle'} />}
        </FlexContainer>
      </button>
    );
  } else {
    return (
      <button
        className={[
         'btn',
          btnLogo ? 'btn-logo' : `btn-${btnSize}`,
          `btn-background-${btnBackgroundColor}`,
          `btn-border-${btnBorderColor}`,
          btnHasBorder ? 'btn-border-1px' : 'btn-border-0px',
          `btn-gap_${btnGap}`,
          className,
        ].join(' ')}
        onClick={btnHandleClick}
      >
        {btnIcon && <Svg color={btnIconColor} icon={btnIcon} />}
        {children}
        {btnHasToggle && <Svg color={btnIconColor} icon={'toggle'} />}
      </button>
    );
  }
}

export default Button;
