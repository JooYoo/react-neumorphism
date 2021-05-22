import './App.css';
import { SiNintendoswitch } from 'react-icons/si';
import ButtonIsolation from './components/00_ButtonIsolation/ButtonIsolation';
import Button from './components/01_Button/Button';
import Bg from './components/02_Bg/Bg';
import TextBlock from './components/03_TextBlock/TextBlock';

function App() {
  return (
    <div className="App">
      <Bg centerColumn padding={'1rem'}>
        <ButtonIsolation text={'H'} />

        <br />
        <br />
        <Button text={'lorem'} icon={<SiNintendoswitch />} />

        <br />
        <br />
        <TextBlock>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque
          sit voluptates modi ducimus? Reprehenderit a illo id impedit
          voluptate!
        </TextBlock>
      </Bg>
    </div>
  );
}

export default App;
