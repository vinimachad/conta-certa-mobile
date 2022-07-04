import { Container, Header, Cover, Logo, Description } from './styles';
import girlCover from '../../assets/girl.png'
import { ChevronButton } from '../../components/SquareButton';

interface HomeProps {
}

export function Home({ }: HomeProps) {
  return (
    <Container>
      <Header >
        <Cover source={girlCover} />
      </Header>
      <Logo />
      <Description children={'Organize suas compras em um só lugar '} />
      <ChevronButton chevron='chevron-right' color='white' size={36} />
    </Container>
  );
}
