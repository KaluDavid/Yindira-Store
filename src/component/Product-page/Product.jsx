import React from "react";
import HeroSection from "./HeroSection";
import { Cart } from "./Cart";
import { CartOverlay } from "./CartOverlay";

export function Product() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      
      <div>
        <Cart />
      </div>
    </>
  );
}
