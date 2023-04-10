
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import {
  Box,
  Center
} from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <Center>
      <Box display={'flex'}  width={'90vh'} alignItems={'center'} padding={'5'} justifyContent={'left'} height={'20vh'} borderRadius={'lg'} bgColor={'blackAlpha.300'} margin={'10vh'}>
        <h1 className='text-xl'>
          Welcome to <b className='underline decoration-sky-500'>Code languaje Converter!</b>🎉
          <p className='text-base'>👇 Paste your code snippet below and the AI will convert it to the selected language!<br/>
          👉 Sign up to get some credits. ⚠️ Please use this AI tool with caution.<br/>
          🔁 Conversions are not always 100% accurate and need to be supervised by a human!</p>
        </h1>
        <p className='float-right pl-10 text-7xl'>
        🤖
        </p>
      </Box>
      </Center>

    </main>
  )
}
