import { Container, Description, Title } from './styles';
import Emoji from '../../assets/super-happy-emoji.svg'
import { Button } from '../../components/Button';

interface DoneProps {
}

export function Done({ }: DoneProps) {
  return (
    <Container>
      <Emoji />
      <Title children={'Prontinho'} />
      <Description children={'Agora vamos começar a organizar suas compras com muito cuidado.'} />
      <Button isActive={true} title='Começar' onTapButton={() => { }} />
    </Container>
  );
}
