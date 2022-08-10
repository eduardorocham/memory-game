import { useEffect, useState } from 'react';
import * as C from './app.styles';
import logoImage from './assets/devmemory_logo.png';
import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import RestartIcon from './svgs/restart.svg';


const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);

  const resetAndCreateGrid = () => {

  }

  useEffect(() => resetAndCreateGrid, []);

  return (
    <div>
      <C.Container>
        <C.Info>
          <C.LogoLink href="">
            <img src={logoImage} alt="" width={200}/>
          </C.LogoLink>

          <C.InfoArea>
            <InfoItem label='Tempo' value='00:00'></InfoItem>
            <InfoItem label='Movimentos' value='0'></InfoItem>
          </C.InfoArea>

          <Button label='Resetar' icon={RestartIcon} onClick={resetAndCreateGrid}></Button>
        </C.Info>
        <C.GridArea>
          <C.Grid></C.Grid>
        </C.GridArea>
      </C.Container>
    </div>
  )
}

export default App;
