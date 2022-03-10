import { renderWithTheme } from "utils/tests/helpers";
import { cleanup } from "@testing-library/react";

import Loading from ".";

/** yarn test src/components/atoms/Loading/test.tsx  */

afterEach(cleanup);
describe("<Loading />", () => {
  it("should render the component", () => {
    const { container } = renderWithTheme(<Loading />);

    expect(container).toBeInTheDocument();
  });
});
