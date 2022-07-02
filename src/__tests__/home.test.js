import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/home/Home";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Menu from "../pages/menu/Menu";

test("should render header text", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(screen.getByText(/Halo Sobat!, Yuk/i)).toBeInTheDocument();
  expect(screen.getByText(/Belajar Sekarang!/i)).toBeInTheDocument();
});

test("should update history", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Home />
    </Router>
  );
  fireEvent.click(screen.getByText(/Belajar Sekarang!/i));
  expect(history.location.pathname).toEqual("/menu");
});

test("should update dom", () => {
  render(
    <BrowserRouter>
      <Home />
      <Menu />
    </BrowserRouter>
  );
  fireEvent.click(screen.getByText(/Belajar Sekarang!/i));
  expect(screen.getByText(/Jelajahi Sekarang!/i)).toBeInTheDocument();
});
