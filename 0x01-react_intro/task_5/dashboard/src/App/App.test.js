import { shallow } from "enzyme";
import App from "./App";
import React from "react";

describe("App />", () => {
  it("App renders without crashing", () => {
    const wrap = shallow(<App />);
    expect(wrap.exists()).toEqual(true);
  });
  it("App renders a div with the class App-header", () => {
    const wrap = shallow(<App />);
    wrap.update();
    expect(wrap.find("div.App-header")).toHaveLength(1);
  });
  it("App renders a div with the class App-body", () => {
    const wrap = shallow(<App />);
    wrap.update();
    expect(wrap.find("div.App-body")).toHaveLength(1);
  });
  it("App renders a div with the class App-footer", () => {
    const wrap = shallow(<App />);
    wrap.update();
    expect(wrap.find("div.App-footer")).toHaveLength(1);
  });
});