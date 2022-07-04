import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
`

export const Input = styled.TextInput`
    width: 100%;
    height: ${RFValue(56)}px;  
    font-size: ${RFValue(17)}px ;
    text-align: center;
`;

export const Divider = styled.View`
    width: 100%;
    height: ${RFValue(1)}px;;
    background-color: ${p => p.theme.colors.thirdary};
`