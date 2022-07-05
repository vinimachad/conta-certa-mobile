
import { Container, Description, Divider } from './styles';
import BarCode from '../../assets/bar-code.svg'

interface StartScanButtonProps {
}

export function StartScanButton({ }: StartScanButtonProps) {
  return (
    <Container>
      <BarCode />
      <Divider />
      <Description children={'Estamos prontos para iniciarmos uma nova compra'} />
    </Container>
  );
}
