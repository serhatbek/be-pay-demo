import './FormSubmitModal.scss';
import { Button, Icon } from '../..';
import { closeModal } from '../../../redux/Modal/modalSlice';
import { useDispatch } from 'react-redux';

const FormSubmitModal = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeModal());
  };

  return (
    <div className='modal-wrapper'>
      <div className='modal form-submit-modal'>
        <div className='form-submit-modal__content'>
          <Icon icon='check-circle' size='84' />
          <h3>Completed</h3>
          <p>Your message has been successfully sent.</p>
        </div>
        <div className='form-submit-modal__action'>
          <Button
            onClick={handleClick}
            className='close-btn'
            iconLeft='x-close'
          />
        </div>
      </div>
    </div>
  );
};

export default FormSubmitModal;
