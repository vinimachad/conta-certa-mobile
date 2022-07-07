import { ReactElement } from 'react';
import { Container, Input } from './styles';

interface TextFieldProps {
  icon: ReactElement
  placehoder: string
}

export function TextField({ icon, placehoder }: TextFieldProps) {
  return (
    <Container>
      {icon}
      <Input placeholder={placehoder} />
    </Container>
  );
}
