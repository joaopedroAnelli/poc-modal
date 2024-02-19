import { createPortal } from 'react-dom';
import { useModal } from './ModalProvider';

export default function ModalListener() {
  const { isOpen, hideModal } = useModal();

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
      onClick={hideModal}
    >
      <div
        className='bg-white rounded-md flex flex-col w-96 h-60 relative justify-center items-center gap-3 p-3'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='text-3xl font-bold text-slate-500'>Modal</p>
        <button
          className='text-sm bg-slate-800 rounded-md text-white p-3 absolute bottom-3 right-3'
          onClick={hideModal}
        >
          Fechar
        </button>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
}
