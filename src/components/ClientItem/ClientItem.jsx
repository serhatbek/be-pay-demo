import './ClientItem.scss';
import PropTypes from 'prop-types';

const ClientItem = ({ image }) => {
  console.log(image);
  return (
    <figure className='clients-item'>
      <img src={image} />
    </figure>
  );
};

ClientItem.propTypes = {
  image: PropTypes.string,
};

export default ClientItem;
