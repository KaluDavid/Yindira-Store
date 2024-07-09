import React from "react";
import { useState } from "react";
import "./Product-Styles/productCart.scss";
import { Header } from "./Header";
import { pCart } from "./pCart";
export function ProductCart() {
  return (
    <>
      <Header />
      <main className="cartMain">
        <div className="myCart">
          <h2>My Cart</h2>
        </div>

        <div className="product">
          <nav>
            <a href="/">Product</a>

            <div>
              <a href="/">SIZE</a>
              <a href="">QUANTITY</a>
              <a href="">PRICE</a>
              <a href="">SUB-TOTAL</a>
            </div>
          </nav>
          <section className="allCart">
            {pCart.map((cart) => {
              return (
                <div key={cart.id} className="carts">
                  <img src={cart.cartImg} alt={cart.name} />

                  <div className="cartDiv">
                    <div>
                      <p>{cart.name}</p>
                      <p>{cart.type}</p>
                      <small className="color">
                        <small className="color-indicator" style={{ backgroundColor: cart.pColor }}></small> {cart.color}
                      </small>

                    </div>

                    <b>{cart.size}</b>
                    <div className="buttons">
                      <div>
                        <button>-</button>

                        <button>+</button>
                      </div>
                    </div>

                    <p>₦{cart.price}</p>

                    <p>₦{cart.tPrice}</p>
                  </div>
                </div>
              );
            })}
          </section>

          <section className="cartTotal">
            <h4>CART TOTAL</h4>
            <div>
              <p>Sub - total:</p>
              <p>
                <b>₦</b>167,000
              </p>
            </div>

            <hr />

            <div>
              <p>Shipping:</p>
              <small>
                Enter your address to view shipping options
                <a href="">Calculate shipping</a>
              </small>
            </div>
            <hr />

            <aside>
              <input
                type="search"
                name="coupon code"
                id="coupon"
                placeholder="Coupon Code"
              />
              <button>APPLY</button>
            </aside>
            <hr />

            <div>
              <p>Total:</p>
              <b>₦167,000</b>
            </div>

            <button className="proceed">PROCEED TO CHECKOUT</button>
          </section>
        </div>
      </main>
    </>
  );
}
