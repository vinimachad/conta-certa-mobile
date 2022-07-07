import ArrowBack from '../../assets/arrow-back.svg'
import { Container } from './styles';
import { Feather } from '@expo/vector-icons';

interface BackButtonProps {
  onTapButton: () => void
  color: '#B1B0B8' | '#FFFF'
}

export function BackButton({ onTapButton, color }: BackButtonProps) {
  return (
    <Container onPress={onTapButton}>
      <Feather name="arrow-left" size={24} color={color} />
    </Container>
  );
}
