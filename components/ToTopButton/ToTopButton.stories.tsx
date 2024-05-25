import { Meta, StoryObj } from "@storybook/react";
import ToTopButton from "./ToTopButton";

const meta: Meta<typeof ToTopButton> = {
  component: ToTopButton,
};

export default meta;
export const Default: StoryObj<typeof ToTopButton> = {
  args: {},
};
