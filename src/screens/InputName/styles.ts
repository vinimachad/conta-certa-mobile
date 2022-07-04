import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ScrollView = styled(KeyboardAwareScrollView).attrs({
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})``;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 ${RFValue(50)}px;;
`;

export const InputContainer = styled.View`
    width: ${RFValue(200)}px;
    height: ${RFValue(150)}px;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${p => p.theme.fonts.medium};
    color: ${p => p.theme.colors.title};
    text-align: center;
    margin-bottom: ${RFValue(40)}px;
    margin-top: ${RFValue(16)}px;
`