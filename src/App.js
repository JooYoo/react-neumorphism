import './App.css';
import { SiNintendoswitch } from 'react-icons/si';
import ButtonIsolation from './components/00_ButtonIsolation/ButtonIsolation';

function App() {
  return (
    <div className="App">
      <ButtonIsolation>
        <SiNintendoswitch size={'1.5rem'} />
      </ButtonIsolation>
    </div>
  );
}

export default App;
