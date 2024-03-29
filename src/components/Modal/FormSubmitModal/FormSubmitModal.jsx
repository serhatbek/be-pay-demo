import './FormSubmitModal.scss';
import { Button, Icon } from '../..';
import { closeModal } from '../../../redux/Modal/modalSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import handleClickOutside from '../../../utils/handleClickOutside';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const FormSubmitModal = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const { width, height } = useWindowSize();

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  handleClickOutside(modalRef, handleModalClose);

  return (
    <div className='modal-wrapper'>
      <div className='modal form-submit-modal' ref={modalRef}>
        <div className='form-submit-modal__content'>
          <Icon icon='check-circle' size='84' />
          <h3>Completed</h3>
          <p>Your message has been successfully sent.</p>
        </div>
        <div className='form-submit-modal__action'>
          <Button
            onClick={handleModalClose}
            className='close-btn'
            iconLeft='x-close'
          />
        </div>
      </div>
      <Confetti width={width} height={height} tweenDuration={100} />
    </div>
  );
};

export default FormSubmitModal;
