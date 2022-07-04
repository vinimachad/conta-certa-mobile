import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

interface ChevronButtonProps {
  chevron: 'chevron-right' | 'chevron-left'
  size: number
  color: string
  onTapButton: () => void
}

export function ChevronButton({ color, chevron, size, onTapButton: didTapButton }: ChevronButtonProps) {
  return (
    <Container onPressIn={didTapButton}>
      <MaterialIcons name={chevron} size={size} color={color} />
    </Container>
  );
}
