interface Props {
  color: string,
  icon:
  'folder' | 
  'file' |
  'toggle' |
  'past',
};

function Svg({
  color,
  icon,
}: Props) {
  let path: string = '';

  // switch로 바로 return이 가능한가? -> 일단 전체 구조에서는 안중요해서 skip
  switch (icon) {
    case ('folder'):
      path = 'M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z'
      break;
    case ('file'):
      path = 'M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z'
      break;
    case ('toggle'):
      path = '';
      break;
    case ('past'):
      path = '';
      break;
  }

  return (
    <svg
      className={`svg-${icon}`}
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="currentColor"
      // 요 style도 css로 빼긴 해야할듯?
      style={{
        display: 'inline-block', // 요거는 선택적으로 들어가 있는듯?
        userSelect: 'none',
        verticalAlign: 'text-bottom',
        overflow: 'visible',
      }}>
      <path d={path}/>
    </svg>
  );
};

export default Svg;