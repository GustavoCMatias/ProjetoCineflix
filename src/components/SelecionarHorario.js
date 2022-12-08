import axios from "axios"
import React, { useEffect } from "react"
import styled from "styled-components"

export default function SelecionarHorario(){
    const [horarios, setHorarios] = React.useState([])

    useEffect(() => {
        const req = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes')
        req.then(resposta => {
            setHorarios(resposta.data.days)
        })
    }, [])

    if(horarios){
        console.log(horarios)
    } 


    return (
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
    )
}


const TelaHorarios = styled.div`

    padding-left: 25px;

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
        flex-wrap: wrap;;
    }


`
