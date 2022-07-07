import { MaterialIcons } from '@expo/vector-icons';
import { Container, Circle, NumberOfItems } from './styles';

interface CartButtonProps {
  onTapButton: () => void
}

export function CartButton({ onTapButton }: CartButtonProps) {
  return (
    <Container onPress={onTapButton}>
      <MaterialIcons name="shopping-cart" size={32} color="white" />
      <Circle>
        <NumberOfItems children={'10'} />
      </Circle>
    </Container>
  );
}
