import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
`;

export const Circle = styled.View`
    width: ${RFValue(16)}px;
    height: ${RFValue(16)}px;
    border-radius: ${RFValue(16)}px;
    background-color: ${p => p.theme.colors.primary};
    position: absolute;
    right: -2px;
    top: -3px;
    align-items: center;
    justify-content: center;
`

export const NumberOfItems = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${p => p.theme.fonts.bold};
    color: ${p => p.theme.colors.background};
`
