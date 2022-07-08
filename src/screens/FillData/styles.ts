import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAwareScrollView).attrs({
    contentContainerStyle: {
        alignItems: 'center'
    }
})`
    flex: 1;
    background-color: ${p => p.theme.colors.background};
    padding: 0 ${RFValue(16)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${p => p.theme.colors.title};
    font-family: ${p => p.theme.fonts.medium};
    max-width: ${RFValue(189)}px;
    text-align: center;
    margin-bottom: ${RFValue(24)}px;
`

export const ContentContainer = styled.View`
    width: 100%;
    margin-top: ${RFValue(24)}px;
    align-items: center;
    margin-bottom: ${RFValue(40)}px;
`
