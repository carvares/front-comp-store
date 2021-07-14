import styled from "styled-components";
import {BsFillLightningFill} from "react-icons/bs";
import {ImTruck} from "react-icons/im";
import {FaShoppingCart} from "react-icons/fa";
import {API} from "../config/api";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom";

export default function Product(props){    

    const { product } = props;
    const {user} = useContext(UserContext);
    const history = useHistory();

    async function addToCart(product){

        if(!user){
            return history.push("/login");
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }

        const body = {
            "id": product.id,
            "amount": 1
        }
        
        try {
            const response = await axios.post(`${API}/cart`, body, config );
            if (!response.status === 200) throw new Error(response.status);
            
        } catch(error){
            console.log(error);
        }
    }

    return(
        <ProductCard >

            <Picture>
              <img src={product.image} alt={product.id}/>
            </Picture>

            <Description>
                <Tag>Peça já!</Tag>
                <h2>{(product.price / 100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}</h2>
                <h3>{product.description}</h3>
                <h4><BsFillLightningFill/> FULL </h4>
                <h4><ImTruck/> Entrega rápida </h4>
                <h5 onClick={addToCart}><FaShoppingCart/> Add ao carrinho! </h5>
            </Description>           

        </ProductCard>
    );
}

const ProductCard = styled.div`
    border-radius: 7px;
    width: 224px;
    height: 380px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0px 0px  10px #c0c0c0;
    margin-bottom: 25px;
`;

const Picture = styled.div`
    width: 224px;
    height: 224px;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    align-itens: center;
    img{
        width: 200px;
        height: auto;
    }
`;

const Description = styled.div` 
    margin-top: 20px;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h2{
        font-size: 19px;
    }
    h4{
        font-weight: bold;
        color: #00a650;
        font-size: 15px;
    }
    h5{
        border-radius: 3px;
        color: #000;
        text-align: center;
        background: #fee623;
        font-size: 15px;
        line-height: 17px;
        font-weight: bold;
    }
    
`;

const Tag = styled.div` 
    background: #3483fa;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    padding: 2px 4px;
    height: 20px;
    width: 70px;
    text-align: center;
`;