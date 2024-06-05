import type { Meta, StoryObj } from '@storybook/react';
import CourseModulesCollections from "../../components/exercises/04_iteration";



const meta: Meta<typeof CourseModulesCollections> = {
  title: 'Exercises/04 - iteration',
  component: CourseModulesCollections,
};

export default meta;

type Story = StoryObj<typeof meta>;
const heading = "H.Dip in Computer Science 2023";
const modules = [
  { name: 'Mobile Dev', noLectures: 2, noPracticals: 2 },
  { name: 'Full Stack 2', noLectures: 3, noPracticals: 2 },
  { name: 'Hacking for Dummies', noLectures: 2, noPracticals: 4 },
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args:{
    modules:modules,
    heading: heading,
  }
};
