import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import LegalDokumenKTP from "../pages/LegalDokumenKTP";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <LegalDokumenKTP />
    </BrowserRouter>
  );
  expect(
    screen.getByText(
      /Berkas apa saja yang perlu dibawa ketika melakukan pendaftaran?/i
    )
  ).toBeInTheDocument();
});
