import React from "react";
import { HeaderContainer } from "./components";
import PropTypes from "prop-types";

const Header = ({ onClick, buttonName }) => {
  return (
    <HeaderContainer>
      <div>netflixroulette</div>
      <button onClick={onClick}>{buttonName}</button>
    </HeaderContainer>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired
};

export default Header;
