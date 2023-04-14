import { Textarea } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Selector from "./Selector";
import { useState, useRef } from "react";

export default function BoxContent(props, {result}) {
  const [code, setCode] = useState();
  const tValue = useRef(null);
  const handleGetCode = (e) => {
    e.preventDefault();
    setCode(e.target.value);
  }

  console.log(result)

  return (
    <main>
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
            {...props}
            />
            {code && <Selector code={code}/>}
          </Box>
        </div>
        <div className="flex flex-col gap-2">
          <Box
            bgColor={"blackAlpha.300"}
            className="flex w-[70vh] m-[4vh] h-[40vh] rounded-lg items-center p-5"
          >
            <Textarea height={"full"} ref={tValue} className="resize-none" value={result}/>
          </Box>
        </div>
      </div>
    </main>
  );
}
