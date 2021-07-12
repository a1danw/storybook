import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { theme, Box, ChakraProvider } from "@chakra-ui/react";

// addDecorator((story) => (
//   <ChakraProvider resetCSS="true">
//     <Box m="4">{story()}</Box>
//   </ChakraProvider>
// ));

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Box m="4">
        <Story />
      </Box>
    </ChakraProvider>
  ),
];
