import styles from "./Navbar.module.css";
import logo from "../../images/logo.png";

function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <a className={styles.navbarLogo} href="/">
            <span>
              <img className={styles.logo} src={logo} alt="" />
            </span>
            Busy Buy
          </a>
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                My Orders
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Cart
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
