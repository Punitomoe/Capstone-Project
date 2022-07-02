import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import LegalDokumen from "../pages/menu/submenu/LegalDokumen";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <LegalDokumen />
    </BrowserRouter>
  );
  expect(screen.getByText(/sistem pembuatan ktp/i)).toBeInTheDocument();
  expect(screen.getByText(/sistem pembuatan sim/i)).toBeInTheDocument();
});
