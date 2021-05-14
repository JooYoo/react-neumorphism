import './App.css';
import { SiNintendoswitch } from 'react-icons/si';
import ButtonIsolation from './components/00_ButtonIsolation/ButtonIsolation';
import Button from './components/01_Button/Button';

function App() {
  return (
    <div className="App">
      <ButtonIsolation text={'H'}>{/* <SiNintendoswitch /> */}</ButtonIsolation>

      <div style={{ marginTop: '20px' }}>
        <Button text={'lorem'}>
          <SiNintendoswitch />
        </Button>
      </div>
    </div>
  );
}

export default App;
