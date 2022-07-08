import { Container, ContentContainer, Title } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { useLayoutEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextFields/TextField';
import { lockAsync, OrientationLock } from 'expo-screen-orientation';

type ScreenProps = StackNavigationProp<RootStackParamList, 'FillData'>
type ShoppingData = {
  groceryName: string
  walletValue: string
}

export function FillData() {

  const navigation = useNavigation<ScreenProps>()
  const [shoppingData, setShoppingData] = useState<ShoppingData>({ groceryName: '', walletValue: '' })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton style={{ paddingLeft: RFValue(16) }} color={'#B1B0B8'} size={RFValue(20)} onTapButton={() => navigation.pop()} />,
      title: '',
      headerShadowVisible: false
    })
  })

  useFocusEffect(() => {
    didChangeScreenOrientation()
  })

  async function didChangeScreenOrientation() {
    await lockAsync(OrientationLock.PORTRAIT_UP)
  }

  function registerForm() {
    navigation.push('Scanner')
  }

  return (
    <Container>
      <ContentContainer>
        <Title children={'Preencha os dados da compra'} />
        <TextField
          mask='none'
          placeholder={'Nome do mercado'}
          icon={<MaterialCommunityIcons name='map-marker-radius' size={RFValue(24)} color={theme.colors.primary} />}
          onChangeText={groceryName => setShoppingData({ ...shoppingData, groceryName })}
        />
        <TextField
          mask={'currency'}
          placeholder={'Quanto pretende gastar'}
          icon={<MaterialCommunityIcons name='wallet' size={RFValue(24)} color={theme.colors.primary} />}
          inputMaskChange={walletValue => setShoppingData({ ...shoppingData, walletValue })
          }
          value={shoppingData.walletValue != '' ? `R$ ${shoppingData.walletValue}` : ''}
          keyboardType={'decimal-pad'}
        />
      </ContentContainer>
      <Button title='Iniciar'
        onTapButton={registerForm}
        isActive={shoppingData.groceryName != '' && shoppingData.walletValue != ''}
      />
    </Container>
  );
}
