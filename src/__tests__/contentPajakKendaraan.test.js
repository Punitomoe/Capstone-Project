import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import PajakKendaraan from "../pages/contents/PajakKendaraan";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <PajakKendaraan />
    </BrowserRouter>
  );
  expect(
    screen.getByText(
      /Lima Tahunan Pajak Kendaraan Bermotor Lima Tahunan adalah/i
    )
  ).toBeInTheDocument();
});
