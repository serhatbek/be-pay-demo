import { useSelector } from 'react-redux';
import FormSubmitModal from './FormSubmitModal/FormSubmitModal';

const Modal = () => {
  const { activeModal } = useSelector((state) => state.Modal);

  return <>{activeModal === 'form-submit-modal' && <FormSubmitModal />}</>;
};

export default Modal;
