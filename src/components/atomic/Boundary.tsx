import '@components/atomic/Boundary.css'

import { ReactNode } from "react";

interface BoundaryProps {
  hasBorder?: boolean,
  borderColor?: string,
  backgroundColor?: string,
  children: ReactNode,
};

function Boundary({
  hasBorder = false,
  borderColor = 'gray_300',
  backgroundColor = 'gray_200',
  children,
}: BoundaryProps) {
  return (
    <div
      className={[
        'bdry',
        hasBorder ? 'bdry-border-1px' : 'bdry-border-0px',
        `bdry-border-${borderColor}`,
        `bdry-background-${backgroundColor}`,
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default Boundary;