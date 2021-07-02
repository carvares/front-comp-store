import Header from "../header/Header";
import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import Product from "./Product";
import { useEffect, useState, useContext } from "react";
import UserContext from "../UserContext";
import axios from "axios";
import {API} from "../config/api";

export default function ProductsPage(){

    const { user } = useContext(UserContext);
    const [productsData, setProducts] = useState([]);
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        getProducts();
        getCategories();
      }, []);

    async function getProducts(){

        try {            
            const response = await axios.get(`${API}/api/products`);
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


    const products = 
    [
        {"id":1, "description":"Placa de video Geforce RTX 3060", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "660000", "category": "placas"},
        {"id":2, "description":"Headset Gamer HyperX Cloud Stinger", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "50000", "category": "perifericos"},
        {"id":3, "description":"Monitor LED LG 23.8 Wide", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "120000", "category": "monitores"},
        {"id":4, "description":"SSD Kingston A400", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "30000", "category": "memorias"},
        {"id":5, "description":"Headset Gamer HyperX Cloud Stinger", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "50000", "category": "perifericos"},
        {"id":6, "description":"Monitor LED LG 23.8 Wide", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "120000", "category": "monitores"},
        {"id":7, "description":"Headset Gamer HyperX Cloud Stinger", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "50000", "category": "perifericos"},
        {"id":8, "description":"Monitor LED LG 23.8 Wide", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "120000", "category": "monitores"}
    ];

    return(

        <div>
            <Header categories={categories} />
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
