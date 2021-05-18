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
        {/* TODO: icon as prop */}
        <ButtonIsolation text={'H'}>
          {/* <SiNintendoswitch /> */}
        </ButtonIsolation>

        <br />
        <br />
        <Button text={'lorem'}>{/* <SiNintendoswitch /> */}</Button>

        <br />
        <br />
        <TextBlock small title={'Title'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque
          sit voluptates modi ducimus? Reprehenderit a illo id impedit
          voluptate!
        </TextBlock>
      </Bg>
    </div>
  );
}

export default App;
