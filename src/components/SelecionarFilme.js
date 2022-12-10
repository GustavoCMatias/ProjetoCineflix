import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function SelecionarFilme({infos, setInfos}) {
    const [filmes, setFilmes] = React.useState([])

    useEffect(() => {
        const req = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        req.then(resposta => {
            setFilmes(resposta.data)
        })
    }, [])

    function EscolherFilme(poster, nome){
        setInfos({...infos, poster, nome})
    }


    return (

        <>
            <Cabecalho>
                <h1>CINEFLEX</h1>
            </Cabecalho>

            <TelaFilme>

                <h1>
                    Selecione o filme
                </h1>
                <div>
                    {filmes.map(item => 
                    <Link to={`/sessoes/${item.id}`} key={item.id}>
                    <img src={item.posterURL} alt="poster do filme" onClick={() => EscolherFilme(item.posterURL, item.title)}/>
                    </Link>)}
                </div>

            </TelaFilme>
        </>
    )
}



const TelaFilme = styled.div`
    div{
        display: flex;
        flex-wrap: wrap;
        padding-left: 30px;
        padding-right: 30px;

    }
   

    h1{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;


        margin: auto;
        text-align: center;

        margin-bottom: 27px;
    }

    img{
        width: 129px;
        
        margin-bottom: 23px;
        margin-left: 6.25px;
        margin-right: 6.25px;

        border: 8px solid #ffffff;
        
    }

`

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