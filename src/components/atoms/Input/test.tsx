import { renderWithTheme } from "utils/tests/helpers";
import { cleanup, fireEvent } from "@testing-library/react";

import Input from ".";

/** yarn test src/components/atoms/Input/test.tsx  */

const onChange = jest.fn();

const setup = () => {
  const utils = renderWithTheme(<Input onChange={onChange} />);
  const input = utils.getByTestId("sensedia-input") as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

afterEach(cleanup);
describe("<Input />", () => {
  it("should render the component", () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });

  it("should type on component", () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: "Lorem Ipsum" } });
    expect(input.value).toBe("Lorem Ipsum");
  });

  it("should component have styles", () => {
    const { input } = setup();

    expect(input).toHaveStyle(
      "background-color: rgba(226, 226, 226, 0.38); color: #000000; border-width: 0 0 1px 0; border-style: solid; border-color: #919191; font-size: 16px"
    );
  });
});
