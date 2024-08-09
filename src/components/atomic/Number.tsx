interface Props {
  fontSize: string,
  color: string,
  isBold: boolean,
  hasBoundary: boolean,
  text: string,
};

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