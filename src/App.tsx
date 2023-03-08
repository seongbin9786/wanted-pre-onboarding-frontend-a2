import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './chakra-theme';
import { TravelListPage } from './pages/TravelListPage';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <TravelListPage />
    </ChakraProvider>
  );
}
