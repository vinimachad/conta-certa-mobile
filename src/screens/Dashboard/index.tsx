import { useContext, useEffect } from 'react';
import { UserSessionContext } from '../../hooks/UserSessionContext';
import { Container } from './styles';


interface DashboardProps {
}

type Data = {
  isLoggedIn: boolean
  name: string
}

export function Dashboard({ }: DashboardProps) {
  const { userSession } = useContext(UserSessionContext)


  return (
    <Container>
    </Container>
  );
}
