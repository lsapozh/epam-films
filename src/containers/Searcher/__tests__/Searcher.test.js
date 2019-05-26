import React from "react";
import { shallow } from "enzyme";
import { Searcher } from "containers/Searcher";
import { Button, Form } from "containers/Searcher/components";

describe("Searcher", () => {
  test("change findBy in state", () => {
    const wrapper = shallow(<Searcher />);

    expect(wrapper.state().findBy).toEqual("title");

    wrapper
      .find(Button)
      .at(1)
      .simulate("click", {
        preventDefault: () => {}
      });

    expect(wrapper.state().findBy).toEqual("director");
  });

  test("submit form", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<Searcher dispatch={dispatch} />);

    wrapper.setState({ findBy: "director" });
    wrapper.setState({ value: "tim" });

    wrapper.find(Form).simulate("submit", {
      preventDefault: () => {}
    });

    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0].payload.method).toBe("push");
    expect(dispatch.mock.calls[0][0].payload.args[0]).toBe(
      "/search?findBy=director&value=tim"
    );
  });
});
