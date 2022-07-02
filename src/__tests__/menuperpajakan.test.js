import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Perpajakan from "../pages/menu/submenu/Perpajakan";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <Perpajakan />
    </BrowserRouter>
  );
  expect(screen.getByText(/pajak karyawan/i)).toBeInTheDocument();
  expect(screen.getByText(/pajak usaha/i)).toBeInTheDocument();
});
