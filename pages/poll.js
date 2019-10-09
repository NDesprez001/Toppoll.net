import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselSection } from "../components/CarouselSection";
import Navigation from "../components/navbar";
import { Topiccards } from "../components/topiccards";
import { SideInfo2 } from "../components/sideInfo2";

import { FooterContent } from "../components/footer";
import Disqus from "disqus-react";
import fetch from "isomorphic-unfetch";
import "../components/styles.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Poll from "react-polls";
import React from "react";

const PollPage = ({ poll }) => {
  const pollAnswers = [
    { option: poll.sidea.choice, votes: poll.sidea.votes },
    { option: poll.sideb.choice, votes: poll.sideb.votes }
  ];

  const handleVote = voteAnswer => {
    const { _id, ...pollData } = poll;

    if (voteAnswer === pollData.sidea.choice) {
      pollData.sidea.votes = pollData.sidea.votes + 1;
    }
    if (voteAnswer === pollData.sideb.choice) {
      pollData.sideb.votes = pollData.sideb.votes + 1;
    }
    const payload = {
      collection: "polls",
      data: {
        ...pollData
      }
    };
    fetch("https://api.codexsw.dev/api/upsert", {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  const disqusShortname = "toppoll";
  const disqusConfig = {
    url: "https://toppoll.net/" + poll.uuid,
    identifier: poll.uuid,
    title: poll.name
  };

  return (
    <React.Fragment>
      <Navigation />
      <SideInfo2 />
      <Container>
        <div className="topic-header">
          <h1>{poll.name}</h1>
        </div>
        <div className="topic-picture">
          <img src={poll.image} />
        </div>
        <div className="topic-description">
          <h3>{poll.description}</h3>
        </div>
      </Container>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Poll answers={pollAnswers} onVote={handleVote} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </Col>
        </Row>
      </Container>
      <FooterContent />
    </React.Fragment>
  );
};

PollPage.getInitialProps = async ({ query }) => {
  const res = await fetch(
    "https://api.codexsw.dev/api/get?collection=polls&uuid=" + query.uuid
  );
  const poll = await res.json();
  return { poll };
};

export default PollPage;
