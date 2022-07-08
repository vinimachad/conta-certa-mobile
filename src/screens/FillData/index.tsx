import { Container, ContentContainer, Title } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ViewModel, IViewModel } from './viewModel';
import { TextField } from '../../components/TextFields/TextField';
import { Helper } from '../../helper';

type ScreenProps = StackNavigationProp<RootStackParamList, 'FillData'>
type ShoppingData = {
  groceryName: string
  walletValue: string
}

export function FillData() {

  const viewModel: IViewModel = new ViewModel()
  const navigation = useNavigation<ScreenProps>()
  const [shoppingData, setShoppingData] = useState<ShoppingData>({ groceryName: '', walletValue: '' })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton style={{ paddingLeft: RFValue(16) }} color={'#B1B0B8'} size={RFValue(20)} onTapButton={() => navigation.pop()} />,
      title: '',
      headerShadowVisible: false
    })
  })

  useEffect(() => {
  }, [])

  function registerForm() {
    navigation.push('Scanner')
  }

  function formatWalletValueToCurrency(value: number): string {
    return Helper.INSTANCE.numberFormatToCurrency(value)
  }

  // function removeCurrency(walletValue: string) {
  //   let valueWithoutRealSign = walletValue.replace('R$', '')
  //   let formattedValue = Number(valueWithoutRealSign.replace(',', '.'))
  //   console.log(formattedValue)
  //   setShoppingData({ ...shoppingData, walletValue: formattedValue })
  //   console.log(shoppingData)
  // }

  return (
    <Container>
      <ContentContainer>
        <Title children={'Preencha os dados da compra'} />
        <TextField
          placeholder={'Nome do mercado'}
          icon={<MaterialCommunityIcons name='map-marker-radius' size={RFValue(24)} color={theme.colors.primary} />}
          onChangeText={groceryName => setShoppingData({ ...shoppingData, groceryName })}
        />
        <TextField
          mask={'currency'}
          placeholder={'Quanto pretende gastar'}
          icon={<MaterialCommunityIcons name='wallet' size={RFValue(24)} color={theme.colors.primary} />}
          inputMaskChange={walletValue => setShoppingData({ ...shoppingData, walletValue })}
          value={shoppingData.walletValue != undefined ? shoppingData.walletValue : ''}
          keyboardType={'decimal-pad'}
        />
      </ContentContainer>
      <Button title='Iniciar'
        onTapButton={registerForm}
        // isActive={shoppingData.groceryName.length != 0 && shoppingData.walletValue != undefined}
        isActive={true}
      />
    </Container>
  );
}
