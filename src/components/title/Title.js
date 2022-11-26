/**
 * ? @description : Title Bar Component
 */

// Dependencies
import React, { useState } from "react";
import { Navbar } from "react-bootstrap";

// Asset
import ltelogo from "./../assets/logov1.svg";

// CSS Component
import "./Title.css";

// Modal Component
import AboutModal from "./AboutModal";

export default function Title() {
  const [aboutModal, setAboutModal] = useState(false);

  const aboutLte = () => {
    setAboutModal(true);
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark" className="lte-title">
        <Navbar.Brand>
          <a href="#" style={{ cursor: "pointer" }} onClick={aboutLte}>
            <img src={ltelogo} alt="Logo" className="lte-logo" />
            <span className="lte-logo-title">Lets Teach English</span>
          </a>
        </Navbar.Brand>
      </Navbar>

      <AboutModal show={aboutModal} onHide={() => setAboutModal(false)} />
    </div>
  );
}
