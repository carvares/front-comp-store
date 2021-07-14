import Header from "../header/Header";
import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import Product from "./Product";
import { useEffect, useState, useContext } from "react";
import UserContext from "../UserContext";
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
            console.log(response.data);
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


    // const products = 
    // [
    //     {"id":1, "description":"Placa de video Geforce RTX 3060", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "660000", "categoryId": 1},
    //     {"id":2, "description":"Headset Gamer HyperX Cloud Stinger", "image": "https://img.terabyteshop.com.br/produto/g/headset-gamer-hyperx-cloudx-xbox-one-35mm-black-hx-hs5cx-sr_114555.jpg", "price": "50000", "categoryId": 2},
    //     {"id":3, "description":"Monitor LED LG 23.8 Wide", "image": "https://i.zst.com.br/thumbs/12/21/32/787046566.jpg", "price": "120000", "categoryId": 3},
    //     {"id":4, "description":"SSD Kingston A400", "image": "https://images6.kabum.com.br/produtos/fotos/85196/85196_index_g.jpg", "price": "38000", "categoryId": 4},
    //     {"id":5, "description":"Placa de video Geforce RTX 3060", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "660000", "categoryId": 1},
    //     {"id":6, "description":"Headset Gamer HyperX Cloud Stinger", "image": "https://img.terabyteshop.com.br/produto/g/headset-gamer-hyperx-cloudx-xbox-one-35mm-black-hx-hs5cx-sr_114555.jpg", "price": "50000", "categoryId": 2},
    //     {"id":7, "description":"Monitor LED LG 23.8 Wide", "image": "https://i.zst.com.br/thumbs/12/21/32/787046566.jpg", "price": "120000", "categoryId": 3},
    //     {"id":8, "description":"SSD Kingston A400", "image": "https://images6.kabum.com.br/produtos/fotos/85196/85196_index_g.jpg", "price": "38000", "categoryId": 4},
    // ];

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
