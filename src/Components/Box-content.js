import { Textarea } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Selector from "./Selector";
import { useState } from "react";

export default function BoxContent({result}) {
  const [code, setCode] = useState();
  const handleGetCode = (e) => {
    setCode(e.target.value);
  }


  return (
    <main>
      {code && <Selector code={code}/>}
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <Box
            bgColor={"blackAlpha.300"}
            className="flex w-[70vh] m-[4vh] h-[40vh] rounded-lg items-center p-5"
          >
            <Textarea
              onChange={handleGetCode}
              height={"full"}
              className="resize-none"
            ></Textarea>
          </Box>
        </div>
        <div className="flex flex-col gap-2">
          <Box
            bgColor={"blackAlpha.300"}
            className="flex w-[70vh] m-[4vh] h-[40vh] rounded-lg items-center p-5"
          >
            <Textarea height={"full"} className="resize-none" value={result}>
            </Textarea>
          </Box>
        </div>
      </div>
    </main>
  );
}
