import { Container } from './styles';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleProp, ViewStyle } from 'react-native';

interface BackButtonProps {
  onTapButton: () => void
  color: '#B1B0B8' | '#FFFF'
  size?: number
  style?: StyleProp<ViewStyle>
}

export function BackButton({ onTapButton, color, size, style }: BackButtonProps) {
  return (
    <Container style={style} onPress={onTapButton}>
      <Feather name="arrow-left" size={size ? size : RFValue(24)} color={color} />
    </Container>
  );
}
