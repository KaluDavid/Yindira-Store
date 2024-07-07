import React from "react";
import HeroSection from "./HeroSection";
import { Cart } from "./Cart";

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
