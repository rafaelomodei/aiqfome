import { ChakraProvider } from '@chakra-ui/react';
import { Footer } from './Components/Organisms/Footer';
import { Header } from './Components/Organisms/Header';
import { Item } from './Pages/Item';
import { extendThemeChakraUI } from './utils/theme';

function App() {
  return (
    <ChakraProvider theme={extendThemeChakraUI}>
      <Header />
      <Item />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
