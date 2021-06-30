import Header from "../header/Header"
import styled from "styled-components"
import axios from "axios"
import ItemToBuy from "./ItemToBuy";
import { useEffect, useState } from "react";



export default function Cart() {
    const [total, setTotal] = useState(0);
    //const promisse  = axios.get()
    useEffect(()=>{},[total])
    const products =
        [
            { "id": 1, "description": "Placa de video Geforce RTX 3060", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "660000", "category": "placas", "qtd":"1" },
            { "id": 2, "description": "Headset Gamer HyperX Cloud Stinger", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "50000", "category": "perifericos", "qtd":"2" },
            { "id": 3, "description": "Monitor LED LG 23.8 Wide", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "120000", "category": "monitores", "qtd":"3" },
            { "id": 4, "description": "SSD Kingston A400", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "30000", "category": "memorias", "qtd":"4"}
        ];

    return (
        <>
            <Header />
            <Container>
                <ul>
                    {products.map((each) => (
                        <ItemToBuy item={each} setTotal={setTotal} total={total} key={each.id} />
                    ))}
                </ul>
                <div>
                    <p2> Total:</p2>
                    <p3>{(total / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p3>
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
    li{
        display: flex;
        align-items: center;
        margin: 10px 0 0 10px;
        img{
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin: 10px 50px 0 20px;
        }
        span{
            margin: 0 30px;
            display: flex;
            align-items: center;
        }
        p{
            width: 400px;
            
        }
        p1{
            text-align: end;
            width: 350px;
        }
        svg{
            width: 25px;
            height: auto;
            margin: 0 10px;
            cursor: pointer;
        }
    }
    div{
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 0;
        font-size: 20px;
        p2{
            margin: 0 0 0  10px;
        }
    }
`