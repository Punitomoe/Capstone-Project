import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import CustomerService from "../pages/cs/CustomerService";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <CustomerService />
    </BrowserRouter>
  );
  expect(screen.getByText(/Hubungi Tim Pelayanan Kami/i)).toBeInTheDocument();
});

test("should go to some link", () => {
  render(
    <BrowserRouter>
      <CustomerService />
    </BrowserRouter>
  );
  expect(screen.getByText("Contact Customer Service").href).toEqual(
    "https://wa.me/qr/T6OD62J5F7MYF1"
  );
});
