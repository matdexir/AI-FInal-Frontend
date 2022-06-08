import { HStack, Switch, Text, useColorMode } from "native-base";
import React from "react";

const ThemeToggle = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
      ></Switch>
      <Text>light</Text>
    </HStack>
  );
};

export default ThemeToggle;