import styles from './Header.module.css';
import logo from '../assets/logo.svg';

export function Header() {
  return(
    <header className={styles.header}>
      <img src={logo} alt="Logo do ToDo List - Foguete decolando com no nome ToDo List ao lado direito" />
    </header>
  )
}