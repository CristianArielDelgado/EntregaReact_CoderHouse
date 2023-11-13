import { CartWidget } from '../CartWidget/CartWidget';
import styles from './navBar.module.css';
import { Link } from "react-router-dom" 

export const NavBar = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.h_container}>
                <div className={styles.containerCart}>
                    <Link to={"/"}>
                        <img className={styles.logo} src="../../public/logoJPG.jpeg" alt="" />
                    </Link>
                    <h1 className={styles.titulo}>Beer & Co</h1>
                </div>

                <div className={styles.containerCart}>
                    <CartWidget />
                    <p className={styles.cartItemCount}>0</p>
                </div>

                <nav className={styles.containerNav}>
                    <ul>
                        <Link to={"/"}><li><a>Home</a></li></Link>
                        <Link to={"/category/cervezas"}><li><a>Cervezas</a></li></Link>
                        <Link to={"/category/vinos"}><li><a>Vinos</a></li></Link>
                        <Link to={"/category/champagnes"}><li><a>Champagnes</a></li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}
