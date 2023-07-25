import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="content row">
      <Container className="d-flex justify-content-center align-items-center">
        <div className="text-center typewriter">
            <Typewriter
            onInit={(typewriter) => {
                typewriter
                .changeDelay(50)
                .typeString("Hey! I'm Matt.")
                .pauseFor(1000)
                .typeString("<br>I'm a Full Stack Web Developer.")
                .pauseFor(1000)
                .typeString("<br>Welcome to my Portfolio!")
                .start();
            }}
            />
        </div>
      </Container>
    </div>
  );
}

export default Home;
