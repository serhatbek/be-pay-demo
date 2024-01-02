import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ icon, className, onClick, color, size, ...props }) => {
  return (
    <i
      onClick={onClick}
      className={classNames('icon', 'icon-' + icon, className)}
      style={{ fontSize: `${size}px`, color: `${color}` }}
      {...props}
    ></i>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string,
  props: PropTypes.any,
};

export default Icon;
