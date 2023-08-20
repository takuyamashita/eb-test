import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = React.useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/test',
      );
      setData(result.data.message);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{process.env.REACT_APP_ENV_SAMPLE}</h1>
        <h2>{data}</h2>
      </header>
    </div>
  );
}

export default App;
