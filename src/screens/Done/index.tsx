import { Container, Description, Title } from './styles';
import Emoji from '../../assets/super-happy-emoji.svg'
import { Button } from '../../components/Button';
import { UserSessionContext } from '../../hooks/UserSessionContext';
import { useContext } from 'react';

interface DoneProps {
}

export function Done({ }: DoneProps) {

  const { didSetUserSession, userSession } = useContext(UserSessionContext)

  function didTapStart() {
    didSetUserSession({ ...userSession, isLoggedIn: true })
  }

  return (
    <Container>
      <Emoji />
      <Title children={'Prontinho'} />
      <Description children={'Agora vamos começar a organizar suas compras com muito cuidado.'} />
      <Button isActive={true} title='Começar' onTapButton={didTapStart} />
    </Container>
  );
}
