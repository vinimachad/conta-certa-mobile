import { TextField } from '../../components/TextFields/TextField';
import { Container } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface FillDataProps {
}

export function FillData({ }: FillDataProps) {
  return (
    <Container>
      <TextField
        placehoder='Nome do mercado'
        icon={<MaterialCommunityIcons name="map-marker-radius" size={RFValue(24)} color={theme.colors.primary} />} />
    </Container>
  );
}
