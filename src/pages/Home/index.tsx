import {
  Advantages,
  CoffeesSection,
  HomeContainer,
  HomeInfo,
  HomeSection,
} from './styles';

import coffees from '../../coffees';

import homeImage from '../../assets/Info.png';

import { IoCart } from 'react-icons/io5';
import { MdCoffee } from 'react-icons/md';
import { BsFillClockFill } from 'react-icons/bs';
import { RiInboxArchiveFill } from 'react-icons/ri';
import { CoffeeCard } from '../../components/CoffeeCard';

export function Home() {
  return (
    <HomeContainer>
      <HomeSection>
        <HomeInfo>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <Advantages>
            <div>
              <IoCart color='#fff' />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <RiInboxArchiveFill color='#fff' />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <BsFillClockFill color='#fff' />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <MdCoffee color='#fff' />
              <span>O café chega fresquinho até você</span>
            </div>
          </Advantages>
        </HomeInfo>
        <img src={homeImage} />
      </HomeSection>
      <CoffeesSection>
        <h3>Nossos cafés</h3>
        <div>
          {coffees.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.id} />
          ))}
        </div>
      </CoffeesSection>
    </HomeContainer>
  );
}
