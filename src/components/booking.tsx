import React, { useReducer, useState } from "react";
import style from "./booking.module.css";
import { Container } from "./container";
import { Header } from "./header";
import { Footer } from "./footer";
import { BookingForm } from "./booking-form";
import { fetchAPI } from "../lib/api";
import { useNavigate } from "react-router-dom";

export const updateTimes = (state: string[], date: string) => {
  return fetchAPI(new Date(date));
};

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const Booking = () => {
  const navigate = useNavigate();
  const [times, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <main className={style.main}>
        <Container className={style.container}>
          <BookingForm
            availableTimes={times}
            onDateChange={dispatch}
            onSuccess={() => {
              navigate("/booking-confirmed");
            }}
          />
        </Container>
      </main>
      <Footer />
    </>
  );
};
