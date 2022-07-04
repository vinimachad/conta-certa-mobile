import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Lexend_400Regular,
  Lexend_600SemiBold,
  Lexend_700Bold
} from '@expo-google-fonts/lexend'
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { NavigationFlow } from './src/routes';

export default function App() {

  const [fonstLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_600SemiBold,
    Lexend_700Bold
  })

  if (!fonstLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <NavigationFlow />
    </ThemeProvider>
  );
}