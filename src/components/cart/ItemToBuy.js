import axios from "axios"
import { useEffect, useState } from "react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import styled from "styled-components"

export default function ItemToBuy({ item, setTotal, total }) {
    const config = {
        headers: {
            "Authorization": `Bearer teste`
        }
    }

    const [count, setCount] = useState(parseInt(item.amount))

    useEffect(() => {
        setTotal(total + (parseInt(item.price) * parseInt(item.amount)))

    }, [])

    function plus() {
        setCount(count+1)
        setTotal(total + parseInt(item.price))
        
    }

    function minus() {
        setCount(count-1)
        setTotal(total - parseInt(item.price))
        
    }
    useEffect(()=>{
        axios.post('http://localhost:4000/api/edit-cart',{newAmount: count, productId: item.productId, token:"teste"})
    },[count])

    if(count === 0){
        axios.delete(`http://localhost:4000/api/cart/${item.productId}`,config)
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

