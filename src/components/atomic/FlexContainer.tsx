import '@components/atomic/FlexContainer.css';
import { ReactNode } from 'react';
import { JustContType, FlexTagType, AlignItemType } from '@/components/atomic/Type';

interface Props {
  tag?: FlexTagType;
  justifyContents?: JustContType;
  alignItems?: AlignItemType;
  className?: string;
  gap?: number;
  children: ReactNode;
}

function FlexContainer({
  tag='div',
  justifyContents='space_between',
  alignItems='center',
  className,
  gap=0,
  children,
}: Props) {
  switch (tag) {
    case 'div':
      return (
        <div
          className={[
            className,
            'flex_container',
            `flex_container-${justifyContents}`,
            `flex_container-align-${alignItems}`,
            `flex_container-gap_${gap}`
          ].join(' ')}
        >
          {children}
        </div>
      );
    case 'nav':
      return (
        <nav
          className={[
            className,
            'flex_container',
            `flex_container-${justifyContents}`,
            `flex_container-align-${alignItems}`,
            `flex_container-gap_${gap}`
          ].join(' ')}
        >
          {children}
        </nav>
      );
  }
}

export default FlexContainer;
