import { getDefaultNormalizer } from "@testing-library/dom";
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div``;

const NavigationBar = () => {
  <Styles>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">Product Name</Navbar.Brand>
        <div className="d-flex">
          <p className="m-0 fs-5">From $99</p>
          <p className="m-0 text-muted">Free shipping</p>
        </div>
      </Container>
    </Navbar>
  </Styles>;
};
export default NavigationBar;
