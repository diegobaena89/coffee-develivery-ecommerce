import styles from './Info.module.css';
import InfoImg from '../../assets/Info.png';
import { Alarm, Coffee, Package, ShoppingCart } from 'phosphor-react';

export function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.infoLeft}>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>

        <div className={styles.infoGrid}>
          <div>
            <button style={{ backgroundColor: '#C47F17' }}>
              <ShoppingCart color='#FFF' size={18} weight='fill' />{' '}
            </button>
            <span>Compra simples e segura</span>
          </div>

          <div>
            <button style={{ backgroundColor: '#574F4D' }}>
              <Package color='#FFF' size={20} weight='fill' />{' '}
            </button>
            <span>Embalagem mantém o café intacto</span>
          </div>

          <div>
            <button style={{ backgroundColor: '#DBAC2C' }}>
              <Alarm color='#FFF' size={20} weight='fill' />{' '}
            </button>
            <span>Entrega rápida e rastreada</span>
          </div>

          <div>
            <button style={{ backgroundColor: '#8047F8' }}>
              <Coffee color='#FFF' size={20} weight='fill' />{' '}
            </button>
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </div>

      <div className={styles.imgRight}>
        <img src={InfoImg} alt='Info Image' />
      </div>
    </div>
  );
}
