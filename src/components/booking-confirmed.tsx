import React from "react";
import style from "./booking.module.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { Container } from "./container";

export const BookingConfirmed = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Container>
          <p>You're all set!</p>
        </Container>
      </main>
      <Footer />
    </>
  );
};
