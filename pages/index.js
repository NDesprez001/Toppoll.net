import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselSection } from "../components/CarouselSection";
import Navigation from "../components/navbar";
import { Topiccards } from "../components/topiccards";
import { Jumbo } from "../components/jumbotron";
import { FooterContent } from "../components/footer";
import { Infoslider } from "../components/carouseladd";



import fetch from "isomorphic-unfetch";
import "../components/styles.css";
import Container from "react-bootstrap/Container";

const MainPage = ({ polls }) => (
  <React.Fragment>
    <Navigation />
    
    
    <Container>
      <CarouselSection className="carouselsection" /><Jumbo />
      <div className="over-card">
        <h2>Don't know where to start?</h2>
        <h4>
          Here's some <strong>T</strong>oppolls to look at!
        </h4>
      </div>
      <div className="row">
        {polls.map(poll => (
          <Topiccards {...poll} />
        ))}
      </div>
    </Container>
    <FooterContent />
  </React.Fragment>
);

MainPage.getInitialProps = async () => {
  const res = await fetch("https://api.codexsw.dev/api/list?collection=polls");
  return await res.json();
};

export default MainPage;
