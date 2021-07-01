import styled from "styled-components";

export default function Header() {

  return (
      <StyledHeader>
      </StyledHeader>
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
  background: #fff059;
  color: #2d3277;
  padding: 0 30px;
`;