import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

interface ChevronButtonProps {
  chevron: 'chevron-right' | 'chevron-left'
  size: number
  color: string
}

export function ChevronButton({ color, chevron, size }: ChevronButtonProps) {
  return (
    <Container>
      <MaterialIcons name={chevron} size={size} color={color} />
    </Container>
  );
}
