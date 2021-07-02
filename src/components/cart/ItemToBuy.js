import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import styled from "styled-components"
import UserContext from "../UserContext"
import {API} from "../config/api"

export default function ItemToBuy({ item, setTotal, total }) {
    const {user} = useContext(UserContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    const [count, setCount] = useState(parseInt(item.amount))

    useEffect(() => {
        setTotal(total + (parseInt(item.price) * parseInt(item.amount)))

    }, [])

    function plus() {
        setCount(count+1)
        setTotal(total + parseInt(item.price))
        if( count === 0 ){
            axios.post(`${API}/api/cart`,{id: item.productId, amount:1}, config)
        }
        
    }

    function minus() {
        setCount(count-1)
        setTotal(total - parseInt(item.price))
        
    }
    useEffect(()=>{
        axios.post(`${API}/api/edit-cart`,{newAmount: count, productId: item.productId},config)
    },[count])

    if(count === 0){
        axios.delete(`${API}/api/cart/${item.productId}`,config)
    }
    return (
        <Item count={count}>
            <img src={item.image} />
            <p>{item.description}</p>
            <span>
                <AiOutlineMinusCircle color= "red" onClick={() => count > 0 ? minus() : ""} />
                {count}
                <AiOutlinePlusCircle color= "green" onClick={() => plus()} />
            </span>
            <h4>{(item.price / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</h4>

        </Item>
    )
}

const Item =  styled.li`
    opacity:${props => props.count === 0? "50%":"100%"}
    
`

