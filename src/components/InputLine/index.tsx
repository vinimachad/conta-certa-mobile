import { Container, Divider, Input } from "./styles";

interface InputLineProps {
    placeholder?: string
    onChangeText: (text: string) => void
}

export function InputLine({ placeholder, onChangeText }: InputLineProps) {
    return (
        <Container>
            <Input placeholder={placeholder} onChangeText={onChangeText} />
            <Divider />
        </Container>
    )
}