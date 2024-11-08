import React from "react";
import style from "./main.module.css";
import { Container } from "./container";
import img from "../assets/food.jpg";
import { Header } from "./header";
import { Footer } from "./footer";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Container className={style.container}>
          <div>
            <h1>Little Lemon</h1>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/booking">Reserve A Table</Link>
          </div>
          <img src={img} alt="Yum. food." />
        </Container>
      </main>
      <Footer />
    </>
  );
};
