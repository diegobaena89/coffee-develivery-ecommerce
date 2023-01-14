import styles from './Header.module.css';
import Logo from '../../assets/Logo.png';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <img onClick={() => navigate('/')} src={Logo} alt='Logo' />
      <div>
        <button className={styles.button}>
          <MapPin weight='fill' color='#8047F8' size={24} />{' '}
          <span>Porto Alegre, Rs</span>
        </button>
        <button onClick={() => navigate('/order')} className={styles.buyButton}>
          <ShoppingCart color='#C47F17' size={24} weight='fill' />
        </button>
      </div>
    </div>
  );
}
