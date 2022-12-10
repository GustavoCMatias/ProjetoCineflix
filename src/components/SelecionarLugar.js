import axios from "axios"
import React, { useEffect } from "react"
import styled from "styled-components"


export default function SelecionarLugar() {

    const [assentos, setAssentos] = React.useState([])

    useEffect(() => {
        const req = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/showtimes/5/seats')
        req.then(resposta => {
            setAssentos(resposta.data.seats)
        }
        )
    }, [])

    assentos.map(item => console.log(item.isAvailable))


    return (
        <>
            <Cabecalho>
                <h1>CINEFLEX</h1>
            </Cabecalho>
            
            <TelaLugares>
                <h1>
                    Selecione o(s) assento(s)
                </h1>
                <Lugares>
                    {assentos.map(item =>
                        <Lugar disponibilidade={item.isAvailable}>
                            <p>{item.name}</p>
                        </Lugar>)}
                </Lugares>
                <Exemplos>
                    <div>
                        <Lugar disponibilidade='true' />
                        <p>Selecionado</p>
                    </div>

                    <div>
                        <Lugar disponibilidade='true' />
                        <p>Disponível</p>
                    </div>

                    <div>
                        <Lugar disponibilidade='true' />
                        <p>Indisponível</p>
                    </div>
                </Exemplos>

            </TelaLugares>

            <Rodape>
                <div>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="Poster do filme escolhido" />
                </div>
                <h2>Zack Snyder Justice League <br />Quinta-feira - 15:00</h2>


            </Rodape>
        </>
    )
}


const TelaLugares = styled.div`

    padding-left: 25px;

    h1{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;


        margin: auto;
        text-align: center;

        margin-bottom: 25px;
    }

`

const Lugares = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Lugar = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 13px;

    background-color: ${props => props.disponibilidade ? '#C3CFD9' : '#FBE192'};

    border: 1px solid ${props => props.disponibilidade ? '#808F9D' : '#F7C52B'};

    margin-right: 6px;
    margin-bottom: 18px;

    display: flex;
    align-items: center;


    p{
        font-family: Roboto;
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0.04em;
        text-align: center;

        margin: auto;

    }

`

const Rodape = styled.div`
  height: 117px;
  width: 375px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #C3CFD9;
  display: flex;
  align-items: center;
  justify-content: left;

  padding-left: 10px;

  

  h2{
    font-family: Roboto;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    word-break: break-word;

    margin-left: 14px;
  }

  div{
    padding: 8px;
    background-color: white;
  }
  img{
    height: 72px;
    width: 48px;
  }
`

const Exemplos = styled.div`
    display: flex;
    justify-content: space-evenly;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 8px;
    }

    p{
        font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;

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