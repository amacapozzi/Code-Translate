import { Select, Center } from "@chakra-ui/react";

export default function Selector() {
  return (
    <main>
        <div className="flex gap-2 items-center justify-center">
            <Select width={800}></Select>
            <Select width={800}></Select>
        </div>
    </main>
  );
}
