import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
export function Jumbo() {
  return (
    <div className="head">
      <Jumbotron fluid>
        <Container>
          <h1>PICK YOUR SIDE!!</h1>
          <h4>
            With many <strong>T</strong>oppolls to choose from, voice your
            opinion!!
          </h4>
        </Container>
      </Jumbotron>
    </div>
  );
}
