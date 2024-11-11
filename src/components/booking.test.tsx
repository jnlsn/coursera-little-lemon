import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchAPI } from "../lib/api";
import { initializeTimes, updateTimes } from "./booking";
import { BookingForm } from "./booking-form";

describe("booking", () => {
  test("initialize", () => {
    expect(initializeTimes().length).toBeGreaterThan(0);
  });
  test("update", () => {
    const date = new Date();
    const results = fetchAPI(date);
    expect(updateTimes([], date.toString())).toEqual(results);
  });
  test("invalid submit", async () => {
    const user = userEvent.setup();
    render(
      <BookingForm
        availableTimes={["1"]}
        onDateChange={() => {}}
        onSuccess={() => {}}
      />
    );
    await user.click(screen.getByText(/make reservation/i));
    expect(screen.getByText(/please fill out/i)).toBeTruthy();
  });
  test("valid submit", async () => {
    const user = userEvent.setup();
    const spy = jest.fn();
    render(
      <BookingForm
        availableTimes={["1"]}
        onDateChange={() => {}}
        onSuccess={spy}
      />
    );
    await user.type(screen.getByText(/number of guests/i), "2");
    await user.click(screen.getByText(/make reservation/i));
    expect(spy).toHaveBeenCalled();
  });
});
