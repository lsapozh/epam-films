import styled from "styled-components";
import background from "images/background.jpg";

export const FavoriteFilmsHeader = styled.div`
  box-sizing: border-box;
  position: absolute;
  padding: 20px 100px;
  height: 150px;
  width: 100%;
  transform: translateY(-100%);
  background-color: rgba(0, 0, 0, 0.75);
`;
export const Background = styled.div`
  height: 150px;
  background-size: cover;
  background: url(${background}) no-repeat center;
`;
