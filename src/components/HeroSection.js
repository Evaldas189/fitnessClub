import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import TypeWriter from "react-typewriter";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="https://cdn.videvo.net/videvo_files/video/free/2015-03/small_watermarked/Boxing_03Videvo_preview.webm"
        autoPlay
        loop
        muted
      />
      <h1>
       BODY FITNESS, <br /> TRANSFORM YOUR BODY
      </h1>
      <TypeWriter typing={0.5} className="hero-typeWriter">
        What are you waiting for?
      </TypeWriter>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
