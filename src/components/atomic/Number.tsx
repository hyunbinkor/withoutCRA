interface Props {
  fontSize: string,
  color: string,
  isBold: boolean,
  hasBoundary: boolean,
  text: string,
};

// Number 대신 그냥 Boundary로 ㄱㄱ -> 색상 커스텀 좀 하면 여기저기 쓰일듯

function Number({
  fontSize,
  color,
  isBold,
  hasBoundary,
  text,
}: Props) {
  if (hasBoundary) {
    return (
      <div
        className='number-boundary'
      >
        <p
          className={[
            fontSize,
            color,
            isBold && 'bold',
          ].join(' ')}
        >{text}</p>
      </div>
    );
  } else {
    return (
      <p
        className={[
          fontSize,
          color,
          isBold && 'bold',
        ].join(' ')}
      >{text}</p>
    );
  };
};

export default Number;