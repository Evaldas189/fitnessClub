import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
import ShareLink from 'react-facebook-share-link'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our fitness club training program!
        </p>
        <p className="footer-subscription-text">
          Subsribe us to get the latest information about our club:
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholde="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-links">
            <div className="footer-link-wrapper">
              <div class="footer-link-items">
                <h2>About Us</h2>
                <Link to="/sign-up">How it works</Link>
                <a href="https://gymnation.com/blog/">FitClub blog</a>
                <Link to="/">Careers</Link>
                <Link to="/">Investors</Link>
                <Link to="/">Terms of Service</Link>
              </div>
              <div class="footer-link-items">
                <h2>Contact Us</h2>
                <Link to="/">Contact</Link>
                <Link to="/">Support</Link>
                <Link to="/">Destinations</Link>
                <Link to="/">Sponsorships</Link>
              </div>
            </div>
            <div className="footer-link-wrapper">
              <div class="footer-link-items">
                <h2>Support us</h2>
                <a href="https://www.patreon.com/">Patreon</a>
                <a href="https://en.liberapay.com/">Liberapay</a>

              </div>
              <div class="footer-link-items">
                <h2>Social Media</h2>
                <a href="https://www.instagram.com/explore/tags/gym/?hl=en">Instagram</a>
                <ShareLink link='https://fitnessclub-gym.netlify.app/'>
                  {link => (
                    <a href={link} target='_blank'>Facebook</a>
                  )}
                </ShareLink>
                <a href="https://www.youtube.com/watch?v=jDya7sl3sZ8">Youtube</a>
                <Link to="/">Twitter</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
