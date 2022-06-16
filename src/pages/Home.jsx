import React from "react";
import { Container } from "reactstrap";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/live-auction/LiveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";
import Trending from "../components/ui/Trending-Section/Trending";
import StepSection from "../components/ui/Step-section/StepSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  );
};

export default Home;
