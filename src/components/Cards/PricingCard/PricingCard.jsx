import './PricingCard.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Button/Button';

const PricingCard = ({
  className,
  title,
  price,
  per,
  desc,
  listItems,
  popular,
}) => {
  return (
    <div className={classNames('pricing-card', className)}>
      <div className='pricing-card__header'>
        <span className='pricing-card__header__title'>{title}</span>
        {popular && <span className='pricing-card__header__popular'></span>}
        <span className='pricing-card__header__price'>{price}</span>
        <span className='pricing-card__header__per'>{per}</span>
      </div>
      <div className='pricing-card__body'>
        {desc?.map((item) => (
          <p>
            <strong>{item.strong}</strong>
            {item.text}
          </p>
        ))}
        <ul>
          {listItems?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <Button
          className='ant-btn--purple'
          iconRight='cart'
          type='link'
          href='/be-pay-demo/'
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
  per: PropTypes.string,
  popular: PropTypes.string,
  listItems: PropTypes.array,
};

export default PricingCard;
