import { ReactElement } from 'react';
import { TextInputProps } from 'react-native';
import { maskCurrency } from '../../../helper/utils/masks';
import { Container, Input } from './styles';

export interface TextFieldProps extends TextInputProps {
  icon: ReactElement
  inputMaskChange?: (value: string) => void
  mask?: "currency" | 'none'
}

export function TextField({ icon, mask, placeholder, inputMaskChange, keyboardType, value }: TextFieldProps) {

  function handleChange(text: string) {
    if (mask === "currency") {
      const value = maskCurrency(text);
      inputMaskChange(value);
    }
  }

  return (
    <Container>
      {icon}
      <Input
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={handleChange}
        value={value}
      />
    </Container>
  );
}
