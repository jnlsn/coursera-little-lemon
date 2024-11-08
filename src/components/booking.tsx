import React from "react";
import style from "./booking.module.css";
import { Container } from "./container";
import { Header } from "./header";
import { Footer } from "./footer";

export const Booking = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Container className={style.container}>hi</Container>
      </main>
      <Footer />
    </>
  );
};
