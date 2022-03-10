import { renderWithTheme } from "utils/tests/helpers";
import { cleanup } from "@testing-library/react";

import Card, { CardTypes } from ".";

/** yarn test src/components/atoms/Card/test.tsx  */

const props: CardTypes = {
  title: "Lorem Ipsum",
  subtitle: "John Due",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quia rerum, minus, sint perspiciatis, laboriosam facilis nobis voluptatem inventore assumenda magnam veniam explicabo eos culpa expedita. Perferendis quia quo laborum.",
};

afterEach(cleanup);
describe("<Card />", () => {
  it("should render the component", () => {
    const { container } = renderWithTheme(<Card {...props} />);

    expect(container).toBeInTheDocument();
  });

  it("should render the component", () => {
    const { getByTestId } = renderWithTheme(<Card {...props} />);

    expect(getByTestId("sensedia-card")).toHaveStyle(
      "flex: 1; min-width: 257px; min-height: 218.81px; border-radius: 4px; padding: 13px; border: 1px solid rgba(66,66,66,0.21);"
    );
  });
});
