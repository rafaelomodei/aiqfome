import { ChakraProvider } from '@chakra-ui/react';
import { Footer } from './Components/Organisms/Footer';
import { Header } from './Components/Organisms/Header';
import { Item } from './Pages/Item';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Item />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
