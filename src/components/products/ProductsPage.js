import Header from "../header/Header";
import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import {API} from "../config/api";

export default function ProductsPage(){

    const [products, setProducts] = useState([]);
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    async function getProducts(categoryId){

        try {            
            const response = await axios.get(`${API}/api/products${categoryId ? "?category="+ categoryId : ""}`);
            if (!response.status === 200) throw new Error(response.status);
            setProducts(response.data);

        } catch (error) {
            console.log(error);    
        }
    }

    async function getCategories(){

        try {            
            const response = await axios.get(`${API}/api/categories`);
            if (!response.status === 200) throw new Error(response.status);
            setcategories(response.data);
            

        } catch (error) {
            console.log(error);    
        }
    }

    return(

        <div>
            <Header getProducts={getProducts} categories={categories} />
            <Bannner src={Logo} />
   
                {products.length === 0 ? 
                    (
                        <span> Nenhum produto encontrado, recarregue a página</span>
                    ) : (
                        <ProductsContainer>

                            {products.map((p) => (
                                <Product
                                  key={p.id}
                                  product={p}
                                />
                            ))}

                        </ProductsContainer>
                        )
                }    
        </div>
    );
}

const Bannner = styled.img` 
    margin-top:46px;
    width: 100%;
    height: auto;
`;

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 80vw;
    margin-top:46px;
`;
