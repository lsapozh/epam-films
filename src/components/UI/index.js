import styled from "styled-components";

export const Star = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    to bottom,
    rgba(197, 196, 196, 1) 0%,
    rgba(180, 179, 178, 1) 100%
  );
  position: relative;
  cursor: pointer;

  ${({ active }) =>
    active &&
    "background: linear-gradient(to bottom,rgba(224, 194, 75, 1) 0%,rgba(207, 125, 0, 1) 100%);"};

  &:before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    background: linear-gradient(
      to bottom,
      rgba(221, 220, 219, 1) 0%,
      rgba(209, 208, 206, 1) 100%
    );
    z-index: 1;
    ${({ active }) =>
      active &&
      "background: linear-gradient(to bottom,rgba(224, 194, 75, 1) 0%,rgba(207, 125, 0, 1) 100%);"};
  }

  &,
  &:before {
    -webkit-clip-path: polygon(
      50% 0%,
      66% 27%,
      98% 35%,
      76% 57%,
      79% 91%,
      50% 78%,
      21% 91%,
      24% 57%,
      2% 35%,
      32% 27%
    );
    clip-path: polygon(
      50% 0%,
      66% 27%,
      98% 35%,
      76% 57%,
      79% 91%,
      50% 78%,
      21% 91%,
      24% 57%,
      2% 35%,
      32% 27%
    );
  }

  &:hover {
    background: linear-gradient(
      to bottom,
      rgba(224, 194, 75, 1) 0%,
      rgba(207, 125, 0, 1) 100%
    );
  }

  &:hover:before {
    background: linear-gradient(
      to bottom,
      rgba(243, 212, 85, 1) 0%,
      rgba(238, 164, 0, 1) 100%
    );
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  height: 50px;
  background-color: #f2f2f2;
  color: #343434;
  font-weight: 600;
`;

export const Footer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 10px 30px;
  background-color: #404040;
  color: #f43655;
`;

export const Label = styled.p`
  color: white;
  margin-top: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
