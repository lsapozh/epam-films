import styled from "styled-components";
import background from "images/background.jpg";

export const Cast = styled.p`
  margin: 20px 0;
  color: #d3d3d3;
  font-size: 16px;
`;

export const Director = styled.p`
  margin: 20px 0;
  color: #d3d3d3;
  font-size: 16px;
`;

export const Plot = styled.p`
  margin: 30px 0;
  color: white;
`;

export const Year = styled.p`
  font-weight: 600;
`;

export const Runtime = styled.p`
  margin-left: 20px;
  font-weight: 600;
  font-size: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 0;
  align-items: center;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  min-height: 45px;
  min-width: 45px;
  margin: 0 30px;
  border: 1px solid #aaff6d;
  border-radius: 50%;
  color: #aaff6d;
  font-size: 25px;
`;

export const Title = styled.p`
  color: #f43655;
  font-size: 32px;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding-left: 70px;
  font-size: 20px;
`;

export const Poster = styled.img`
  width: 300px;
  height: 500px;
  min-width: 300px;
  min-height: 500px;
  margin-bottom: 20px;
`;

export const Background = styled.div`
  height: 650px;
  background-size: cover;
  background: url(${background}) no-repeat center;
`;

export const Film = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: 650px;
  width: 100%;
  padding: 20px 100px 0;
  transform: translateY(-100%);
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
`;
