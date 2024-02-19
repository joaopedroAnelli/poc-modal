import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext<{
  isOpen: boolean;
  showModal: () => void;
  hideModal: () => void;
}>({
  isOpen: false,
  showModal: () => {},
  hideModal: () => {},
});

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
}
