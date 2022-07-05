import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${p => p.theme.colors.primary};
    height: ${RFValue(184)}px;
    width: auto;
    padding: 0 ${RFValue(16)}px;
`;

export const UserInfoContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFValue(30)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${p => p.theme.fonts.medium};
    color: ${p => p.theme.colors.background};
`

export const Description = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${p => p.theme.fonts.light};
    color: ${p => p.theme.colors.background};
    margin-bottom: ${RFValue(30)}px;
`

export const Avatar = styled.Image`

`

