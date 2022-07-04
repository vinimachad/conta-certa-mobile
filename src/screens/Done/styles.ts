import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 ${RFValue(16)}px;;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${p => p.theme.fonts.medium};
    color: ${p => p.theme.colors.title};
    text-align: center;
    margin-bottom: ${RFValue(20)}px;
    margin-top: ${RFValue(40)}px;
`

export const Description = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: ${p => p.theme.fonts.regular};
    color: ${p => p.theme.colors.title};
    text-align: center;
    margin-bottom: ${RFValue(40)}px;
    line-height: ${RFValue(25)}px;;
`
