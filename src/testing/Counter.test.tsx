import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import UserEvent from "@testing-library/user-event";
describe("Counter Component", () => {
  test("on load it should display 0", () => {
    render(<Counter />);
    // assert functions
    expect(screen.getByTestId("countervalue")).toHaveTextContent("0");
  });
  test("on increment click it should display 1", () => {
    render(<Counter />);
    // simulate event
    UserEvent.click(screen.getByTestId("increment-btn"));
    // assert functions
    expect(screen.getByTestId("countervalue")).toHaveTextContent("1");
  });
  test("on decrement click it should be -1", () => {
    render(<Counter />);
    // simulate event
    UserEvent.click(screen.getByTestId("decrement-btn"));
    // assert functions
    expect(screen.getByTestId("countervalue")).toHaveTextContent("-1");
  });
});
