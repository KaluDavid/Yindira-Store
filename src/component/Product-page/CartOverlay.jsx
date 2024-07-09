import React from "react";
import { useState } from "react";
import "./Product-Styles/productCart.scss";
import { CheckOut } from "./CheckOut";
import "./Product-Styles/cartOverlay.scss";
import { Header } from "./Header";
import { pCart } from "./pCart";
import { Link } from "react-router-dom";

export function CartOverlay() {
  return (
    <>
      <main className="cartMain" id="overlay">
        <div className="product">
          <nav>
            <a href="/">MY SHOPPING CART</a>
          </nav>
          <section className="allCart">
            {pCart.map((cart) => {
              return (
                <div key={cart.id} className="carts">
                  <img src={cart.cartImg} alt={cart.name} />

                  <div className="Div">
                    <div>
                      <p>{cart.name}</p>
                      <p>{cart.type}</p>
                      <p>₦{cart.price}</p>
                    </div>

                    <div className="buttons">
                      <div>
                        <button>-</button>

                        <button>+</button>
                      </div>
                    </div>
                    <button className="remove"> Remove from cart </button>
                  </div>
                </div>
              );
            })}
          </section>

          <section id="cartTotal">
            <div>
              <p>Sub - Total:</p>
              <p>
                <b>₦117,000</b>
              </p>
            </div>

            <Link to="/productCart" className="link">
              <button className="proceed view"> View Cart</button>
            </Link>
            <Link to="/checkOut" className="link">
              <button className="proceed"> Checkout</button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
