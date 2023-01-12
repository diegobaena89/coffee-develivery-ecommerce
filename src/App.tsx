import { useState } from 'react';
import { Header } from './components/Header';
import { Info } from './components/Info';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Info />
    </>
  );
}

export default App;
