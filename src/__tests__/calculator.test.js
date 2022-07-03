import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import KalkulatorPajak from "../pages/calculator/kalkulatorPajak";
import { Provider } from "react-redux";
import { store } from "../app/store";

test("should render title text", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <KalkulatorPajak />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByText(/Pajak Karyawan/i)).toBeInTheDocument();
  expect(screen.getByText(/kunjungi e-samsat/i)).toBeInTheDocument();
});

test("should go to some link", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <KalkulatorPajak />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByText(/kunjungi e-samsat/i).href).toEqual(
    "https://e-samsat.id/"
  );
});

test("should give result pajak karyawan", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <KalkulatorPajak />
      </Provider>
    </BrowserRouter>
  );
  fireEvent.change(screen.getByTestId("penghasilan"), {
    target: { value: 50000000 },
  });
  fireEvent.change(screen.getByTestId("bonus"), {
    target: { value: 10000000 },
  });
  fireEvent.change(screen.getByTestId("select"), { target: { value: "K/1" } });
  fireEvent.click(screen.getByTestId("jumlahkaryawan"));
  expect(screen.getByText("Rp. 150,000")).toBeInTheDocument();
});

test("should give result pajak UMKM", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <KalkulatorPajak />
      </Provider>
    </BrowserRouter>
  );
  fireEvent.change(screen.getByTestId("umkm"), { target: { value: 5000000 } });
  fireEvent.click(screen.getByTestId("jumlahumkm"));
  expect(screen.getByText("Rp. 25,000")).toBeInTheDocument();
});

test("should render select option correctly", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <KalkulatorPajak />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByTestId("select").value).toEqual("TK/0");
  fireEvent.change(screen.getByTestId("select"), { target: { value: "K/0" } });
  expect(screen.getByTestId("select").value).toEqual("K/0");
  fireEvent.change(screen.getByTestId("select"), { target: { value: "K/2" } });
  expect(screen.getByTestId("select").value).toEqual("K/2");
  fireEvent.change(screen.getByTestId("select"), { target: { value: "K/3" } });
  expect(screen.getByTestId("select").value).toEqual("K/3");

  fireEvent.change(screen.getByTestId("select"), { target: { value: "TK/0" } });
  expect(screen.getByTestId("select").value).toEqual("TK/0");
});
