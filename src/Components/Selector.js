import { Toast } from "@chakra-ui/react";
import { Button, Select, useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import BoxContent from "./Box-content";

export default function Selector(props) {
  const toast = useToast();
  const translateInput = useRef(null);
  const translateToInput = useRef(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [code, setCode] = useState('');

  useEffect(() => {
    const translateValue = localStorage.getItem("translate");
    const transllateToValue = localStorage.getItem("translate_to");

    if (translateValue) {
      translateInput.current.value = translateValue;
    }

    if (transllateToValue) {
      translateToInput.current.value = localStorage.getItem("translate_to");
    }
  }, []);

  const handleGetCode = (e) => {
    setCode(e.target.value);
  };
  
  const handleConverter = (e) => {
    const TRANSLATE = translateInput.current.value;
    const TRANSLATE_TO = translateToInput.current.value;

    if (TRANSLATE === TRANSLATE_TO) {
      return toast({
        title: "Error",
        description: "Enter a different language than the other",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }

    const OPTIONS = {
      method: "POST",
      headers: {
        accept: "application/json",
      },
    };

    const handleApiConverter = async (e) => {
      if(code === undefined || '' || null) {
        return toast({
          title: "Error",
          description: "Please enter a code for translate!",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
      setLoading(true)
      try {
        const res = await window.fetch(
          `/api/tasks/openia?code=${code}&languaje=${TRANSLATE}&tolanguaje=${TRANSLATE_TO}`,
          {
            ...OPTIONS,
          }
        );

        const data = await res.json();
        switch (res.status) {
          case 400:
            toast({
              title: "Error",
              description: data.error,
              status: "error",
              duration: 4000,
              isClosable: true,
            });
            break;
          case 404:
            toast({
              title: "Error",
              description: data.error,
              status: "error",
              duration: 4000,
              isClosable: true,
            });
            break;
          
            case 500: 
            toast({
              title: "Error",
              description: data.error,
              status: "error",
              duration: 4000,
              isClosable: true,
            });
            break;
          case 200:
            setResult(data.translate)
            toast({
              title: "Success",
              description: 'Successfully converted code',
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            break;
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleApiConverter();
  };

  
  const handleValue = (e) => {
    e.preventDefault();

    const TRANSLATE = translateInput.current.value;
    const TRANSLATE_TO = translateToInput.current.value;

    if (TRANSLATE && TRANSLATE !== null) {
      localStorage.setItem("translate", TRANSLATE);
    }

    if (TRANSLATE_TO && TRANSLATE_TO !== null) {
      localStorage.setItem("translate_to", TRANSLATE_TO);
    }
  };


  return (
    <main>
      <div className="flex gap-2 items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-base underline decoration-sky-500 font-sans">Input</p>
          <Select ref={translateInput} onChange={handleValue} width={800}>
            <option value="javascript">JavaScript</option>
            <option value="ruby">Ruby</option>
            <option value="rust">Rust</option>
            <option value="c">C#</option>
            <option value="go">Go</option>
            <option value="nextjs">NextJS</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="python">Python</option>
          </Select>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-base underline decoration-sky-500 font-sans">Output</p>
          <Select onChange={handleValue} ref={translateToInput} width={800}>
            <option>JavaScript</option>
            <option value="ruby">Ruby</option>
            <option value="rust">Rust</option>
            <option value="c">C#</option>
            <option value="go">Go</option>
            <option value="nextjs">NextJS</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="python">Python</option>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <Button onClick={handleConverter} className="uppercase m-[2vh]">
          {loading ? 'Loading...': 'convert code!'}
        </Button>
      </div>
      <BoxContent onChange={handleGetCode} result={result}
      />
    </main>
  );
}
