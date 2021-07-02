import Header from "../header/Header"
import styled from "styled-components"
import axios from "axios"
import ItemToBuy from "./ItemToBuy";
import { useContext, useEffect, useState } from "react";
import Checkout from "../checkout/Checkout";
import UserContext from "../UserContext";



export default function Cart() {
    const [total, setTotal] = useState(0);
    const [modal, setModal] = useState(false)
    const [products, setProducts] = useState([])
    const {user} = useContext(UserContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    useEffect(() => {
        const promisse = axios.get('http://localhost:4000/api/cart', config);
        promisse.then(r => {setProducts(r.data)} )
    }, [])


    const finalPrice = products.reduce((acc, current) => acc + (parseInt(current.price) * parseInt(current.amount)), 0)
    useEffect(() => setTotal(finalPrice), [products])

    return (
        <>
            <Header />
            {modal ? <Checkout total={total} setModal={setModal} /> : null}
            <Container total={total}>

                <ul>
                    {products.map((each) => (
                        <ItemToBuy item={each} setTotal={setTotal} total={total} key={each.id} />
                    ))}
                </ul>
                <div>
                    <h2> Total:</h2>
                    <button onClick={() => total > 0 ? setModal(!modal) : null}>Finalizar compra</button>
                    <h3>{(total / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</h3>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 90vw;
    height: 80vh;
    margin: 80px auto 0 auto;
    background-color: #ffffff;
    box-shadow: 0px 0px  10px #c0c0c0;
    position: relative;
    img{
        width: 100px;
        height: auto;
    }
    ul{
        height: 75vh;
        overflow-y: scroll;
    li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0 0 10px;
        img{
            width: 120px;
            height: 120px;
            object-fit: cover;
            margin: 10px 50px 0 20px;
        }
        span{
            margin: 0 30px;
            display: flex;
            align-items: center;
        }
        p{
            width: 300px;
            
        }
        h4{
            text-align: end;
            width: 350px;
            margin: 0 30px;

        }
        svg{
            width: 25px;
            height: auto;
            margin: 0 10px;
            cursor: pointer;
        }
        
    }
    }
    div{
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 0;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        
        h2{
            margin: 0 10px;
            width: 200px;
        }
        h3{
            width: 200px;
            margin: 0 20px;
            text-align: end;
        }
        button{
            width: 250px;
            height: 30px;
            border-radius: 30px;
            border: none;
            background-color:${props => props.total === 0 ? "rgba (167,050,59, 0.5)" : "#FEE623"};
            font-size: 18px;
            font-weight: 600;
            color: #2D3277;
            box-shadow: 0px 0px  10px #c0c0c0;
            cursor: pointer;
            
        }
    }
`