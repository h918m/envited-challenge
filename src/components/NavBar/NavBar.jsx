import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'
import RoundedButton from '../RoundedButton/RoundedButton';
import logoImage from '../../static/images/logo.png';

function NavBar() {
  return (
    <>
      <div className={styles.navBar}>
        <Link to="/">
          <img className={styles.logo} src={logoImage} alt='Envited Logo' />
        </Link>
        <RoundedButton className={styles.loginButton} text="Log In" />
      </div>
    </>
  );
}

export default NavBar;