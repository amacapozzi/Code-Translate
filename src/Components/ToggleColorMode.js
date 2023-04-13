import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function ToggleColorMode() {

 const { colorMode, toggleColorMode } = useColorMode();


  return (
    <main>
      <div className="fixed top-0 right-40 p-5">
        <Button onClick={() => toggleColorMode()}>
        {colorMode === "dark" ? (
        <SunIcon color="orange.200" />
      ) : (
        <MoonIcon color="blue.700" />
      )}
        </Button >
      </div>

    </main>
  );
}
