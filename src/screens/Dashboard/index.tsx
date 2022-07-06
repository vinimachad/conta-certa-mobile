import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { EmptyView } from '../../components/Placeholders/EmptyView';
import { RootStackParamList } from '../../routes';
import { Container } from './styles';
import Emoji from '../../assets/confused-emoji.svg'
import { ViewModel } from './viewModel';
import { MyShopping } from './MyShopping';
import { Shopping } from '../../database/models/Shopping';

interface DashboardProps {
}

type DashboardScreenProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

export function Dashboard({ }: DashboardProps) {

  const navigation = useNavigation<DashboardScreenProp>()
  const viewModel = new ViewModel()
  const [shoppingList, setShoppingList] = useState<Shopping[]>([])

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header hasShopping={shoppingList.length != 0} onScanButton={didStartScan} />
    })
  }, [shoppingList])

  useEffect(() => {
    getShopping()
  }, [])

  async function getShopping() {
    let list = await viewModel.shoppingList()
    setShoppingList(list)
  }

  function didStartScan() {
    navigation.navigate('Scanner')
  }

  return (
    <Container>
      {
        shoppingList.length != 0
          ?
          (<MyShopping />)
          :
          (
            <EmptyView
              image={<Emoji />}
              title='Sem compras ainda'
              description='Comece a organizar todas suas compras de supermercado em um só lugar'
            />
          )
      }

    </Container>
  );
}
