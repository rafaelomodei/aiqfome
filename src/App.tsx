import { ChakraProvider } from '@chakra-ui/react';
import { Footer } from './Components/Organisms/Footer';
import { Header } from './Components/Organisms/Header';
import { Item } from './Pages/Item';
import { extendThemeChakraUI } from './Utils/Theme';
import { CartProvider } from './Providers/Cart';

function App() {
  return (
    <ChakraProvider theme={extendThemeChakraUI}>
      <CartProvider>
        <Header />
        <Item />
        <Footer />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
