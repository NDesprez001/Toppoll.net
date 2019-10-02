import React from "react";
import { Card, Button } from "react-bootstrap/";

export function FooterContent() {
  return (
    <Card className="text-center">
      <Card.Header>Support:</Card.Header>
      <div className="footerbody">
        <Card.Body className="endinfo">
          <Card.Title><h2>Have any questions?</h2></Card.Title>
          <Card.Text><h4>Contact us at our email!!</h4></Card.Text>
          <Button variant="primary">toppollsupport@gmail.com</Button>
        </Card.Body>
      </div>
      <Card.Footer className="text-muted">Toppoll.net</Card.Footer>
    </Card>
  );
}
