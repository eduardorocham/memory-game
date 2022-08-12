import { useEffect, useState } from 'react';
import * as C from './app.styles';
import logoImage from './assets/devmemory_logo.png';
import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import RestartIcon from './svgs/restart.svg';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { GridItem } from './components/GridItem';


const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  const resetAndCreateGrid = () => {
    //passo 1- resetar o jogo:
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    //passo 2- criar o grid:

    //2.1- criar um grid vazio:
    let tmpGrid:GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({ item: null, shown: false, permanentShown: false })
    }

    //2.2 - preencher o grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let position = -1;
        while (position < 0 || tmpGrid[position].item !== null) {
          position = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[position].item = i;
      }
    }

    //2.3 - jogar no state
    setGridItems(tmpGrid);

    //passo 3- Começar o jogo:
    setPlaying(true);
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
          <C.Grid>
            {gridItems.map((item, index)=>(
              <GridItem></GridItem>
            ))}
          </C.Grid>
        </C.GridArea>
      </C.Container>
    </div>
  )
}

export default App;
