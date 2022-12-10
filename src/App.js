import styled from "styled-components";

import GlobalStyle from './globalStyles.js'
import SelecionarFilme from "./components/SelecionarFilme.js";
import SelecionarHorario from "./components/SelecionarHorario.js";
import SelecionarLugar from "./components/SelecionarLugar.js";
import Confirmacao from "./components/Confirmacao.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";


function App() {

  const [infos, setInfos] = React.useState({})
  useEffect(() => setInfos({}),[])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Tela>
        <Routes>
        <Route path="/" element={<SelecionarFilme infos={infos} setInfos={setInfos}/>} />
        <Route path="/sessoes/:idFilme" element={<SelecionarHorario infos={infos} setInfos={setInfos}/>} />
        <Route path="/assentos/:idSessao" element={<SelecionarLugar infos={infos} setInfos={setInfos}/>} />
        <Route path="/sucesso" element={<Confirmacao infos={infos} setInfos={setInfos}/>} />
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