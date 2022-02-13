import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Button from ".";
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
describe("Button component", () => {
  it("should create button component instance", () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
    // const compData = render(<Button title="Hello testing" />);
    // expect(compData.getByText("Hello testing")).toBeTruthy();
  });

  it("button should have title hello_world", () => {
    render(<Button title="hello_world" />);

    expect(screen.getByText(/hello_world/gi)).toBeTruthy();
  });

  it("should emit some value on click", () => {
    let clickedVal;
    const clickHandler = (e) => {
      clickedVal = true;
    };
    render(<Button title="My btn" click={clickHandler} />);
    fireEvent.click(screen.getByText(/My btn/gi));
    expect(clickedVal).toBeTruthy();
  });
});

