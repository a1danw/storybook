import React from "react";
import { Primary } from "../../stories/ButtonTwo.stories";
import { Large } from "../Input/Input.stories";

export default {
  title: "Form/Subscription",
};

// writing a story within a story
// however we cant take full advantage of args mechanism this way
export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
);
