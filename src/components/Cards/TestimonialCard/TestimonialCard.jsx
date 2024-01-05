import './TestimonialCard.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TestimonialCard = ({ image, desc, name, job, className }) => {
  return (
    <blockquote className={classNames('testimonial-card', className)}>
      <figure>
        <img src={image} />
      </figure>
      <p className='testimonial-card__desc'>{desc}</p>
      <p className='testimonial-card__name'>
        {name} <strong>{job}</strong>
      </p>
    </blockquote>
  );
};

TestimonialCard.propTypes = {
  image: PropTypes.string,
  desc: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  className: PropTypes.string,
};

export default TestimonialCard;
