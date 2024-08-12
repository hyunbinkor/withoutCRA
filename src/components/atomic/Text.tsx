import '@components/Atomic/Text.css'

interface Props {
  fontSize:
    'px10' |
    'px12' |
    'px14' |
    'px16',
  color: string,
  isBold?: boolean,
  link?: string,
  text: string,
}

function Text({
  fontSize,
  color,
  isBold=false,
  link,
  text,
}: Props) {
  if (link) {
    return (
      <a
        className={[
          fontSize,
          color,
          isBold ? 'bold' : 'notBold',
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
          isBold ? 'bold' : 'notBold',
        ].join(' ')}
      >{text}</p>
    );
  };
};

export default Text;