import { useSelector } from 'react-redux';
import FormSubmitModal from './FormSubmitModal/FormSubmitModal';
import { useEffect } from 'react';

const Modal = ({ setIsModalOpen }) => {
  const { activeModal } = useSelector((state) => state.Modal);

  useEffect(() => {
    if (activeModal !== null) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [activeModal]);

  return <>{activeModal === 'form-submit-modal' && <FormSubmitModal />}</>;
};

export default Modal;
