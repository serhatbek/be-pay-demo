import './FormSubmitModal.scss';
import { Button, Icon } from '../../../components';

const FormSubmitModal = () => {
  return (
    <div className='modal-wrapper'>
      <div className='modal form-submit-modal'>
        <div className='form-submit-modal__content'>
          <Icon icon='check-circle' size='84' />
          <h3>Completed</h3>
          <p>Your message has been successfully sent.</p>
        </div>
        <div className='form-submit-modal__action'>
          <Button className='close-btn' iconLeft='x-close' />
        </div>
      </div>
    </div>
  );
};

export default FormSubmitModal;
