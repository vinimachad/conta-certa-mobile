import ArrowBack from '../../assets/arrow-back.svg'
import { Container } from './styles';

interface BackButtonProps {
  onTapButton: () => void
}

export function BackButton({ onTapButton }: BackButtonProps) {
  return (
    <Container onPress={onTapButton}>
      <ArrowBack />
    </Container>
  );
}
