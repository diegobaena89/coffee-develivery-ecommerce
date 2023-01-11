import styles from './Header.module.css';
import Logo from '../../assets/Logo.png';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt='Logo' />
      <div>
        <button className={styles.button}>
          <MapPin weight='fill' color='#8047F8' size={24} />{' '}
          <span>Porto Alegre, Rs</span>
        </button>
        <button className={styles.buyButton}>
          <ShoppingCart color='#C47F17' size={24} weight='fill' />
        </button>
      </div>
    </div>
  );
}
