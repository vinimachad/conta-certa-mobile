import { SafeAreaView, Text, View } from 'react-native';
import { Container, InputContainer, ScrollView, Title } from './styles';
import { InputLine } from '../../components/InputLine';
import { Button } from '../../components/Button';
import Emoji from '../../assets/happy-emoji.svg'
import { useState } from 'react';
import { ViewModel } from './viewModel';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';


interface InputNameProps {
}

type InputNameScreenProps = StackNavigationProp<RootStackParamList, 'InputName'>

export function InputName({ }: InputNameProps) {

  const [confirmIsActive, setConfirmIsActive] = useState(false)
  const navigator = useNavigation<InputNameScreenProps>()
  const viewModel = new ViewModel()

  function didConfirmName() {
    navigator.navigate('Done')
  }

  function buttonActive(isActive: boolean) {
    if (confirmIsActive != isActive) {
      setConfirmIsActive(isActive)
    }
  }

  return (
    <ScrollView >
      <Container>
        <SafeAreaView />
        <Emoji />
        <Title children={'Como podemos chamar você?'} />
        <InputContainer>
          <InputLine onChangeText={text => viewModel.nameFieldValidation(text, buttonActive)} />
          <Button title='Confirmar' isActive={confirmIsActive} onTapButton={didConfirmName} />
        </InputContainer>
      </Container>
    </ScrollView>
  );
}
