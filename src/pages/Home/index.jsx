import React, { useContext } from 'react';

import Context from '../../context/Context';
import styles from './home.module.css';

import Loading from '../../components/Loading';
import Filter from './components/Filter';
import Table from './components/Table';

function Home() {
  const { isLoading } = useContext(Context);

  if (isLoading) return <Loading />;

  return (
    <div className={ styles.container }>
      <header>
        <h1>STAR WARS</h1>
      </header>

      <Filter />

      <Table />
    </div>
  );
}

export default Home;
