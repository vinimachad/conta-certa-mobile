import { Container } from './styles';
import { useEffect, useLayoutEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { ViewModel } from './viewModel';

interface ScannerProps {
}

type ScannerScreenProp = StackNavigationProp<RootStackParamList, 'Scanner'>;

export function Scanner({ }: ScannerProps) {

  const navigation = useNavigation<ScannerScreenProp>()
  const viewModel = new ViewModel()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onTapButton={() => { didComeBackFillData }} />
    })
  })

  useEffect(() => {
    viewModel.changeScreenOrientation()
  }, [])

  function didComeBackFillData() {

  }

  return (
    <Container>

    </Container>
  );
}
