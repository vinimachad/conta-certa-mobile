
import { Container, Title } from './styles';

interface ButtonProps {
  onTapButton: () => void
  isActive: boolean
  title: string
}


export function Button({ onTapButton, isActive, title }: ButtonProps) {
  return (
    <Container disabled={!isActive} isActive={isActive} onPressIn={onTapButton}>
      <Title children={title} />
    </Container>
  );
}
