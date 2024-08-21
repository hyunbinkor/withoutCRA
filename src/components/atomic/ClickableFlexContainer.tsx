import { FlexContainerProps } from "./FlexContainer";

interface ClickableFlexContainerProps extends FlexContainerProps{
  onClick: () => void,
}

function ClickableFlexContainer({
  className,
  children,
  flexDirection = 'row',
  justifyContent = 'space-between',
  alignItems = 'start',
  gap,
  onClick,
}: ClickableFlexContainerProps) {

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
        'clickable_flex_conatainer',
        className,
      ].join(' ')}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ClickableFlexContainer;