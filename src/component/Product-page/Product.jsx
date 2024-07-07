import React from "react";
import { Header } from "./Header";
import HeroSection from "./HeroSection";
import { Footer } from "./Footer";
import { Cart } from "./Cart";

export function Product() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <HeroSection />
      </div>

      <div>
        <Cart />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
