import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Circle, NumberOfItems } from './styles';

interface CartButtonProps {
  onTapButton: () => void
}

export function CartButton({ onTapButton }: CartButtonProps) {
  return (
    <Container onPress={onTapButton}>
      <MaterialIcons name="shopping-cart" size={RFValue(24)} color="white" />
      <Circle>
        <NumberOfItems children={'10'} />
      </Circle>
    </Container>
  );
}
