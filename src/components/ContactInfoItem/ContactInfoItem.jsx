import Icon from '../Icon/Icon';
import './ContactInfoItem.scss';

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

export default ContactInfoItem;
