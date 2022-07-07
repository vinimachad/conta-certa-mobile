import { BottomScanner, Container, HeaderScanner, InsertCodeButton, SafeArea, ScannerContentContainer, TextButton, Title } from './styles';
import { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { ViewModel } from './viewModel';
import { Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'
import { CartButton } from '../../components/CartButton';

interface ScannerProps {
}

type ScannerScreenProp = StackNavigationProp<RootStackParamList, 'Scanner'>;

export function Scanner({ }: ScannerProps) {

  const navigation = useNavigation<ScannerScreenProp>()
  const [hasPermission, setHasPermission] = useState(null);
  const [isScanned, setScanned] = useState(false);
  const [orientationChanged, setOrientationChanged] = useState(false)

  const viewModel = new ViewModel()

  useEffect(() => {
    viewModel.changeScreenOrientation(isChanged => {
      setOrientationChanged(isChanged)
    })
  }, [])

  function didComeBackFillData() {
    navigation.replace('Dashboard')
  }

  viewModel.requestCameraPermission().then((status) => {
    setHasPermission(status === 'granted');
  })

  viewModel.hasPermissionToShowCamera(hasPermission, () => {
    return <Text children="Não tem permissão" />
  })

  function didScanned(data: any) {
    setScanned(true)
  }

  return (
    <Container>
      <SafeArea />
      <ScannerContentContainer >
        <HeaderScanner >
          <BackButton onTapButton={didComeBackFillData} color={'#FFFF'} />
          <Title children={'Escaneie o código de barras do produto'} />
          <CartButton onTapButton={() => { }} />
        </HeaderScanner>
        {
          orientationChanged ?
            (<BarCodeScanner
              style={{ flex: 2 }}
              onBarCodeScanned={isScanned ? undefined : data => didScanned(data)}
            />) : (<></>)
        }
        <BottomScanner>
          <View style={{ height: 64, width: '100%', backgroundColor: 'black' }} />
          <InsertCodeButton>
            <TextButton children={'Insira o código do produto'} />
          </InsertCodeButton>
        </BottomScanner>
      </ScannerContentContainer>
    </Container>
  );
}
