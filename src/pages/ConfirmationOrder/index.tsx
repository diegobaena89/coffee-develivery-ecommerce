import { ConfirmationContainer, AddresInfos, ImageContainer } from './styles';

import ConfirmationImage from '../../assets/orderConfirmation.png';

export function ConfirmationOrder() {
  return (
    <ConfirmationContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguadar que logo o café chegará até você</p>

      <div>
        <AddresInfos>
          <div>
            <p>Entrega em Rua João Daniel Martinelli, 102</p>
            <span>Farrapos - Porto Alegre, RS</span>
          </div>

          <div>
            <p>Previsão de entrega</p>
            <span>20 min - 30 min</span>
          </div>

          <div>
            <p>Pagamento na entrega</p>
            <span>Cartão de crédito</span>
          </div>
        </AddresInfos>

        <ImageContainer>
          <img src={ConfirmationImage} alt='' />
        </ImageContainer>
      </div>
    </ConfirmationContainer>
  );
}
