import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import About from "../pages/about/About";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  expect(screen.getByText(/About us/i)).toBeInTheDocument();
});
