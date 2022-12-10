import axios from "axios"
import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"


function AvalilarCor(disponibilidade, clicado){
    if(!disponibilidade){
        return(['#FBE192', '#F7C52B'])
    }else if(clicado){
        return(['#1AAE9E', '#0E7D71'])
    } else{
        return(['#C3CFD9', '#7B8B99'])
    }
}


export default function SelecionarLugar({infos, setInfos}) {

    function ReservarAssento(e){
        e.preventDefault()
        const body={ids:{idAssentos}, name:nome, cpf:cpf}
        setInfos({...infos, nome_cliente: nome, cpf, assentosEscolhidos})
        const req = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', body)
        
        req.then((result) =>{
            console.log(result.data);
            nav('/confirmacao')})
    }

    function cliqueLugar(nome, disponibilidade, id){
        if (!assentosEscolhidos.includes(nome) && disponibilidade){
            setAssentosEscolhidos([...assentosEscolhidos,nome].sort())
            setIdAssentos([...idAssentos, id])
        }
    }

    const [nome, setNome] = React.useState([])
    const [cpf, setCpf] = React.useState([]) 
    const [assentos, setAssentos] = React.useState([])
    const [assentosEscolhidos, setAssentosEscolhidos] = React.useState([])
    const [idAssentos, setIdAssentos] =React.useState([])
    const params =useParams();
    const nav = useNavigate();

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSessao}/seats`)
        req.then(resposta => {
            setAssentos(resposta.data.seats)
        }
        )
    }, [])



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
                        <Lugar disponibilidade={item.isAvailable} clicado={assentosEscolhidos.includes(item.name)} key={item.id} onClick={() => cliqueLugar(item.name, item.isAvailable, item.id)}>
                            <p>{item.name}</p>
                        </Lugar>)}
                </Lugares>
                <Exemplos>
                    <div>
                        <Lugar disponibilidade={true} clicado={true}/>
                        <p>Selecionado</p>
                    </div>

                    <div>
                        <Lugar disponibilidade={true} clicado={false}/>
                        <p>Disponível</p>
                    </div>

                    <div>
                        <Lugar disponibilidade={false} clicado={false}/>
                        <p>Indisponível</p>
                    </div>
                </Exemplos>

                <form onSubmit={ReservarAssento}>
                    <label htmlFor="Nome">Nome do comprador:</label>
                    <input type="text" 
                    id="Nome" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Digite seu nome..."
                    required/>

                    <label htmlFor="CPF">CPF do comprador:</label>
                    <input type="number" 
                    id="CPF" 
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    placeholder="Digite seu CPF..."
                    required/>

                    <button type="submit">Reservar assento(s)</button>
                </form>

            </TelaLugares>

            <Rodape>
                <div>
                    <img src={infos.poster} alt="Poster do filme escolhido"/>
                </div>
                <h2>{infos.nome} <br />{infos.dia} - {infos.hora}</h2>


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

    button{
        height: 42px;
        width: 225px;
        border-radius: 3px;
        background-color: #E8833A;
        color: #FFFFFF;
        border: none;

        margin: auto;
        margin-top: 30px;

        text-align: center;
        margin-left: 45px;
        margin-bottom: 137px;
        

    }

    input{
        font-family: Roboto;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;


        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;

        width: 327px;
        height: 51px;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    label{
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 10px;
        margin-bottom:5px;

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

    background-color: ${props => AvalilarCor(props.disponibilidade, props.clicado)[0]};

    border: 1px solid ${props => AvalilarCor(props.disponibilidade, props.clicado)[1]};

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