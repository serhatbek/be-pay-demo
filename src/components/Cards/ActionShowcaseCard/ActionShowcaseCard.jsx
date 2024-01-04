import Button from '../../Button/Button';
import './ActionShowcaseCard.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ActionShowcaseCard = ({
  title,
  desc,
  className,
  btnText,
  btnLink,
  btnIcon,
  btnClass,
}) => {
  return (
    <div className={classNames('cta-card', className)}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Button
        className={btnClass}
        type='link'
        href={btnLink}
        iconRight={btnIcon}
      >
        {btnText}
      </Button>
    </div>
  );
};

ActionShowcaseCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  className: PropTypes.string,
  btnText: PropTypes.string,
  btnLink: PropTypes.string,
  btnIcon: PropTypes.string,
  btnClass: PropTypes.string,
};

export default ActionShowcaseCard;
