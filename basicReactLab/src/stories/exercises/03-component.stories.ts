import type { Meta, StoryObj } from '@storybook/react';
import CourseModulesWithProps from "../../components/exercises/03_props";

const meta: Meta<typeof CourseModulesWithProps> = {
  title: 'Exercises/03 - component with props',
  component: CourseModulesWithProps,
};

export default meta;

type Story = StoryObj<typeof meta>;
const heading = "H.Dip in Computer Science 2023";
const modules = [
  { name: 'Mobile Dev', noLectures: 2, noPracticals: 2 },
  { name: 'Full Stack 2', noLectures: 3, noPracticals: 2 },
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args:{
    modules:modules,
    heading: heading,
  }
};
