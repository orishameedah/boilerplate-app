import React from "react";
import { shallow } from "enzyme";
import DashboardPage from "../../components/Dashboard";

test("should render ExpenseDashboard correctly", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
