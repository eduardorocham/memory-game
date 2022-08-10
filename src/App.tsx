import * as C from './app.styles';
import logoImage from './assets/devmemory_logo.png';

const App = () => {
  return (
    <div>
      <C.Container>
        <C.Info>
          <C.LogoLink href="">
            <img src={logoImage} alt="" width={200}/>
          </C.LogoLink>

          <C.InfoArea>

          </C.InfoArea>

          <button>Reiniciar</button>
        </C.Info>
        <C.GridArea>

        </C.GridArea>
      </C.Container>
    </div>
  )
}

export default App;
