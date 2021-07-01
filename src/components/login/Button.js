import styled from "styled-components";

export default function Button(props) {
  const { text, type, background, color, onClick } = props;
  return <ButtonWrapper type={type} background={background} color={color} onClick={onClick}>{text}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  width: 100%;
  height: 46px;
  background: ${(props) => props.background ? props.background : "#3483fa"};
  border-radius: 5px;
  margin-bottom: 13px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.color ? props.color : "#ffffff"};
`;
