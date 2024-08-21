interface DiagramProps {
  isStart?: boolean;
  isEnd?: boolean;
  color: string;
  percantage: number;
}

function Diagram({
  isStart = false,
  isEnd = false,
  color,
  percantage,
}: DiagramProps) {
  const style = {
    borderTopLeftRadius: isStart ? '4px' : '0px',
    borderBottomLeftRadius: isStart ? '4px' : '0px',
    borderTopRightRadius: isEnd ? '4px' : '0px',
    borderBottomRightRadius: isEnd ? '4px' : '0px',
    height: '8px',
    width: `${percantage}%`,
    backgroundColor: color,
  }

  return (
    <div style={style}/>
  );
};

export default Diagram;