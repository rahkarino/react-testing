import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("component renders with correct heading", () => {
  const component = render(<Counter />);
  const headerElement = component.getByTestId("header");
  expect(headerElement.textContent).toBe("My Counter");
});

test("counter starts at 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("input contain value 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
});

test("sub btn contains - sign", () => {
  const { getByTestId } = render(<Counter />);
  const subEl = getByTestId("sub-btn");
  expect(subEl.textContent).toBe("-");
});

test("add btn contains + sign", () => {
  const { getByTestId } = render(<Counter />);
  const addEl = getByTestId("add-btn");
  expect(addEl.textContent).toBe("+");
});

test("input value changes correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  expect(inputEl.value).toBe("5");
});

test("click on plus btn add 1 to counter", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("1");
});

test("click on sub btn subtract 1 from counter", () => {
  const { getByTestId } = render(<Counter />);
  const subBtnEl = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subBtnEl);
  expect(counterEl.textContent).toBe("-1");
});

test("changing input value & then click on add btn works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("5");
});

test("changing input value & then click on sub btn works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const subBtnEl = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subBtnEl);
  expect(counterEl.textContent).toBe("-5");
});

test("add & then sub leads to correct counter value", () => {
  const { getByTestId } = render(<Counter />);
  const subBtnEl = getByTestId("sub-btn");
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  expect(counterEl.textContent).toBe("20");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnEl);
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  expect(counterEl.textContent).toBe("15");
});

test("counter contains the correct className", () => {
  const { getByTestId } = render(<Counter />);
  const subBtnEl = getByTestId("sub-btn");
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  expect(counterEl.className).toBe("");
  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("");
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("green");
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("green");
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  expect(counterEl.className).toBe("");
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  expect(counterEl.className).toBe("red");

});
