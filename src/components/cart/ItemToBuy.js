import { useEffect, useState } from "react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

export default function ItemToBuy({ item, setTotal, total }) {

    const [count, setCount] = useState(parseInt(item.qtd))

    useEffect(() => {
        setTotal(total + (parseInt(item.price) * parseInt(item.qtd)))

    }, [])

    function plus() {
        setCount(count+1)
        setTotal(total + parseInt(item.price))
    }

    function minus() {
        setCount(count-1)
        setTotal(total - parseInt(item.price))
    }
    return (
        <li>
            <img src={item.image} />
            <p>{item.description}</p>
            <span>
                <AiOutlinePlusCircle onClick={() => plus()} />
                {count}
                <AiOutlineMinusCircle onClick={() => count > 0 ? minus() : ""} />
            </span>
            <p1>{(item.price / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p1>

        </li>
    )
}

