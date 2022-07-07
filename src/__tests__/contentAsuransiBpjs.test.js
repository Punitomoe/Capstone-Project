import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import AsuransiBPJS from "../pages/contents/AsuransiBPJS";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <AsuransiBPJS />
    </BrowserRouter>
  );
  expect(
    screen.getByText(/Bagaimana prosedur pendaftaran dan pembayaran?/i)
  ).toBeInTheDocument();
});
