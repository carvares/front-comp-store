
import styled from "styled-components"

export default function Checkout({ total, setModal }) {
    
    function click(event){
        console.log("clickou")
        event.stopPropagation();
    }

    return (
        <Modal onClick={() => setModal(false)}>

            <div onClick={(e)=> e.stopPropagation()}>
                <h1> Deseja finalizar a compra no valor de {(total / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })} ?</h1>
                <button onClick={(e)=>click(e)}> Finalizar </button>
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
    div{
        width: 40vw;
        height: 30vh;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            font-size: 20px;
        }
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
            margin: 100px 0 0 0 ;
            

    }
`