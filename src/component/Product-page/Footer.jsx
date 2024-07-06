import React from "react";

export function Footer() {
  return (
    <>
      <footer>
        <section>
          <div>
            <h3 className="logo">yindira</h3>
          </div>

          {/* links */}
          <div>
            <div>
              <h3>HELP</h3>
              <a href="#">FAQs</a>
              <a href="#">Size Guide</a>
              <a href="#">Shipping</a>
              <a href="#">Return & Exchange</a>
              <a href="#">Contact Us</a>
            </div>
            <div>
              <h3>COMPANY</h3>
              <a href="#">About US</a>
              <a href="#">Careers</a>
              <a href="#">Our Stores</a>
              <a href="#">Press </a>
              <a href="#">Blog</a>
            </div>
            <div>
              <h3>MORE</h3>
              <a href="#">Account</a>
              <a href="#">Wishlist</a>
              <a href="#">Track Order</a>
            </div>
            <div>
              <h3>LEGAL</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of service</a>
              <a href="#">Refund Policy</a>
            </div>

            <div>
                <h3>
                    NEW TO YINDIRA?             </h3>
                    <article>

                    </article>

                    <button>
                        Sign Up →
                    </button>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
