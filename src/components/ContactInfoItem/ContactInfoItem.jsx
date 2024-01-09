import './ContactInfoItem.scss';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

const ContactInfoItem = ({ title, desc, icon }) => {
  return (
    <div className='contact-info'>
      <h5>{title}</h5>
      <p>
        <Icon icon={icon} />
        {desc}
      </p>
    </div>
  );
};

ContactInfoItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  icon: PropTypes.string,
};

export default ContactInfoItem;
