import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    margin-bottom: 10px;

    span {
      padding-left: 20px;
    }
  }
`;

export default Form;
