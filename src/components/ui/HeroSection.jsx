import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";
import heroImg from "../../assets/images/hero.png";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover our digital NFT <span>sell extraordinary</span>
                Markerplace
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quis reprehenderit dignissimos vero inventore similique dolor
                esse voluptatem. Excepturi, ea.
              </p>
              <div className="hero__btn d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i class="ri-rocket-line"></i>
                  <Link to="/market">Explore Now</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i class="ri-ball-pen-line"></i>
                  <Link to="/create">Create NFT</Link>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} className="w-100" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
