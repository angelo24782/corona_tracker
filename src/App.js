import React, { useState, useEffect } from 'react';
import { Cards, Charts, CountryPicker } from "./components"
import styles from "./App.module.css";
import { fetchData } from "./components/api";

import image from './image/image.png';

function App() {

  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCountryChange = async (country) => {

    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  );
}

export default App;
