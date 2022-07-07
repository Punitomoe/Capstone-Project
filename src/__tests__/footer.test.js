import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

test("should render header text", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  expect(screen.getByText(/2022 maturedi.com/i)).toBeInTheDocument();
  expect(screen.getByText(/Media Social Kami/i)).toBeInTheDocument();
});
