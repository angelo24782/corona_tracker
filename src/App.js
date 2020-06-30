import React, { useState, useEffect } from 'react';
import { Cards, Charts, CountryPicker } from "./components"
import styles from "./App.module.css";
import { fetchData } from "./components/api";

import image from './image/image.png';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const data = await fetchData();

        setData(data)

        console.log(data);
      } catch (e) {
        console.error(e);
      }
    })();

  }, [])

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
