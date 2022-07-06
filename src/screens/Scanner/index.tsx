import { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface ScannerProps {
  children: ReactNode;
}

export function Scanner({ children }: ScannerProps) {
  return (
    <Container>
      <Text>Scanner</Text>
      {children}
    </Container>
  );
}
