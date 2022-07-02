import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import PajakKaryawan from "../pages/PajakKaryawan";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <PajakKaryawan />
    </BrowserRouter>
  );
  expect(
    screen.getByText(/Mengapa perlu membayar pajak karyawan?/i)
  ).toBeInTheDocument();
});
