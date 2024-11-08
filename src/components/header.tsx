import React from "react";
import style from "./header.module.css";
import logo from "../assets/logo.svg";
import { Container } from "./container";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={style.header}>
      <Container className={style.container}>
        <img className={style.logo} src={logo} alt="Little Lemon Shop" />
        <nav className={style.nav}>
          <ul>
            {["Home", "About", "Specials"].map((item) => (
              <li key={item}>
                <Link to="/">{item}</Link>
              </li>
            ))}
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
