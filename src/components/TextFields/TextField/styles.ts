import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(56)}px;
    border-bottom-width: ${RFValue(1)}px;
    border-color: ${p => p.theme.colors.stroke};
    flex-direction: row;
    align-items: center;
    padding-left: ${RFValue(16)}px;
`;

export const Input = styled.TextInput`
    width: 100%;
    border-left-width: 1px;
    border-color: ${p => p.theme.colors.stroke};
    height: ${RFValue(56)}px;
    padding: 0 ${RFValue(16)}px;
    margin-left: ${RFValue(16)}px;
    color: ${p => p.theme.colors.text_input};
    font-size: ${RFValue(15)}px;
    font-family: ${p => p.theme.fonts.light};
`