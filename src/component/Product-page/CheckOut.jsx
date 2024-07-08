import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./Product-Styles/checkOut.scss";


export function CheckOut() {
  return (
    <>
      <Header />

      <section>
        <form action=""></form>

        <section className="cartTotal">
          <h4>YOUR ORDER</h4>
          <hr />

          <div>
            <p>Product</p>
            <p>Sub-total</p>
          </div>

          <hr />

          <div>
            <small>Lilly mini bodycon x2</small>
            <p>
              <b>₦</b>100,000
            </p>
          </div>
          <div>
            <small>Sculpter silk shaper x1</small>
            <p>
              <b>₦</b>22,000
            </p>
          </div>

          <div>
            <small>Candy signature pose x1</small>
            <p>
              <b>₦</b>22,000
            </p>
          </div>
          <div>
            <small>Crochetelo knitted piece x1</small>
            <p>
              <b>₦</b>25,000
            </p>
          </div>

          <hr />
          <div>
            <p>Sub-total</p>
            <p>
              <b>₦</b>167,000
            </p>{" "}
          </div>
          <hr />
          <div>
            <p>Shipping:</p>
            <small>Enter your address to view shipping options</small>
          </div>
          <br />
          <div>
            <p>Paystack fees</p>
            <p> 
            <b>₦</b>
            1,200</p>
          </div>

          <div>
            <p>Total:</p>
            <b>₦168,200</b>
          </div>

          <small>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes decided
            in our privacy policy.
          </small>

          <div className="check">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <small>
            I have read
            and agreed to the website Terms & conditions
          </small>
          </div>

          <button className="proceed">PLACE ORDER</button>
        </section>
      </section>

      <Footer />
    </>
  );
}
