import { ReactNode } from "react";
import '@components/atomic/List.css'

interface Props {
  className?: string,
  itemClassName?: string,
  gap?: number,
  children: Array<ReactNode>,
}

function List({
  className,
  itemClassName,
  gap = 5,
  children,
}: Props) {
  return (
    <ul className={[
      className,
      'list_container',
      `list_container-gap_${gap}`,
    ].join(' ')}>
      {children.map(child => 
        <li className={[
          itemClassName,
          'list_item',
        ].join(' ')}>
          {child}
        </li>
      )}
    </ul>
  );
};

export default List;