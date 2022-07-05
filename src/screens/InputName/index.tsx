import { SafeAreaView } from 'react-native';
import { Container, InputContainer, ScrollView, Title } from './styles';
import { InputLine } from '../../components/InputLine';
import { Button } from '../../components/Button';
import Emoji from '../../assets/happy-emoji.svg'
import { useContext, useState } from 'react';
import { ViewModel } from './viewModel';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { UserSessionContext } from '../../hooks/UserSessionContext';

interface InputNameProps {
}

type InputNameScreenProps = StackNavigationProp<RootStackParamList, 'InputName'>

export function InputName({ }: InputNameProps) {

  const [confirmIsActive, setConfirmIsActive] = useState(false)
  const [name, setName] = useState('')
  const { didSetUserSession, userSession } = useContext(UserSessionContext)
  const navigator = useNavigation<InputNameScreenProps>()
  const viewModel = new ViewModel()

  function didConfirmName() {
    viewModel.setUserSession(name, () => {
      didSetUserSession({ ...userSession, name: name })
      navigator.navigate('Done')
    })
  }

  function buttonActive(isActive: boolean) {
    if (confirmIsActive != isActive) {
      setConfirmIsActive(isActive)
    }
  }

  function didChangeName(text: string) {
    setName(text)
    viewModel.nameFieldValidation(text, buttonActive)
  }

  return (
    <ScrollView >
      <Container>
        <SafeAreaView />
        <Emoji />
        <Title children={'Como podemos chamar você?'} />
        <InputContainer>
          <InputLine placeholder='Digite seu nome' onChangeText={didChangeName} />
          <Button title='Confirmar' isActive={confirmIsActive} onTapButton={didConfirmName} />
        </InputContainer>
      </Container>
    </ScrollView>
  );
}
