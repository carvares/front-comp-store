import { IoChevronDown } from "react-icons/io5";
import styled from "styled-components";

import {FaShoppingCart} from "react-icons/fa";

import UserContext from "../UserContext";


export default function HeaderMenu({ showDropdownMenu, showDropdown }) {
  
  return (
    <StyledHeaderMenu shouldRotate={showDropdownMenu}>
      <div className="chevron">
        <IoChevronDown onClick={showDropdown} />
      </div>


      <CartIcon  onClick={showDropdown} />



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

const CartIcon = styled(FaShoppingCart)`

  width: 30px;
  height: 30px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
`;