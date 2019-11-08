import React from "react";
import { Dashboard, balls, strike } from "./Dashboard";
import { render, cleanup } from "@testing-library/react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Dashboard", () => {
  let container;
  beforeEach(() => {
    container = mount(<Dashboard />);
  });
  it("renders", () => {
    expect(container).not.toBeNull();
  });
  it("shows default text", () => {
    expect(container.find(".balls").text()).toEqual("Ball");
  });
});

afterEach(cleanup);

test("ball testing", () => {
  expect(balls).not.toBe(4);
});

test("strike testing", () => {
  expect(strike).not.toBe(3);
});

// it("shows ball btn", () => {
//   const { getByTestId, getByText } = render(<button />);

//   expect(getByTestId("ball-btn")).toHaveTextContent("Ball");
// });
