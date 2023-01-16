import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useNavigate } from 'react-router';
import {
  AddressContainer,
  AddressFrame,
  ChoosePayment,
  FinishOrder,
  FormContainer,
  Forms,
  OrderContainer,
  PaymentFrame,
  PaymentMethod,
  ViewOrder,
} from './styles';

export function Order() {
  const navigate = useNavigate();
  function handleConfirmOrder() {
    navigate('/confirm');
  }
  return (
    <OrderContainer>
      <FormContainer>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <AddressFrame>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AddressFrame>
          <Forms>
            <input type='text' placeholder='CEP' />
            <input type='text' placeholder='Rua' />
            <input type='number' name='Numero' placeholder='Número' />
            <input type='text' placeholder='Complemento' />
            <input type='text' placeholder='Bairro' />
            <input type='text' placeholder='Cidade' />
            <input type='text' placeholder='UF' />
          </Forms>
        </AddressContainer>

        <PaymentMethod>
          <PaymentFrame>
            <CurrencyDollar size={22} weight='fill' />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentFrame>
          <ChoosePayment>
            <button>
              <CreditCard size={16} />
              Cartão de Crédito
            </button>
            <button>
              <Bank size={16} /> Cartão de Débito
            </button>
            <button>
              <Money size={16} /> Dinheiro
            </button>
          </ChoosePayment>
        </PaymentMethod>
      </FormContainer>
      <FinishOrder>
        <h2>Cafés selecionados</h2>
        <ViewOrder>
          Order
          <button onClick={handleConfirmOrder}>Confirmar pedido</button>
        </ViewOrder>
      </FinishOrder>
    </OrderContainer>
  );
}
