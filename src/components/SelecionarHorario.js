import axios from "axios"
import React, { useEffect } from "react"
import styled from "styled-components"

export default function SelecionarHorario() {
    const [horarios, setHorarios] = React.useState([])

    useEffect(() => {
        const req = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies/6/showtimes')
        req.then(resposta => {
            setHorarios(resposta.data.days)
        })
    }, [])

    if (horarios) {
        console.log(horarios)
    }


    return (
        <>
            <Cabecalho>
                <h1>CINEFLEX</h1>
            </Cabecalho>
            <TelaHorarios>
                <h1>
                    Selecione o horário
                </h1>
                {horarios.map(item =>
                    <div>
                        <p>{item.weekday} - {item.date}</p>
                        {item.showtimes.map(each => <button>{each.name}</button>)}

                    </div>)}




            </TelaHorarios>

            <Rodape>
                <div>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="Poster do filme escolhido"/>
                </div>
                <h2>Zack Snyder Justice League</h2>


            </Rodape>
        </>
    )
}


const TelaHorarios = styled.div`

    padding-left: 25px;
    padding-bottom: 124px;

    div{
        margin: auto;
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

    p{
        font-family: Roboto;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: left;
        
        margin-bottom: 20px;

    }

    button{
        height: 43px;
        width: 83px;
        border-radius: 3px;
        background-color: #E8833A;
        color: #FFFFFF;
        border: none;
        margin-bottom: 20px;
        margin-right: 8px;

    }

    div{
        flex-wrap: wrap;
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
