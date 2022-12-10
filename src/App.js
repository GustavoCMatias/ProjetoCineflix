import styled from "styled-components";

import GlobalStyle from './globalStyles.js'
import SelecionarFilme from "./components/SelecionarFilme.js";
import SelecionarHorario from "./components/SelecionarHorario.js";
import SelecionarLugar from "./components/SelecionarLugar.js";
import Confirmacao from "./components/Confirmacao.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Tela>
        <Confirmacao/>
      </Tela>
    </>
  );
}

export default App;

const Tela = styled.div`
  min-height: 100vh;
  width: 375px;
  background-color: aliceblue;
  padding-top: 110px;


`