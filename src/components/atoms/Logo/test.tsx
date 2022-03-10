import { renderWithTheme } from "utils/tests/helpers";
import { cleanup } from "@testing-library/react";

import Logo from ".";

/** yarn test src/components/atoms/Logo/test.tsx  */

afterEach(cleanup);
describe("<Logo />", () => {
  it("should render the component", () => {
    const { container } = renderWithTheme(<Logo />);

    expect(container).toBeInTheDocument();
  });

  it("should max width been 200px", () => {
    const { getByTestId } = renderWithTheme(<Logo size={200} />);

    expect(getByTestId("sensedia-logo")).toHaveStyle("max-width: 200px;");
  });
});
