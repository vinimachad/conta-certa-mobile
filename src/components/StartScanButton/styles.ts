import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(80)}px;
    background-color: ${p => p.theme.colors.secondary};
    border-radius: ${RFValue(5)}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 ${RFValue(20)}px;
`;

export const Divider = styled.View`
    height: ${RFValue(32)}px;
    width: ${RFValue(1)}px;
    background-color: ${p => p.theme.colors.text_input};
`

export const Description = styled.Text`
    font-family: ${p => p.theme.fonts.light};
    font-size: ${RFValue(13)}px;
    line-height: ${RFValue(20)}px;
    color: ${p => p.theme.colors.background};
    max-width: ${RFValue(187)}px;
`
