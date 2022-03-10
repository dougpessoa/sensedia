import { Story, Meta } from "@storybook/react/types-6-0";
import Card, { CardTypes } from ".";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

export const Default: Story<CardTypes> = (args) => <Card {...args} />;
