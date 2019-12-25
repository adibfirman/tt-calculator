import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";

import App from "../App";

const renderApp = () => render(<App />);

it("should render actually", () => {
  const { container } = renderApp();

  expect(container).toBeInTheDocument();
});

it("summary number 4 + 1 = 5", () => {
  const { getByText } = renderApp();

  const firstNum = getByText("4");
  const secNum = getByText("1");
  const action = getByText("+");
  const resultAct = getByText("=");
  const result = getByText("5");

  firstNum.click();
  action.click();
  secNum.click();
  resultAct.click();

  expect(result).toBeInTheDocument();
});

it("multiply number 2 * 1 = 2", () => {
  const { getByText } = renderApp();

  const firstNum = getByText("2");
  const secNum = getByText("1");
  const action = getByText("*");
  const resultAct = getByText("=");
  const result = getByText("2");

  firstNum.click();
  action.click();
  secNum.click();
  resultAct.click();

  expect(result).toBeInTheDocument();
});

it("generate 4 prime numbers", () => {
  const { getByText } = renderApp();
  const dataResult = [2, 3, 5, 7].join(", ");

  const getBtnPrime = getByText(/prime number/gi);
  const getNum = getByText("4");
  const resultAct = getByText("=");

  getBtnPrime.click();
  getNum.click();
  resultAct.click();

  const getResult = getByText(dataResult);

  expect(getResult).toBeInTheDocument();
});

it("generate 4 fibonacci numbers", () => {
  const { getByText } = renderApp();
  const dataResult = [0, 1, 1, 2].join(", ");

  const getBtnPrime = getByText(/fibonacci number/gi);
  const getNum = getByText("4");
  const resultAct = getByText("=");

  getBtnPrime.click();
  getNum.click();
  resultAct.click();

  const getResult = getByText(dataResult);

  expect(getResult).toBeInTheDocument();
});
