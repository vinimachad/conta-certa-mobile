import { Control, Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '../TextField';
import { Container } from './styles';

interface FormTextFieldProps extends TextFieldProps {
  control: Control
  name: string
}

export function FormTextField({ control, name, ...rest }: FormTextFieldProps) {
  return (
    <Container>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            icon={rest.icon}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
    </Container>
  );
}
