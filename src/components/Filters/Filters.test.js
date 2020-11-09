import React from "react";
import { render } from "@testing-library/react";
import Filters from "./Filters";

describe("Filters tests", () => {
  it("should render", () => {
    expect(render(<Filters />)).toBeTruthy();
  });
});
