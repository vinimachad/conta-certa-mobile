import { Container } from './styles';
import { Feather } from '@expo/vector-icons';

interface BackButtonProps {
  onTapButton: () => void
  color: '#B1B0B8' | '#FFFF'
}

export function BackButton({ onTapButton, color }: BackButtonProps) {
  return (
    <Container onPress={onTapButton}>
      <Feather name="arrow-left" size={32} color={color} />
    </Container>
  );
}
