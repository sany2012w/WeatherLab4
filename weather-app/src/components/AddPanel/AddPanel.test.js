import React from "react";
import AddPanel from "./AddPanel";
import renderer from "react-test-renderer";

it(`AddPanel displayed correctly`, () => {
  const tree = renderer.create(<AddPanel />).toJSON();
  expect(tree).toMatchSnapshot();
});
