import React from "react";
import { configure, shallow } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { BurgerBuilder } from "./BurgerBuilder";

configure({ adapter: new Adaptor() });

describe("<BurgerBuilder />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it("should render BuildControls", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
