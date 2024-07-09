import React from "react";
import "./Product-Styles/footer.scss";
import social1 from "./Product-images/linkedin.png";
import social2 from "./Product-images/ig.png";
import social3 from "./Product-images/youtube.png";
import social4 from "./Product-images/twitter.png";
import social5 from "./Product-images/fb.png";
import visa from "./Product-images/visa.png";
import master from "./Product-images/mastercard_symbol.svg.png";

export function Footer() {
  return (
    <>
      <footer>
        <section>

        <div className="yindira1">
              <h4>NEW TO YINDIRA? </h4>
              <article>
                Sign up for exclusive offers, original stories, events and more.
              </article>

              <button>Sign Up →</button>

              {/* social links */}
              <section className="socialLinks">
                <a href="#">
                  <img src={social1} alt="linkedin" />
                </a>
                <a href="#">
                  <img src={social2} alt="instagram" />
                </a>
                <a href="#">
                  <img src={social3} alt="youtube" />
                </a>
                <a href="#">
                  <img src={social4} alt="twitter" />
                </a>
                <a href="#">
                  <img src={social5} alt="facebook" />
                </a>
              </section>
            </div>

          <div>
            <h3 className="logo">yindira</h3>
            <article>
              "To empower women through fashion by offering a seamless, stylish,
              and inspiring online shopping experience that celebrates
              individuality and confidence."
            </article>
          </div>

          {/* links */}
          <div className="links">
            <div>
              <h4>HELP</h4>
              <a href="#">FAQs</a>
              <a href="#">Size Guide</a>
              <a href="#">Shipping</a>
              <a href="#">Return & Exchange</a>
              <a href="#">Contact Us</a>
            </div>
            <div>
              <h4>COMPANY</h4>
              <a href="#">About US</a>
              <a href="#">Careers</a>
              <a href="#">Our Stores</a>
              <a href="#">Press </a>
              <a href="#">Blog</a>
            </div>
            <div>
              <h4>MORE</h4>
              <a href="#">Account</a>
              <a href="#">Wishlist</a>
              <a href="#">Track Order</a>
            </div>
            <div>
              <h4>LEGAL</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of service</a>
              <a href="#">Refund Policy</a>
            </div>

            <div className="yindira2">
              <h4>NEW TO YINDIRA? </h4>
              <article>
                Sign up for exclusive offers, original stories, events and more.
              </article>

              <button>Sign Up →</button>

              {/* social links */}
              <section className="socialLinks">
                <a href="#">
                  <img src={social1} alt="linkedin" />
                </a>
                <a href="#">
                  <img src={social2} alt="instagram" />
                </a>
                <a href="#">
                  <img src={social3} alt="youtube" />
                </a>
                <a href="#">
                  <img src={social4} alt="twitter" />
                </a>
                <a href="#">
                  <img src={social5} alt="facebook" />
                </a>
              </section>
            </div>
          </div>
        </section>

        <div className="visa">
          <h5>
       <img src={master} alt="" />     <img src={visa} alt="" /> 
          </h5>
          <p>© 2024. yindira. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
