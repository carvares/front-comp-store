import styled from "styled-components";

export default function Header() {

  return (
      <StyledHeader>
        Comp Store
      </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff059;
  color: #2d3277;
  font-size: 40px;
`;