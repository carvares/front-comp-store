import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import { useState } from "react";
import {BsList} from "react-icons/bs";


export default function Header() {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const showDropdown = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  return (
    <div>
      <StyledHeader>
        <Categories>
          <span>Produtos</span> <BsList/>
        </Categories>

        <SearchBar />
        <HeaderMenu
          showDropdownMenu={showDropdownMenu}
          showDropdown={showDropdown}
        />
      </StyledHeader>
      <DropdownMenu
        showDropdownMenu={showDropdownMenu}
        showDropdown={showDropdown}
      />
    </div>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fee623;
  color: #2d3277;
  padding: 0 30px;
  z-index: 10;
`;

const Categories = styled.div`
  color: #2d3277;
  font-size: 30px;
  display: flex;
  align-itens: center;
  span{
    font-family: "Oswald";
    margin-right: 8px;
  } 
`;