import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("Notifications renders without crashing", () => {
    const wrap = shallow(<Notifications />);
    expect(wrap.exists()).toEqual(true);
  });
  it("Notifications renders three list items", () => {
    const wrap = shallow(<Notifications />);
    wrap.update();
    expect(wrap.find("li")).toHaveLength(3);
  });
  it("Notifications renders the text Here is the list of notifications", () => {
    const txt = "Here is the list of notifications";
    const wrap = shallow(<Notifications />);
    wrap.update();
    expect(wrap.find(".Notification p").txt()).toEqual(txt);
  });
});