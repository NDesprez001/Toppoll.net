import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
export function Jumbo() {
  return (
    <div className="head">
      <Jumbotron fluid>
        <h1>VOICE YOUR OPINION!!!</h1>
          <h4>
            There are all sorts of <strong>T</strong>oppolls to choose from, voice your
            opinion!!
          </h4>
      </Jumbotron>
    </div>
  );
}
