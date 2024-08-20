import '@components/atomic/FlexRowContainer.css'
import { ReactNode } from 'react';
import { AlignItemType, FlexRowTagType, JustContType } from '@components/atomic/Type'

interface Props {
  tag?: FlexRowTagType;
  className?: string;
  justifyContents?: JustContType;
  alignItems?: AlignItemType;
  gap?: number;
  columnPadding?: number;
  maxWidth?: number;
  hasBottom?: boolean;
  grayBackground?: boolean;
  children: ReactNode;
}

interface Style {
  maxWidth?: number;
  backgroundColor?: string;
}

// 나중에는 grid로 전체적인 부분을 대체해서 사이 사이 div가 안들어가도록 처리

function FlexRowContainer({
  tag = 'div',
  className,
  justifyContents = 'flex_start',
  alignItems ='stretch',
  gap = 5,
  columnPadding = 0,
  maxWidth,
  hasBottom = false,
  grayBackground = false,
  children,
}: Props) {
  let style : Style = {};
  if (maxWidth) style.maxWidth = maxWidth;
  if (grayBackground) style.backgroundColor = '#F6F8FA';

  switch (tag) {
    case 'div':
      return (
        <div
          className={[
            className,
            'flex_row_container',
            `flex_row_container-${justifyContents}`,
            `flex_row_container-align-${alignItems}`,
            `flex_row_container-gap_${gap}`,
            `flex_row_container-padding_${columnPadding}`,
            hasBottom ? 'flex_row_container-has_bottom' : '',
            className,
          ].join(' ')}
          style={style}
        >
          {children}
        </div>
      );
    case 'header':
      return (
        <header
          className={[
            className,
            'flex_row_container',
            `flex_row_container-${justifyContents}`,
            `flex_row_container-align-${alignItems}`,
            `flex_row_container-gap_${gap}`,
            `flex_row_container-padding_${columnPadding}`,
            hasBottom ? 'flex_row_container-has_bottom' : '',
            className,
          ].join(' ')}
          style={style}
        >
          {children}
        </header>
      );
    case 'footer':
      return (
        <footer
          className={[
            className,
            'flex_row_container',
            `flex_row_container-${justifyContents}`,
            `flex_row_container-align-${alignItems}`,
            `flex_row_container-gap_${gap}`,
            `flex_row_container-padding_${columnPadding}`,
            hasBottom ? 'flex_row_container-has_bottom' : '',
            className,
          ].join(' ')}
          style={style}
        >
          {children}
        </footer>
      );
    case 'main':
      return (
        <main
          className={[
            className,
            'flex_row_container',
            `flex_row_container-${justifyContents}`,
            `flex_row_container-align-${alignItems}`,
            `flex_row_container-gap_${gap}`,
            `flex_row_container-padding_${columnPadding}`,
            hasBottom ? 'flex_row_container-has_bottom' : '',
            className,
          ].join(' ')}
          style={style}
        >
          {children}
        </main>
      );
    case 'article':
      return (
        <article
          className={[
            className,
            'flex_row_container',
            `flex_row_container-${justifyContents}`,
            `flex_row_container-align-${alignItems}`,
            `flex_row_container-gap_${gap}`,
            `flex_row_container-padding_${columnPadding}`,
            hasBottom ? 'flex_row_container-has_bottom' : '',
            className,
          ].join(' ')}
          style={style}
        >
          {children}
        </article>
      );
    case 'aside':
      return (
        <aside
          className={[
            className,
            'flex_row_container',
            `flex_row_container-${justifyContents}`,
            `flex_row_container-align-${alignItems}`,
            `flex_row_container-gap_${gap}`,
            `flex_row_container-padding_${columnPadding}`,
            hasBottom ? 'flex_row_container-has_bottom' : '',
            className,
          ].join(' ')}
          style={style}
        >
          {children}
        </aside>
      );
    case 'nav':
      return (
        <nav
          className={[
            className,
            'flex_row_container',
            `flex_row_container-${justifyContents}`,
            `flex_row_container-align-${alignItems}`,
            `flex_row_container-gap_${gap}`,
            `flex_row_container-padding_${columnPadding}`,
            hasBottom ? 'flex_row_container-has_bottom' : '',
            className,
          ].join(' ')}
          style={style}
        >
          {children}
        </nav>
      );    
  }
};

export default FlexRowContainer;