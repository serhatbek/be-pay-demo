import './TeamCard.scss';
import PropTypes from 'prop-types';

const TeamCard = ({ image, name, job, desc, children }) => {
  return (
    <div className='team-card'>
      <figure>
        <img src={image} />
      </figure>
      <h4>{name}</h4>
      <h5>{job}</h5>
      <p>{desc}</p>
      <div className='team-card__socials'>{children}</div>
    </div>
  );
};

TeamCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  desc: PropTypes.string,
  children: PropTypes.any,
};

export default TeamCard;
