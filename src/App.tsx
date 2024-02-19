import './App.css';
import AppBody from './AppBody';
import ModalListener from './ModalListener';
import ModalProvider from './ModalProvider';

function App() {
  return (
    <ModalProvider>
      <div id='modal-root'></div>

      <AppBody />

      <ModalListener />
    </ModalProvider>
  );
}

export default App;
