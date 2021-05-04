import Link from 'next/link';

import styles from '../styles/Nav.module.css';

const Nav = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
