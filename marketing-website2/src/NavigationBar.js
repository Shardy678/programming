import React from "react";
import { Navbar, Nav, NavbarBrand, Container, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
  }
`;

export const NavigationBar = () => {
  return (
    <Styles>
      <Navbar className="pt-4 pb-4 shadow" expand="lg">
        <Container>
          <Navbar.Brand className="fs-2 fw-bold" href="#">
            Google Pixel Buds A-Series
          </Navbar.Brand>
          <div className="d-flex">
            <div className="d-flex flex-column text-end">
              <p className="m-0 fs-5">From $99</p>
              <p className="m-0 text-muted">Free shipping</p>
            </div>
            <Button className="mx-2 px-5">
              <a className="fs-2 text-decoration-none text-white fw-bold">
                Buy
              </a>
            </Button>
          </div>
        </Container>
      </Navbar>
    </Styles>
  );
};
