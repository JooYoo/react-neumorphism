import './App.css';
import { SiNintendoswitch } from 'react-icons/si';
import ButtonIsolation from './components/00_ButtonIsolation/ButtonIsolation';

function App() {
  return (
    <div className="App">
      <ButtonIsolation text={'H'}>{/* <SiNintendoswitch /> */}</ButtonIsolation>
    </div>
  );
}

export default App;
