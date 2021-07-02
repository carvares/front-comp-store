import { useContext } from "react";
import { IoChevronDown } from "react-icons/io5";
import styled from "styled-components";
import UserContext from "../UserContext";
import {FiShoppingCart} from "react-icons/fi"

export default function HeaderMenu({ showDropdownMenu, showDropdown }) {
  const { user } = useContext(UserContext);
  return (
    <StyledHeaderMenu shouldRotate={showDropdownMenu}>
      <div className="chevron">
        <IoChevronDown onClick={showDropdown} />
      </div>

      <CartIcon  onClick={showDropdown} >
        
        <FiShoppingCart/>
      </CartIcon>

    </StyledHeaderMenu>
  );
}

const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .chevron {
    display: inherit;
    align-items: inherit;
    font-size: 40px;
    transform: ${(props) => (props.shouldRotate ? `rotateX(180deg)` : "")};
  }
`;

const CartIcon = styled.div`
  
  width: 53px;
  height: 53px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  
    svg{
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: 5px;
      left: 7px;    
      
    }
`;