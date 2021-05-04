import Link from 'next/link';

import styles from '../styles/Nav.module.css';

const Nav = (): JSX.Element => {
  return (
    <nav data-testid="menu" className={styles.nav}>
      <ul>
        <li data-testid="nav-item">
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
