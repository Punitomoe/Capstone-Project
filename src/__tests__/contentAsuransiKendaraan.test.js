import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import AsuransiKendaraan from "../pages/contents/AsuransiKendaraan";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <AsuransiKendaraan />
    </BrowserRouter>
  );
  expect(
    screen.getByText(
      /Agen perusahaan asuransi yang memiliki sertifikat keagenan yang diakui./i
    )
  ).toBeInTheDocument();
});
