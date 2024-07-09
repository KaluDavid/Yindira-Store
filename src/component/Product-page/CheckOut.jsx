import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./Product-Styles/checkOut.scss";
import coupon from "./cart-images/coupon.png";

export function CheckOut() {
  return (
    <>
      <Header />

      <main className="checkOut">
        <div className="out">
          <h4>Checkout</h4>
          <p>
            Returning customer?
            <a href="#">Click here to login</a>
          </p>

          <p>
            <img src={coupon} alt="coupon" /> Have a cupon? Click here to enter
          </p>
        </div>

        <section className="forms">
          <form action="">
            <h2>BILLING DETAILS</h2>

            <section>
              <section className="flexInput">
                <div>
                  <label htmlFor="Email">
                    Email<b>*</b>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="Email">
                    Phone<b>*</b>
                  </label>
                  <input
                    type="phone"
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </section>

              <section className="flexInput">
                <div>
                  <label htmlFor="text">
                    First Name<b>*</b>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your First name"
                  />
                </div>
                <div>
                  <label htmlFor="text">
                    Last name<b>*</b>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </section>

              <div>
                <label htmlFor="Email">
                  Street address<b>*</b>
                </label>
                <input
                  type="text"
                  name="streetname"
                  required
                  id=""
                  placeholder="House number and street address"
                />
              </div>

              <div>
                <label htmlFor="text">
                  State<b>*</b>
                </label>

                <select name="state" id="state">
                  <option value="">Select Option</option>
                  <option value="calabar">Calabar</option>
                  <option value="calabar">Lagos</option>
                  <option value="kastina">Kastina</option>
                  <option value="kwara">Kwara</option>
                  <option value="edo">Edo</option>
                  <option value="ogun">Ogun</option>
                </select>
              </div>

              <div>
                <label htmlFor="text">
                  City<b>*</b>
                </label>
                <select name="city" id="city">
                  <option value="calabar">Select Option</option>
                  <option value="calabar">Calabar</option>
                  <option value="Lagos">Lagos</option>
                  <option value="porthacourt">porthacourt</option>
                  <option value="Abuja">Abuja</option>
                  <option value="benin">Benin</option>
                  <option value="ibadan">Ibadan</option>
                </select>
              </div>

              <div>
                <label htmlFor="Country">
                  Country<b>*</b>
                </label>
                <select name="Country" id="Country">
                  <option value="calabar">Select Option</option>
                  <option value="calabar">Nigeria</option>
                  <option value="calabar">Cameroon</option>
                  <option value="calabar">Ghana</option>
                </select>

                <small className="checkbox">
                  <input type="checkbox" name="create account?" id="" />
                  <label htmlFor="create account">Create account?</label>
                </small>
              </div>

              <div>
                <small>Order notes (optional)</small>
                <textarea
                  rows="10"
                  cols="50"
                  name="comment"
        
                ></textarea>
              </div>
            </section>
          </form>

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
            <div className="ship">
              <p>Shipping:</p>
              <small>Enter your address to view shipping options</small>
            </div>
            <div>
              <p>Paystack fees</p>
              <p>
                <b>₦</b>
                1,200
              </p>
            </div>

            <div>
              <p>Total:</p>
              <b>₦168,200</b>
            </div>

            <small>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              decided in our privacy policy.
            </small>

            <div className="check">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <small>
                I have read and agreed to the website Terms & conditions
              </small>
            </div>

            <button className="proceed">PLACE ORDER</button>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
