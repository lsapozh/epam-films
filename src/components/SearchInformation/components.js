import styled from "styled-components";

export const SortParam = styled.div`
  margin-left: 20px;
  font-size: 14px;
  ${({ active }) => active && "color: #f43655"};
  cursor: pointer;
`;
export const SortLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const NumberFilms = styled.div`
  color: #343434;
`;
