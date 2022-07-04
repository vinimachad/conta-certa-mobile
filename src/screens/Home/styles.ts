import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import LogoImage from '../../assets/logo.svg'

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
    align-items: center;
`;

export const Header = styled.View`
    background-color: ${props => props.theme.colors.primary};
    height: ${RFValue(316)}px;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Cover = styled.Image`
    margin-bottom: ${RFValue(-180)}px;
`

export const Logo = styled(LogoImage)`
    margin-top: ${RFValue(100)}px;
    margin-bottom: ${RFValue(18)}px;
`

export const Description = styled.Text`
    font-size: ${RFValue(32)}px;
    color: ${props => props.theme.colors.title};
    font-family: ${props => props.theme.fonts.bold};
    text-align: center;
    max-width: ${RFValue(268)}px;
    margin-bottom: ${RFValue(48)}px;
`