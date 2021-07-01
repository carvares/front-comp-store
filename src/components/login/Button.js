import styled from "styled-components";

export default function Button(props) {
  const { text, type } = props;
  return <ButtonWrapper type={type}>{text}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  width: 100%;
  height: 46px;
  background: #a328d6;
  border-radius: 5px;
  margin-bottom: 13px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
`;
