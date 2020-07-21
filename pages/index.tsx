import React, { CSSProperties } from 'react';
import Head from 'next/head';

const styles: Record<string, CSSProperties> = {
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(170deg, #eee 0%, #fff 100%)',
  },
  logo: {
    color: '#333',
    fontFamily: 'Lato',
    fontSize: '3rem',
    fontWeight: 300,
  },
  icon: {
    marginRight: '0.5rem',
  },
};

const Homepage: React.FC = () => (
  <>
    <Head>
      <link
        href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-VhBcF/php0Z/P5ZxlxaEx1GwqTQVIBu4G4giRWxTKOCjTxsPFETUDdVL5B6vYvOt"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div style={styles.wrapper}>
      <span style={styles.logo}>
        <i className="fal fa-portal-exit" style={styles.icon} />
        bunjee
      </span>
    </div>
  </>
);

export default Homepage;