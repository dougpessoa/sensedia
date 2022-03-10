import { Story, Meta } from "@storybook/react/types-6-0";
import Input, { InputTypes } from ".";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Type for search...",
  },
} as Meta;

export const Default: Story<InputTypes> = (args) => <Input {...args} />;
