import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Lexend_400Regular,
  Lexend_600SemiBold,
  Lexend_700Bold,
  Lexend_300Light
} from '@expo-google-fonts/lexend'
import theme from './src/global/styles/theme';
import { StatusBar } from 'expo-status-bar';
import { NavigationFlow } from './src/routes';
import { UserSessionProvider } from './src/hooks/UserSessionContext';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonstLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_300Light
  })

  if (!fonstLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <UserSessionProvider>
        <StatusBar style='light' />
        <NavigationFlow />
      </UserSessionProvider>
    </ThemeProvider>
  );
}