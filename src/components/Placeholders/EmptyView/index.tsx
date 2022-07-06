
import { ReactElement } from 'react';
import { Container, Title, Description } from './styles';

interface EmptyViewProps {
  title: string
  image?: ReactElement
  description: string
}

export function EmptyView({ title, image, description }: EmptyViewProps) {
  return (
    <Container>
      {image}
      <Title children={title} />
      <Description children={description} />
    </Container>
  );
}
