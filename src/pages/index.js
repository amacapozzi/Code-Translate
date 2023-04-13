import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Box, Center } from "@chakra-ui/react";
import Selector from "@/Components/Selector";
import BoxContent from "@/Components/Box-content";
import ToggleColorMode from "@/Components/ToggleColorMode";

export default function Home() {
  return (
    <main>
      <ToggleColorMode/>
      <div className="flex flex-wrap items-center justify-center">
        <Box
          className="flex w-[90vh] m-[10vh] h-[20vh] rounded-lg items-center p-5"
          bgColor={"blackAlpha.300"}
        >
          <h1 className="text-xl">
            Welcome to{" "}
            <b className="underline decoration-sky-500">
              Code languaje Converter!
            </b>
            🎉
            <p className="text-base">
              👇 Paste your code snippet below and the AI will convert it to the
              selected language!
              <br />
              👉 Sign up to get some credits. ⚠️ Please use this AI tool with
              caution.
              <br />
              🔁 Conversions are not always 100% accurate and need to be
              supervised by a human!
            </p>
          </h1>
          <p className="float-right pl-10 text-7xl">🤖</p>
        </Box>
      </div>

      <Selector />
      <BoxContent />
    </main>
  );
}
