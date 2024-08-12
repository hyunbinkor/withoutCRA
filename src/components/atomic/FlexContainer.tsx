import '@components/Atomic/FlexContainer.css'
import { ReactNode } from "react";
import { JustContType, TagType } from "./Type";

interface Props {
  tag?: TagType,
  justifyContents?: JustContType,
  className?: string,
  children: ReactNode,
}

function FlexContainer({
  tag='div',
  justifyContents = 'space_between',
  className,
  children,
}: Props) {
  return (
    <div
      className={[
        className,
        'flex_container',
        `flex_container-${justifyContents}`
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default FlexContainer;