import styled from 'styled-components';
import BarraLateral from './componentes/BarraLateral/index.js';
import BarraSuperior from './componentes/BarraSuperior/index.js';
import Central from './componentes/Central/index.js';

const Fundo = styled.div`
  background-color: #0a0b11;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "lateral superior"
    "lateral conteudo";
`;

function App() {
  return (
    <Fundo>
      <BarraLateral />
      <BarraSuperior />
      <Central/>
    </Fundo>
  );
}

export default App;