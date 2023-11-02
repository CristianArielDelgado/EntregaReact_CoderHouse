import { CartWidget } from '../CartWidget/CartWidget';
import styles from './navBar.module.css';


export const NavBar = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.h_container}>
                    <h1 className={styles.titulo}>Hermides Beer</h1>
                    <nav className={styles.containerNav}>
                        <ul>
                            <li><a href="#">Cervezas</a></li>
                            <li><a href="#">Vinos</a></li>
                            <li><a href="#">Champagnes</a></li>
                        </ul>
                    </nav>

                    <div className={styles.containerCart}>
                        <CartWidget />
                        <p className={styles.cartItemCount}>0</p>
                    </div>
            </div>
        </header>
    </>
  )
}
