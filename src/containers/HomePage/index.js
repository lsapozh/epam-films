import React from "react";
import Searcher from "containers/Searcher";
import { NoFilmsFound } from "components/NoFilmsFound";
import { Row } from "components/UI";

const HomePage = () => {
  return (
    <div>
      <Searcher />
      <Row />
      <NoFilmsFound />
    </div>
  );
};

export default HomePage;
