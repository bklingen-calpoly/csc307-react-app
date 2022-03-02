import { render, screen } from "@testing-library/react";
import App from "./MyApp";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
