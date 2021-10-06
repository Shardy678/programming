import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div``;

export const NavigationBar = () => {
  <Styles>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">Google Pixel Buds A-Series</Navbar.Brand>
        <div className="d-flex">
          <p className="m-0 fs-5">From $99</p>
          <p className="m-0 text-muted">Free shipping</p>
        </div>
      </Container>
    </Navbar>
  </Styles>;
};
