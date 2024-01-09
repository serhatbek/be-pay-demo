import './Input.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input as AntdInput } from 'antd';
import FloatLabel from '../FloatLabel/FloatLabel';
import { useState } from 'react';

const Input = ({ value, placeholder, className, ...props }) => {
  //   const [inputVal, setInputVal] = useState('');

  const handleChange = (e) => setInputVal(e.target.value);
  return (
    <FloatLabel
      label={placeholder}
      value={value}
      className={classNames(className)}
    >
      <AntdInput
        name={placeholder}
        // onChange={handleChange}
        value={value}
        {...props}
      ></AntdInput>
    </FloatLabel>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
