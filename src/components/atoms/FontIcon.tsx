import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

function FontIcon(fontProps: FontAwesomeIconProps) {
  return (
    <div className='font-icon'>
      <FontAwesomeIcon {...fontProps} />
    </div>
  );
}

export default FontIcon;
