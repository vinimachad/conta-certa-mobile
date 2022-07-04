import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    height: ${RFValue(56)}px;
    width: ${RFValue(56)}px;
    background-color: ${p => p.theme.colors.primary};
    border-radius: 16px;
    align-items: center;
    justify-content: center;
`;
