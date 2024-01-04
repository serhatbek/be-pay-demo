import './TestimonialCard.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TestimonialCard = ({ image, desc, name, job, className }) => {
  return (
    <div className={classNames('testimonial-card', className)}>
      <figure>
        <img src={image} />
      </figure>
      <p>{desc}</p>
      <p>
        {name} <span>{job}</span>
      </p>
    </div>
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
