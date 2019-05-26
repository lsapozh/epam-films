import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 5px 0;
`;

export const Title = styled.p`
  color: #6b6b6b;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Genres = styled.p`
  font-size: 11px;
  align-self: center;
`;

export const Year = styled.p`
  padding: 1px 5px;
  border: 1px solid gray;
  border-radius: 2px;
  font-size: 11px;
`;

export const Poster = styled.img`
  width: 300px;
  height: 500px;
  min-width: 300px;
  min-height: 500px;
  margin-bottom: 10px;
  background: linear-gradient(141deg, #989999 0%, #b2b9ba 51%, #7e8284 75%);
`;

export const ContainerFilm = styled.div`
  padding: 50px 45px 90px;
  width: 300px;
  height: 500px;
`;
