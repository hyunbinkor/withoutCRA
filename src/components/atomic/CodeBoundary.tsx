import '@components/atomic/Boundary.css'

import { ReactNode } from "react";

interface CodeBoundaryProps {
  borderColor?: string,
  backgroundColor?: string,
  children: ReactNode,
};

function CodeBoundary({
  borderColor = 'gray_300',
  backgroundColor = 'white',
  children,
}: CodeBoundaryProps) {
  return (
    <div
      className={[
        'codebdry',
        `bdry-border-${borderColor}`,
        `bdry-background-${backgroundColor}`,
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default CodeBoundary;