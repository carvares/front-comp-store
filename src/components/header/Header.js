import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"

export default function Header() {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const showDropdown = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  return (
    <div>
      <StyledHeader>
        <LogoIcon src={Logo}>
          
        </LogoIcon>
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

const LogoIcon = styled.img`
  height: 50px;
  width: 50px;
`;