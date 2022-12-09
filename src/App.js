import styled from "styled-components";

import GlobalStyle from './globalStyles.js'
import SelecionarFilme from "./components/SelecionarFilme.js";
import SelecionarHorario from "./components/SelecionarHorario.js";
import SelecionarLugar from "./components/SelecionarLugar.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Tela>
        <Cabecalho>
          <h1>CINEFLEX</h1>
        </Cabecalho>

        <SelecionarLugar/>
      </Tela>
    </>
  );
}

export default App;

const Cabecalho = styled.div`
  height: 67px;
  width: 375px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #C3CFD9;
  display: flex;
  align-items: center;
;

  h1{
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color: #E8833A;
    margin: auto;

  }
`

const Tela = styled.div`
  min-height: 100vh;
  width: 375px;
  background-color: aliceblue;
  padding-top: 110px;


`