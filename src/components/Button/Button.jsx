import './Button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as ButtonAntd } from 'antd';
import { Icon } from '../../components';

const Button = ({
  className,
  iconLeft,
  iconRight,
  children,
  url,
  ...props
}) => {
  return (
    <ButtonAntd
      className={classNames(className, {
        'ant-btn--left-icon': iconLeft,
        'ant-btn--right-icon': iconRight,
      })}
      {...props}
    >
      {iconLeft ? <Icon icon={iconLeft} /> : null}
      {children}
      {iconRight ? <Icon icon={iconRight} /> : null}
    </ButtonAntd>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  size: PropTypes.any,
  children: PropTypes.any,
  type: PropTypes.string,
};

export default Button;
