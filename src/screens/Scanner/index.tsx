import { Container } from './styles';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useContext, useEffect, useLayoutEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

interface ScannerProps {
}

type ScannerScreenProp = StackNavigationProp<RootStackParamList, 'Scanner'>;

export function Scanner({ }: ScannerProps) {

  const navigation = useNavigation<ScannerScreenProp>()

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<Button title='Back' onPress={() => navigation.replace('Dashboard')} />)
    })
  })

  useEffect(() => {
    changeScreenOrientation()
  }, [])

  return (
    <Container>

    </Container>
  );
}
