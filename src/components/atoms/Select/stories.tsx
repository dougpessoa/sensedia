import { Story, Meta } from "@storybook/react/types-6-0";
import Select, { SelectTypes } from ".";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

export const Default: Story<SelectTypes> = (args) => <Select {...args} />;
