import { ReactNode } from "react";
import { FlexDirectionType, JustifyContentType, AlignItemType } from "./Type";

export interface FlexContainerProps {
  className?: string,
  children: ReactNode,
  flexDirection?: FlexDirectionType,
  justifyContent?: JustifyContentType,
  alignItems?: AlignItemType,
  gap?: string,
}

function FlexContainer({
  className,
  children,
  flexDirection = 'row',
  justifyContent = 'space-between',
  alignItems = 'start',
  gap,
}: FlexContainerProps) {

  const style = {
    display: 'flex',
    width: '100%',
    flexDirection,
    justifyContent,
    alignItems,
    gap,
  };

  return (
    <div
      className={[
        'flex_conatainer',
        className,
      ].join(' ')}
      style={style}
    >
      {children}
    </div>
  );
};

export default FlexContainer;