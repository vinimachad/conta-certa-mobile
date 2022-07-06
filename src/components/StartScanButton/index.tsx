
import { Container, Description, Divider } from './styles';
import BarCode from '../../assets/bar-code.svg'

interface StartScanButtonProps {
  onScanButton: () => void
  hasShopping: boolean
}

export function StartScanButton({ onScanButton, hasShopping }: StartScanButtonProps) {

  return (
    <Container onTouchStart={onScanButton}>
      <BarCode />
      <Divider />
      <Description children={`Estamos prontos para iniciarmos uma ${hasShopping ? 'nova' : ''} compra`} />
    </Container>
  );
}
