import { renderWithTheme } from "utils/tests/helpers";
import { cleanup, fireEvent } from "@testing-library/react";

import Button from ".";
type ButtonTypeProps = "rounded" | "default";

/** yarn test src/components/atoms/Button/test.tsx  */

const setup = (buttonType: ButtonTypeProps) => {
  const utils = renderWithTheme(
    <Button buttonType={buttonType}>Search</Button>
  );
  const button = utils.getByTestId("sensedia-button");

  return {
    button,
    ...utils,
  };
};

afterEach(cleanup);
describe("<Button />", () => {
  it("should render the component", () => {
    const { button } = setup("default");

    expect(button).toBeInTheDocument();
  });

  it("should click on component", () => {
    const { button } = setup("default");

    fireEvent.click(button);
  });

  it("should component to have default style", () => {
    const { button } = setup("default");

    expect(button).toHaveStyle("background-color: transparent; color: #5C21AA");
  });

  it("should component to have rounded style", () => {
    const { button } = setup("rounded");

    expect(button).toHaveStyle("background-color: #5C21AA; color: white;");
  });
});
