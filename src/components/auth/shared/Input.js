import styled from "styled-components";

export default function Input(props) {
  const {
    placeholder,
    type,
    value,
    onChange,
    required,
    disabled,
    id,
    name,
    min,
    max,
    margin,
    border,
    borderBottom,
    borderRadius
  } = props;
  return (
    <InputWrapper
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      min={min}
      max={max}
      id={id}
      name={name}
      margin={margin}
      border={border}
      borderBottom={borderBottom}
      borderRadius={borderRadius}
    />
  );
}

const InputWrapper = styled.input`
  width: 100%;
  height: 50px;
  border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
  margin: ${props => props.margin ? props.margin : "0px"};
  border: ${props => props.border ? props.border : "1px solid gray"};
  border-bottom: ${props => props.borderBottom ? props.borderBottom : ""};
  padding-left: 15px;
  font-size: 20px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  outline: none;
`;
