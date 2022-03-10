import { Story, Meta } from "@storybook/react/types-6-0";
import Logo from ".";
import styled from "styled-components";

export default {
  title: "Components/Logo",
  component: Logo,
} as Meta;

const BackgroundInStoriesToSeeImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 100px 50px;
`;

export const Default: Story = (args) => (
  <BackgroundInStoriesToSeeImage>
    <Logo {...args} />
  </BackgroundInStoriesToSeeImage>
);
