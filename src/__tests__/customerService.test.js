import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import CustomerService from "../pages/CustomerService";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <CustomerService />
    </BrowserRouter>
  );
  expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
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
