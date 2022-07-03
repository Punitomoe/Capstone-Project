import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import LegalDokumenSIM from "../pages/LegalDokumenSIM";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <LegalDokumenSIM />
    </BrowserRouter>
  );
  expect(
    screen.getByText(
      /Apa persyaratan berkas yang harus dibawa seseorang agar bisa mendapatkan SIM?/i
    )
  ).toBeInTheDocument();
});
