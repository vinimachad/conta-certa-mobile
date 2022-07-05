import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext, useEffect, useLayoutEffect } from 'react';
import { Header } from '../../components/Header';
import { UserSessionContext } from '../../hooks/UserSessionContext';
import { RootStackParamList } from '../../routes';
import { Container } from './styles';


interface DashboardProps {
}

type Data = {
  isLoggedIn: boolean
  name: string
}

type DashboardScreenProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

export function Dashboard({ }: DashboardProps) {

  const { userSession } = useContext(UserSessionContext)
  const navigation = useNavigation<DashboardScreenProp>()

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header />
    })
  }, [])

  return (
    <Container>

    </Container>
  );
}
