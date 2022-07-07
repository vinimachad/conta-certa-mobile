import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    flex: 1;
`;

export const SafeArea = styled.View`
    width: ${RFValue(64)}px;
    height: 100%;
    background-color: ${p => p.theme.colors.primary};
`

export const ScannerContentContainer = styled.View`
    flex: 1;
    flex-direction: column;
`

export const HeaderScanner = styled.View`
    flex-direction: row;
    width: 100%;
    height: ${RFValue(119)}px;
    background-color: black;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${RFValue(16)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${p => p.theme.fonts.light};
    color: ${p => p.theme.colors.background};
`

export const BottomScanner = styled.View`

`

export const InsertCodeButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: ${RFValue(16)}px;
`

export const TextButton = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${p => p.theme.fonts.light};
    color: ${p => p.theme.colors.text};
`