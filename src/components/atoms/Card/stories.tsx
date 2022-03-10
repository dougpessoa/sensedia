import { Story, Meta } from "@storybook/react/types-6-0";
import Card, { CardTypes } from ".";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Lorem ipsum",
    subtitle: "John Due",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci amet earum aliquid aperiam quidem repellendus possimus deleniti pariatur? Fugit veniam fugiat, quas enim quae commodi adipisci nisi culpa dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci amet earum aliquid aperiam quidem repellendus possimus deleniti pariatur? Fugit veniam fugiat, quas enim quae commodi adipisci nisi culpa dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci amet earum aliquid aperiam quidem repellendus possimus deleniti pariatur? Fugit veniam fugiat, quas enim quae commodi adipisci nisi culpa dolore!",
    date: "31/12/2022 23:59:59",
  },
} as Meta;

export const Default: Story<CardTypes> = (args) => <Card {...args} />;
