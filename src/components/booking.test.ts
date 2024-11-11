import { fetchAPI } from "../lib/api";
import { initializeTimes, updateTimes } from "./booking";

describe("booking", () => {
  test("initialize", () => {
    expect(initializeTimes().length).toBeGreaterThan(0);
  });
  test("update", () => {
    const date = new Date();
    const results = fetchAPI(date);
    expect(updateTimes([], date.toString())).toEqual(results);
  });
});
