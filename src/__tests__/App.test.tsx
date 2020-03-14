import React from "react";
import { act, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../lib/sendForm", () => jest.fn());
import sendForm from "../lib/sendForm";

import App from "../App";

const mockedSendForm = sendForm as jest.Mock;

const mapToAttribute = (attribute: string) => (element: HTMLElement) =>
  element.getAttribute(attribute);
const changeInput = (input: HTMLElement, value: string) =>
  fireEvent.change(input, { target: { value } });

afterEach(() => {
  jest.clearAllMocks();
});

describe("App", () => {
  test("Matches snapshot", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  test("Renders form for partners by default", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("form-partners")).toBeInTheDocument();
  });

  test("Renders form for all if switched", () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId("button-all"));

    expect(getByTestId("form-all")).toBeInTheDocument();
  });
});

describe("App flows", () => {
  test("Happy flow", async () => {
    await act(async () => {
      mockedSendForm.mockImplementation(() => Promise.resolve({ ok: true }));

      const { getByTestId, getByText } = render(<App />);
      const submit = getByTestId("submit");
      window.scrollTo = jest.fn();

      changeInput(getByTestId("field-name"), "test-name");
      changeInput(getByTestId("field-email"), "test-email");
      changeInput(getByTestId("field-phone"), "1234567");
      changeInput(getByTestId("field-workplace"), "test-company");
      changeInput(getByTestId("field-message"), "test-message");

      fireEvent.click(submit);
      await setTimeout(jest.fn(), 0);

      expect(
        getByText("Спасибо! Мы ответим вам в ближайшее время. Соня и Юля")
      ).toBeInTheDocument();
      expect(mockedSendForm).toBeCalledTimes(1);
      expect(window.scrollTo).toBeCalledTimes(1);
    });
  });

  test("Error", async () => {
    await act(async () => {
      mockedSendForm.mockImplementation(() => Promise.resolve({ ok: false }));

      const { getByTestId } = render(<App />);
      const submit = getByTestId("submit");
      window.scrollTo = jest.fn();

      changeInput(getByTestId("field-name"), "test-name");
      changeInput(getByTestId("field-email"), "test-email");
      changeInput(getByTestId("field-phone"), "1234567");
      changeInput(getByTestId("field-workplace"), "test-company");
      changeInput(getByTestId("field-message"), "test-message");

      fireEvent.click(submit);
      await setTimeout(jest.fn(), 0);

      expect(getByTestId("error")).toBeInTheDocument();
      expect(mockedSendForm).toBeCalledTimes(1);
      expect(window.scrollTo).toBeCalledTimes(1);
    });
  });
});
