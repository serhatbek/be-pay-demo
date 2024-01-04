import Icon from '../../Icon/Icon';
import './InfoCard.scss';
import PropTypes from 'prop-types';

const InfoCard = ({ title, text, icon, iconSize }) => {
  return (
    <div className='info-card'>
      <Icon size={iconSize} icon={icon} />
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.string,
};

export default InfoCard;
