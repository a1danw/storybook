import React from "react";
import ButtonTwo from "../components/ButtonTwo";
import Center from "../components/Center/Center";

export default {
  title: "Form/ButtonTwo",
  component: ButtonTwo,
  // it is possible to set args at the component level which will be applied to all the
  // component stories
  decorators: [(story) => <Center>{story()}</Center>],
  args: {
    children: "Button",
  },
};

// first approach to writing stories without args
// decorators are components that wrap a story
export const Primary = () => (
  // <Center>
  <ButtonTwo variant="primary">Primary</ButtonTwo>
  // </Center>
);
export const Secondary = () => (
  // <Center>
  <ButtonTwo variant="secondary">Secondary</ButtonTwo>
  // </Center>
);
export const Success = () => (
  // <Center>
  <ButtonTwo variant="success">Success</ButtonTwo>
  // </Center>
);
export const Danger = () => (
  // <Center>
  <ButtonTwo variant="danger">Danger</ButtonTwo>
  // </Center>
);

// second approach to writing stories with args - Define a master template
// args adds more power to storybook - mechanism starts off with us creating a template out of our component
const Template = (args) => <ButtonTwo {...args} />;

// now we have to export one or more stories using this template
// we can compare this to the first Primary story above
// with args we are creating stories which represent different states of the component
// the states can be represented by the args object
// this approach also reduces code you write - it might seem the opposite for this example but
// this is a better approach especially for complex components that have a lot more jsx
// because defining the args object is much better than duplicating the jsx
export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  // args at story level will overwrite args from component level
  // children: "Primary Args",
};

// Template.bind makes a copy of the function
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  // can extend the props from other stories
  ...PrimaryA.args,
  // children: "Long Primary Args",
};

// we can compare this to the second Secondary story above
export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  // children: "Secondary Args",
};
