import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

test("should render header text", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(screen.getByText(/Beranda/i)).toBeInTheDocument();
  expect(screen.getByText(/Menu/i)).toBeInTheDocument();
  expect(screen.getByText(/Tentang Kami/i)).toBeInTheDocument();
  expect(screen.getByText(/Customer Service/i)).toBeInTheDocument();
  expect(screen.getByText(/Kalkulator Pajak/i)).toBeInTheDocument();
});
