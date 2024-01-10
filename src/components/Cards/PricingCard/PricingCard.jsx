import './PricingCard.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import { nanoid } from 'nanoid';

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
        {popular && (
          <span className='pricing-card__header__popular'>{popular}</span>
        )}
        <span className='pricing-card__header__price'>{price}</span>
        <span className='pricing-card__header__per'>{per}</span>
      </div>
      <div className='pricing-card__body'>
        {desc?.map((item) => (
          <p key={nanoid()}>
            <strong>{item.strong}</strong>
            {item.text}
          </p>
        ))}
        <ul>
          {listItems?.map((item) => (
            <li key={nanoid()}>
              <Icon icon='check-circle' size='18' />
              {item}
            </li>
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
  desc: PropTypes.array,
  price: PropTypes.string,
  per: PropTypes.string,
  popular: PropTypes.string,
  listItems: PropTypes.array,
};

export default PricingCard;
