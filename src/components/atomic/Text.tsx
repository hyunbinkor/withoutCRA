interface Props {
  fontSize: string,
  color: string,
  isBold: boolean,
  link: string,
  text: string,
}

function Text({
  fontSize,
  color,
  isBold,
  link,
  text,
}: Props) {
  if (link) {
    return (
      <a
        className={[
          fontSize,
          color,
          isBold && 'bold',
        ].join(' ')}
        href={link}
      >{text}</a>
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

export default Text;