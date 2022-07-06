
import { SafeAreaView, View } from 'react-native';
import theme from '../../global/styles/theme';
import { Avatar, Container, Description, Title, UserInfoContainer } from './styles';
import avatarImg from '../../assets/avatar.png'
import { StartScanButton } from '../StartScanButton';
import { useContext } from 'react';
import { UserSessionContext } from '../../hooks/UserSessionContext';

interface HeaderProps {
}

export function Header({ }: HeaderProps) {

  const { userSession } = useContext(UserSessionContext)

  return (
    <Container>
      <SafeAreaView style={{ backgroundColor: theme.colors.primary }} />
      <UserInfoContainer>
        <View>
          <Title children={`Olá, ${userSession.name}`} />
          <Description children={'Se organize no valor das compras'} />
        </View>
        <Avatar source={avatarImg} />
      </UserInfoContainer>
      <StartScanButton />
    </Container>
  );
}
