import React from "react";
import style from "./footer.module.css";
import { Container } from "./container";
import logo from "../assets/logo-inverted.png";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container className={style.container}>
        <div>
          <img src={logo} alt="Little Lemon" />
        </div>
        <div>
          <h3>Little Lemon</h3>
          <ul>
            {["Home", "About", "Specials", "Reservations"].map((item) => (
              <li key={item}>
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Find us in Social networks!</h3>
          <p>🐦 📷 📘</p>
        </div>
        <div>
          <h3>Contact Information</h3>
          <p>Address: Chicago, Illinois, USA</p>
          <p>Phone: 312-938-7229</p>
          <p>Email: hello@littlelemon.com</p>
        </div>
      </Container>
    </footer>
  );
};
