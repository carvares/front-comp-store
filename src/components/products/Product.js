import styled from "styled-components";

export default function Product(props){

    const {product} = props;

    return(
        <ProductCard>
            <img src={product.image} />
            <h3>{(product.price / 100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}</h3>
            <h4>{product.description}</h4>
        </ProductCard>
    );
}

const ProductCard = styled.div`
    width: 224px;
    height: 224px;
    display: flex;
    flex-direction: column;
`;