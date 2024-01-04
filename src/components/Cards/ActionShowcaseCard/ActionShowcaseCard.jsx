import Button from '../../Button/Button';
import './ActionShowcaseCard.scss';

const ActionShowcaseCard = ({
  title,
  desc,
  btnText,
  btnLink,
  btnIcon,
  btnClass,
}) => {
  return (
    <div className='cta-card'>
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

InfoCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  btnText: PropTypes.string,
  btnLink: PropTypes.string,
  btnIcon: PropTypes.string,
  btnClass: PropTypes.string,
};

export default ActionShowcaseCard;
