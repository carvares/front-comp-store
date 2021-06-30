import Header from "../header/Header";
import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import Product from "./Product";


export default function ProductsPage(){

    const products = 
    [
        {"id":1, "description":"Placa de video Geforce RTX 3060", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "660000", "category": "placas"},
        {"id":2, "description":"Headset Gamer HyperX Cloud Stinger", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "50000", "category": "perifericos"},
        {"id":3, "description":"Monitor LED LG 23.8 Wide", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "120000", "category": "monitores"},
        {"id":4, "description":"SSD Kingston A400", "image": "https://i.zst.com.br/thumbs/12/b/31/168342120.jpg", "price": "30000", "category": "memorias"}
    ];

    return(

        <div>
            <Header />
            <Bannner src={Logo} />
            <Container>
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

                

            </Container>
        </div>

       
        
    );
}

const Bannner = styled.img` 
    margin-top:46px;
    width: 100%;
    height: auto;
`;
const Container = styled.div`
    margin: 0 auto;
    width: 80vw;
    height: 100vh;
    margin-top:46px;
`;
const ProductsContainer = styled.div`
    width: 80vw;
    heigth: 100vw;
`;
