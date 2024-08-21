import COLORS from "@/utils/constants/COLORS";
import { ReactNode } from "react";

interface MiniStyleContainerProps {
  className?: string,
  children: ReactNode,
  margin?: string,
  borderBottom?: string,
  padding?: string,
  backgroundColor?: string,
  height?: string,
  flexBasis?: string,
  flexGrow?: number,
};
// 포인트) 나중에 정규식 타입으로 대체하면 좋을듯?

function MiniStyleContainer({
  className,
  children,
  margin = '0',
  borderBottom = '0',
  padding = '0',
  backgroundColor = COLORS.WHITE,
  flexBasis = 'auto',
  flexGrow = 0,
}: MiniStyleContainerProps) {

  const style = {
    margin,
    borderBottom,
    padding,
    backgroundColor,
    flexBasis,
    flexGrow,
  };

  return (
    <div
      className={[
        'style_conatainer',
        className,
      ].join(' ')}
      style={style}>
      {children}
    </div>
  )
};

export default MiniStyleContainer;