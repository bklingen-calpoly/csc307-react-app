import { render, screen } from "@testing-library/react";
import MyApp from "./MyApp";
import React from "react";

test("renders MyApp react link", () => {
  render(<MyApp />);
  expect(screen.getByText("Submit")).toBeInTheDocument();
});
