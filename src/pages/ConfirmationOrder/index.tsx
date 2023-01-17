import {
  ConfirmationContainer,
  DataContainer,
  DataConfirmation,
} from './styles';

import ConfirmationImage from '../../assets/orderConfirmation.png';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

export function ConfirmationOrder() {
  return (
    <>
      <ConfirmationContainer>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguadar que logo o café chegará até você</p>
        </div>
      </ConfirmationContainer>

      <DataContainer>
        <DataConfirmation>
          <div>
            <MapPin size={22} weight='fill' color='#fff' />
            <div>
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div>
            <Timer size={22} weight='fill' color='#fff' />
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </div>

          <div>
            <CurrencyDollar size={22} weight='fill' color='#fff' />
            <div>
              <p>Pagamento na entrega</p>
              <p>Cartão de Crédito</p>
            </div>
          </div>
        </DataConfirmation>
        <img src={ConfirmationImage} alt='' />
      </DataContainer>
    </>
  );
}
