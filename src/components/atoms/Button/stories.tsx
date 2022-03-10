import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonTypes } from ".";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    buttonType: "default",
    type: "button",
  },
} as Meta;

export const Default: Story<ButtonTypes> = (args) => (
  <Button {...args}>BUTTON</Button>
);
