import { CartWidget } from '../CartWidget/CartWidget';
import styles from '../modules/navBar.module.css';


export const NavBar = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.header__container}>
                    <h1 className={styles.header_titulo}>Hermides Beer</h1>
                    <nav className={styles.header__containerNav}>
                        <ul>
                            <li><a href="#">Cervezas</a></li>
                            <li><a href="#">Vinos</a></li>
                            <li><a href="#">Champagnes</a></li>
                        </ul>
                    </nav>

                    <div className={styles.header__containerCart}>
                        <CartWidget />
                        <p className={styles.cartItemCount}>0</p>
                    </div>
            </div>
        </header>
    </>
  )
}
