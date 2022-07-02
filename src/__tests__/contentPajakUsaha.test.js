import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import PajakUsaha from "../pages/PajakUsaha";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <PajakUsaha />
    </BrowserRouter>
  );
  expect(
    screen.getByText(
      /Kapan dan bagaimana saya sebagai pemilik usaha membayar pajak saya?/i
    )
  ).toBeInTheDocument();
});
