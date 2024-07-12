import React from "react";
import SEO from "../common/seo";
import Home from "../components/home";
import Wrapper from "../layout/wrapper";

const HomeIndex = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <Home />
    </Wrapper>
  );
};

export default HomeIndex;
