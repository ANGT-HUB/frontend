import styled from "styled-components";

export const Container = styled.div`
  display: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.3rem;
  //border-radius: 4px;
  font-size: 1rem;
  border: 1px solid green;
  &:focus {
    border: 1px solid green;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    color: green;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0 6px;
    transform: translateX(10px) translateY(-28px);
    background-color: #fff;
    border: none;
  }
`;

export const Label = styled.label`
  position: absolute;
  padding: 0 1rem;
  font-size: 0.85rem;
  left: 16px;
  color: green;
  width: fit-content;
  border-right: 1px solid black;
  pointer-events: none;
  transition: 0.3s;
`;

export const IconContainer = styled.span`
  position: absolute;
  right: 1rem;
`;
export const Option = styled.option`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 1rem 1.3rem;
  cursor: pointer;
  width: 100%;
  //border: 1px solid #ccc;
  color: green;
  // border-radius: 4px;
  // background-color: #fff;
  // appearance: none;
  // -webkit-appearance: none;

  &:focus {
    border: 1px solid green;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    color: green;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0 6px;
    transform: translateX(10px) translateY(-28px);
    background-color: #fff;
    border: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 5px 7px;
  background-color: #008080;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  margin: 16px 0;
  cursor: pointer;

  // :hover {
  //   background-color: white;
  // }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 16px;
    height: 40px;
  }

  @media only screen and (min-width: 769px) {
    font-size: 14px;
    font-weight: 600;
    padding: 7px 0;
    height: 50px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
