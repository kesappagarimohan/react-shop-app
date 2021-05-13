import React from "react";
import Column from "../components/Column";
import Container from "../components/Container";
import Row from "../components/Row";

export class Payment extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Column size={12}>
            <h2 className=" bg-primary text-light fw-bold fs-3 p-1 text-center  mb-3">
              Billing
            </h2>
            <form action=""></form>
          </Column>
        </Row>
      </Container>
    );
  }
}
