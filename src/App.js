import './App.css';
import { SiNintendoswitch } from 'react-icons/si';
import ButtonIsolation from './components/00_ButtonIsolation/ButtonIsolation';
import Button from './components/01_Button/Button';
import Bg from './components/02_Bg/Bg';

function App() {
  return (
    <div className="App">
      <Bg center>
        <ButtonIsolation text={'H'}>
          {/* <SiNintendoswitch /> */}
        </ButtonIsolation>

        <div style={{ margin: '20px' }}></div>

        <Button text={'lorem'}>{/* <SiNintendoswitch /> */}</Button>
      </Bg>
    </div>
  );
}

export default App;
