import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

// we dont get access/use of the controls tab until we use args
// export const Success = () => (
//   <Button variant="solid" color="blue">
//     Sucess
//   </Button>
// );
// export const Danger = () => <Button color="red">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  color: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "red",
  children: "Danger",
};
