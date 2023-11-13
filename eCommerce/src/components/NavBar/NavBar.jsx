import { CartWidget } from '../CartWidget/CartWidget';
import styles from './navBar.module.css';


export const NavBar = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.h_container}>
                <div className={styles.tituloContainer}>
                    <img className={styles.logo} src="../../public/logoJPG.jpeg" alt="" />
                    <h1 className={styles.titulo}>Beer & Co</h1>
                </div>

                <div className={styles.containerCart}>
                    <CartWidget />
                    <p className={styles.cartItemCount}>0</p>
                </div>

                <nav className={styles.containerNav}>
                    <ul>
                    <li><a href="#">Home</a></li>
                        <li><a href="#">Cervezas</a></li>
                        <li><a href="#">Vinos</a></li>
                         <li><a href="#">Champagnes</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}
