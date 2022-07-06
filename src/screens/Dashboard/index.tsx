import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext, useLayoutEffect } from 'react';
import { Header } from '../../components/Header';
import { EmptyView } from '../../components/Placeholders/EmptyView';
import { UserSessionContext } from '../../hooks/UserSessionContext';
import { RootStackParamList } from '../../routes';
import { Container } from './styles';
import Emoji from '../../assets/confused-emoji.svg'

interface DashboardProps {
}

type DashboardScreenProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

export function Dashboard({ }: DashboardProps) {

  const navigation = useNavigation<DashboardScreenProp>()

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header />
    })
  }, [])

  return (
    <Container>
      <EmptyView image={<Emoji />} title='Sem compras ainda' description='Comece a organizar todas suas compras de supermercado em um só lugar' />
    </Container>
  );
}
