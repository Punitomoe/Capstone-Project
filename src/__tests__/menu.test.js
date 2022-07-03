import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Menu from "../pages/menu/Menu";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
  expect(screen.getAllByText(/Perpajakan/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Asuransi/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Legal Dokumen/i).length).toBeGreaterThan(0);
});

test("should update history", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Menu />
    </Router>
  );
  fireEvent.click(screen.getByText(/kenali pajak/i));
  //   fireEvent.click(screen.getByText(/kenali asuransi/i));
  //   fireEvent.click(screen.getByText(/kenali legal dokumen/i));
  expect(history.location.pathname).toEqual("/menu/pajak");
  //   expect(history.location.pathname).toEqual("/menu/asuransi");
  //   expect(history.location.pathname).toEqual("/menu/dokumen");
});
