import { Link } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../UserContext";
import axios from "axios";
import { API } from "../config/api";

export default function DropdownMenu ({showDropdownMenu, showDropdown}){    

    const {user} = useContext(UserContext)

    const logout = () => {
        localStorage.clear();
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        axios.delete(`${API}/api/logout`, config);
    }

    return (
        <MenuContainer isEnabled={showDropdownMenu} onClick={showDropdown}>
            <StyledMenu >

                {(user?.token === null) ? (
                    <Link to="/login"><span>Log-in</span></Link>
                ) : (
                    <>
                    <Link to="/my-cart"><span>Meu carrinho</span></Link>
                    <Link to="/" onClick={logout}><span>Log-out</span></Link>
                    </>                    
                )}

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
    z-index: 4;
`

const StyledMenu = styled.div`
    position: absolute;
    right: 0;
    width: 150px;
    height: 110px;
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