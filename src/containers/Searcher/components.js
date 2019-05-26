import styled from "styled-components";
import background from "images/background.jpg";

export const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const SearchBy = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-150%);

  div {
    color: white;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  margin-left: 20px;
  width: 70px;
  height: 25px;
  background-color: gray;
  color: white;
  ${({ active }) => active && "background-color: #f43655"};
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  margin-top: 20px;
  z-index: 1000;
  width: 200px;
  height: 40px;
  border: none;
  background-color: #f43655;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  padding: 0 5px;
  border: none;
  border-bottom: solid #f43655 2px;
  outline: none;
  background-color: #040404;
  color: white;
  font-size: 18px;
`;

export const SearchForm = styled.div`
  position: absolute;
  box-sizing: border-box;
  transform: translateY(-100%);
  width: 100%;
  height: 300px;
  padding: 20px 100px 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Background = styled.div`
  height: 300px;
  background-size: cover;
  background: url(${background}) no-repeat center;
`;
