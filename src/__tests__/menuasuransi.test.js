import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Asuransi from "../pages/menu/submenu/Asuransi";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <Asuransi />
    </BrowserRouter>
  );
  expect(screen.getByText(/bpjs kesehatan/i)).toBeInTheDocument();
  expect(screen.getByText(/asuransi kendaraan/i)).toBeInTheDocument();
});
