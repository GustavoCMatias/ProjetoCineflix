import styled from "styled-components";

import GlobalStyle from './globalStyles.js'
import SelecionarFilme from "./components/SelecionarFilme.js";
import SelecionarHorario from "./components/SelecionarHorario.js";
import SelecionarLugar from "./components/SelecionarLugar.js";
import Confirmacao from "./components/Confirmacao.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Tela>
        <Routes>
        <Route path="/" element={<SelecionarFilme />} />
        <Route path="/sessoes/:idFilme" element={<SelecionarHorario />} />
        <Route path="/assentos/:idSessao" element={<SelecionarLugar />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
        </Routes>
      </Tela>
    </BrowserRouter>
  );
}

export default App;

const Tela = styled.div`
  min-height: 100vh;
  width: 375px;
  background-color: aliceblue;
  padding-top: 110px;


`