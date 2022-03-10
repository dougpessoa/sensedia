import { Story, Meta } from "@storybook/react/types-6-0";
import Input, { InputTypes } from ".";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

export const Default: Story<InputTypes> = (args) => <Input {...args} />;
