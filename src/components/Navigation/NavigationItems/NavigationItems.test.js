import React from "react";
import { configure, shallow } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adaptor() });

describe("<NavigationItems />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render two <NavigationItem /> elements if not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
    // [[expect]] provided by jest and [[find]] is utility function provided by enzyme [[toHaveLength]] is utility functin provided by jest
  });

  it("should render three <NavigationItem /> elements if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("should contain logout button", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper
        .contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
