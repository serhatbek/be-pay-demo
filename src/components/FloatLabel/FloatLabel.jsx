import { useState } from 'react';
import './FloatLabel.scss';
import PropTypes from 'prop-types';

const FloatLabel = ({ children, label, value }) => {
  const [focus, setFocus] = useState(false);

  const labelClass =
    focus || (value && value.length !== 0) ? 'label label-float' : 'label';

  const handleBlur = () => setFocus(false);
  const handleFocus = () => setFocus(true);

  return (
    <div className='float-label' onBlur={handleBlur} onFocus={handleFocus}>
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

FloatLabel.propTypes = {
  children: PropTypes.any,
  value: PropTypes.string,
  label: PropTypes.string,
};

export default FloatLabel;
