import React, { useState, useEffect } from 'react';
import { Cards, Charts, CountryPicker } from "./components"
import styles from "./App.module.css";
import { fetchData } from "./components/api"

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
      <Cards data={data} />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
