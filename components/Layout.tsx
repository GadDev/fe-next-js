// import React from 'react'
import { Container } from '@material-ui/core';
import Nav from './Nav';

import styles from '../styles/Layout.module.css';
import React from 'react';

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Nav />
      <Container maxWidth="sm">
        <main className={styles.main}>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
