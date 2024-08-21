interface DiagramInfoProps {
  color: string;
}

function DiagramInfo({
  color,
}: DiagramInfoProps) {
  const style = {
    borderRadius: '2px',
    height: '8px',
    width: '8px',
    backgroundColor: color,
  }

  return (
    <div style={style}/>
  );
};

export default DiagramInfo;