import { Container, Header, Cover, Logo, Description } from './styles';
import girlCover from '../../assets/girl.png'
import { ChevronButton } from '../../components/SquareButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes';
import { StackNavigationProp } from '@react-navigation/stack';

interface HomeProps {
}

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home({ }: HomeProps) {
  let navigator = useNavigation<HomeScreenProp>()

  function didStartFlow() {
    navigator.navigate('InputName')
  }

  return (
    <Container>
      <Header >
        <Cover source={girlCover} />
      </Header>
      <Logo />
      <Description children={'Organize suas compras em um só lugar '} />
      <ChevronButton chevron='chevron-right' color='white' size={36} onTapButton={didStartFlow} />
    </Container>
  );
}
