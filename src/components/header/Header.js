import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import DropdownMenu from "./DropdownMenu";
import DropCategoriesMenu from "./DropCategoriesMenu";
import SearchBar from "./SearchBar";
import { useState } from "react";
import {BsList} from "react-icons/bs";


export default function Header({categories, setcategories}) {
  
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const showDropdown = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  const dropMenu = () => {
    setShowCategories(!showCategories);
  }

  return (
    <div>
      <StyledHeader>
        <Categories onClick={dropMenu} >
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
      <DropCategoriesMenu
        showCategories={showCategories}
        dropMenu={dropMenu}
        categories={categories}
        setcategories={setcategories}
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
  box-shadow: 0px 0px  10px #c0c0c0;
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