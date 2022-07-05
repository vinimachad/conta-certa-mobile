import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type ButtonProps = {
    isActive: Boolean
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    border-radius: 12px;
    background-color: ${p => p.theme.colors.primary};
    opacity: ${p => p.isActive ? 1 : 0.4} ;
    align-items: center;
    justify-content: center;
    height: ${RFValue(56)}px;;
    width: 100%;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    color: white;
    font-family: ${p => p.theme.fonts.medium};
`