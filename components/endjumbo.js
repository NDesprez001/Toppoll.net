import React from "react";
import { Jumbotron, Button, Nav } from "react-bootstrap/";

export function Jumbo2() {
  return (
    <div className="ending-jumbo">
      <Jumbotron>
        <h1>Get started now!!</h1>
        <h3>Explore the different toppolls we have to offer!!</h3>
        <p>
        <Nav.Link href="/topics">Go to toppolls</Nav.Link>
        </p>
      </Jumbotron>
    </div>
  );
}
