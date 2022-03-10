import { renderWithTheme } from "utils/tests/helpers";
import { cleanup, fireEvent } from "@testing-library/react";

import Select from ".";

/** yarn test src/components/atoms/Select/test.tsx  */

const onChange = jest.fn();

const setup = () => {
  const utils = renderWithTheme(<Select onChange={onChange} />);
  const select = utils.getByTestId("sensedia-select");
  const options = utils.getAllByTestId(
    "sensedia-options"
  ) as HTMLOptionElement[];

  return {
    select,
    options,
    ...utils,
  };
};

afterEach(cleanup);
describe("<Select />", () => {
  it("should render the component", () => {
    const { select } = setup();

    expect(select).toBeInTheDocument();
  });

  it("should selection an option", () => {
    const { select, options } = setup();

    fireEvent.change(select, { target: { value: 2 } });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
  });
});
