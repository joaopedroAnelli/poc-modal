import { useModal } from './ModalProvider';

const ModalOpenerButton = () => {
  const { showModal } = useModal();

  return (
    <button
      className='bg-slate-800 text-white px-3 py-2 rounded-md'
      onClick={showModal}
    >
      Abrir modal
    </button>
  );
};

export default ModalOpenerButton;
