import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Confirmacao({infos, setInfos}) {
    
    return (
        <>
            <Cabecalho>
                <h1>CINEFLEX</h1>
            </Cabecalho>
            <TelaConfirmacao>
                <h1>Pedido feito com sucesso!</h1>

                <h1>Filme e sessão</h1>
                <p>{infos.nome}<br />{infos.data}{' '}{infos.hora}</p>

                <h1>Ingressos</h1>
                {infos.assentosEscolhidos.map(item => <p key={item}>Assento {item}</p>)}

                <h1>Comprador</h1>
                <p>Nome: {infos.nome_cliente}</p>
                <p>CPF: {infos.cpf}</p>

                <Link to="/">
                    <button>Voltar para Home</button>
                </Link>
                
            </TelaConfirmacao>
        </>
    )

}

const TelaConfirmacao = styled.div`

    padding-left: 30px;

    h1{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: left;

        margin-top: 60px;
        margin-bottom: 7px;

    }

    h1:nth-child(1){
        color: #247A6B;
        margin: auto;
        margin-top: 0px;
    }
    
    p{
        font-family: Roboto;
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.04em;
        text-align: left;

        margin-bottom: 4px;

    }

    button{
        height: 42px;
        width: 225px;
        border-radius: 3px;
        background-color: #E8833A;
        color: #FFFFFF;
        border: none;

        margin: auto;
        margin-top: 60px;

        text-align: center;
        margin-left: 45px;
        

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