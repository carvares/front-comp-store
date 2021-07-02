
import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components"
import {API} from "../config/api"
import UserContext from "../UserContext";

export default function Checkout({ total, setModal, setDone}) {
    const [cardNumber, setCardNumber] = useState("");
    const [validDate, setValidDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const {user} = useContext(UserContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function endOrder(event){
        event.preventDefault();
        event.stopPropagation();
        const promise = axios.post(`${API}/api/transactions`,{cardNumber,validDate,securityCode, total},config)
        .then(()=>{console.log("foi");setModal(false)})
        .catch(console.log("n foi"))
        setDone(true);
        
    }
    

    return (
        <Modal onClick={() => setModal(false)}>

            <div onClick={(e)=> e.stopPropagation()}>
                <h1> Deseja finalizar a compra no valor de {(total / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })} ?</h1>
                <form onSubmit={(e)=>endOrder(e)}>
                    <div>
                    <input type="number" required placeholder="numero do cartão" min="0" max= "9999999999999999" onChange={(e) => setCardNumber(e.target.value)}/>
                    <input type="text" required placeholder="Data de vencimento" maxLength ="5" onChange={(e) => setValidDate(e.target.value)}/>
                    <input type="number" required placeholder="Código de segurança" min="0" max = "999" onChange={(e) => setSecurityCode(e.target.value)}/>
                    </div>
                    <button type="submit"> Finalizar </button>
                </form>
            </div>

        </Modal>
    )

}

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color:rgba(192,192,192,0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    &>div{
        width: 70vw;
        height: 60vh;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            font-size: 20px;
        }
        
    }
    
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        input{
            width: 200px;
            height: 30px;
            border: none;
            font-size: 18px;
            margin: 50px 20px;
        }
        button{
            width: 150px;
            height: 25px;
            border-radius: 30px;
            border: none;
            background-color: #FEE623;
            font-size: 18px;
            font-weight: 600;
            color: #2D3277;
            box-shadow: 0px 0px  10px #c0c0c0;
            cursor: pointer;
            margin: 50px 0 0 0 ;
            

    }
    }
`