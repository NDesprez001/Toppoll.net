import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/navbar";
import { Topiccards } from "../components/topiccards";
import { FooterContent } from "../components/footer";
import { Carousel2 } from "../components/carousel2";
import { SideInfo1 } from "../components/sideInfo";

import fetch from "isomorphic-unfetch";
import "../components/styles.css";
import Container from "react-bootstrap/Container";

const TopicPage = ({ polls }) => (
  <React.Fragment>
    <Navigation />
    <SideInfo1 />
    <Container>
      <Carousel2 />
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

TopicPage.getInitialProps = async () => {
  const res = await fetch("https://api.codexsw.dev/api/list?collection=polls");
  return await res.json();
};

export default TopicPage;
