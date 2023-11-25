import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </>
  )
}

export default App
