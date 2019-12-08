import React from "react";
import { Display } from "./Display";
import { Dashboard } from "./Dashboard";
import { render, cleanup } from "@testing-library/react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("DISPLAY", () => {
  let wrapper;
  let cont;
  beforeEach(() => {
    wrapper = mount(<Display />);
  });
  beforeEach(() => {
    cont = mount(<Dashboard />);
  });
  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });
  it("shows default text", () => {
    expect(wrapper.find(".display-ball").text()).toEqual("Balls: ");
  });
  it("correctly increments ball count", () => {
    cont.find(".balls").simulate("click");
    expect(wrapper.find(".display-ball").text()).toEqual("Balls: 1");
  });
});

afterEach(cleanup);

test("render without exploding", () => {
  render(<Display />);
});
