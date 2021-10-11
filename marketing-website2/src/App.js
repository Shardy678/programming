import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { NavigationBar } from "./NavigationBar";
import { Container } from "react-bootstrap";
import hero from "./hero.png";
import waves from "./waves.png";
import { IconsText } from "./IconsText";

function App() {
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="row justify-content-center">
          <h1 className="text-center pt-5 pb-5 fw-bold col-3">
            Rich sound, for less
          </h1>
        </div>
        <img src={hero} className="d-block mx-auto pt-5"></img>
      </Container>
      <Container>
        <div className="d-flex">
          <div className="col-3">
            <IconsText
              h1="Sound that’s music to your ears."
              p="Enjoy full, crisp audio for your songs, videos, and phone calls."
              img={waves}
            />
          </div>
          <div className="col-3">
            <IconsText
              h1="Sound that’s music to your ears."
              p="Enjoy full, crisp audio for your songs, videos, and phone calls."
              img={waves}
            />
          </div>
          <div className="col-3">
            <IconsText
              h1="Sound that’s music to your ears."
              p="Enjoy full, crisp audio for your songs, videos, and phone calls."
              img={waves}
            />
          </div>
          <div className="col-3">
            <IconsText
              h1="Sound that’s music to your ears."
              p="Enjoy full, crisp audio for your songs, videos, and phone calls."
              img={waves}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
