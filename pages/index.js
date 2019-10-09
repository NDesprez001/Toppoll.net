import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselSection } from "../components/CarouselSection";
import Navigation from "../components/navbar";
import { Jumbo } from "../components/jumbotron";
import { FooterContent } from "../components/footer";
import { BriefInfo } from "../components/Briefer"
import { Welcome } from "../components/opener";
import { Jumbo2 } from "../components/endjumbo";
import React from 'react'


import fetch from "isomorphic-unfetch";
import "../components/styles.css";
import Container from "react-bootstrap/Container";

const MainPage = ({ polls }) => (
  <React.Fragment>
    <Navigation />
    <Welcome />
    <CarouselSection className="carouselsection" />
    <Jumbo /> 
    <Jumbo2 />
    <Container fluid>
      <BriefInfo />
    </Container>
    <FooterContent />
  </React.Fragment>
);

MainPage.getInitialProps = async () => {
  const res = await fetch("https://api.codexsw.dev/api/list?collection=polls");
  return await res.json();
};

export default MainPage;
