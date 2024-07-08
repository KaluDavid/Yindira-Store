import React from "react";
import { useState } from "react";
import "./Product-Styles/productCart.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import cartImg1 from "./cart-images/img2.png";
import cartImg2 from "./cart-images/cartImg2.png";
import cartImg3 from "./cart-images/cartImg3.png";
import cartImg4 from "./cart-images/cartImg4.png";
import { Link } from "react-router-dom";

export function ProductCart() {
  const [pCart, setPCart] = useState([
    {
      id: 1,
      cartImg: cartImg1,
      name: "Lilly",
      type: "Mini bodycon",
      price: String("50,000"),
      pColor: <div className="wine"></div>,
      color: "wine",
      tPrice: "",
      size: "M",
    },
    {
      id: 2,
      cartImg: cartImg2,
      name: "Sculpter",
      type: "Silk shapter",
      color: "Black",
      pColor: <div className="black"></div>,
      price: String("22,000"),
      tPrice: "",
      size: "M",
    },
    {
      id: 3,
      cartImg: cartImg3,
      name: "Candy",
      type: "Signature Pose",
      color: "Pink",
      pColor: <div className="pink"></div>,
      price: String("20,000"),
      tPrice: "",
      size: "40",
    },
    {
      id: 4,
      cartImg: cartImg4,
      name: "Crochetelo",
      type: "Knitted piece",
      color: "Cream",
      pColor: <div className="cream"></div>,
      price: String("25,000"),
      tPrice: "",
      size: "S ",
    },
  ]);

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
                        <small>{cart.pColor}</small> {cart.color}
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

          <section>
            <h3>CART TOTAL</h3>
            <div>
              <p>Sub - total:</p>
              <p>₦167,000</p>
            </div>

            <hr />

            <div>
              <p>Shipping:</p>
              <small>
                Enter your address to view shipping options
                <b>Calculate shipping</b>
              </small>
            </div>
            <hr />

            <div>
              <input type="search" name="coupon code" id="coupon" />
              <button>APPLY</button>
            </div>
            <hr />

            <div>
              <p>Total:</p>
              <p>₦167,000</p>
            </div>

            <button>PROCEED TO CHECKOUT</button>
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
