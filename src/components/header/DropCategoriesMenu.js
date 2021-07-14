import styled from "styled-components";
import Category from "./Category";

export default function DropCategoriesMenu ({showCategories, dropMenu, categories, setcategories}){

    return (
        <MenuContainer isEnabled={showCategories} onClick={dropMenu}>
            <StyledMenu >

                {categories.map((c) =>(
                    <Category key={c.id} category={c} setcategories={setcategories} />                       
                ))}             
                
            </StyledMenu>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    display: ${props => props.isEnabled ? "block" : "none"};
    position: fixed;
    top: 72px;
    left: 0;
    background: transparent;
    width: 100%;
    height: 100vh;
    z-index: 11;
`

const StyledMenu = styled.div`
    position: absolute;
    left: 0;
    width: 170px;
    height: 200px;
    border-radius: 0 0 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background: #171717;
    color: #fff;
    font-family: "Lato";
    font-size: 17px;
    @media (max-width: 611px){
        width: 30%;
    }
`





