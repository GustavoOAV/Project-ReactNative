import React, { useState } from 'react';
import Home from './src/pages/Home';
import Inicial from './src/pages/Inicial';

export default function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      {showHome ? <Home /> : <Inicial onButtonPress={() => setShowHome(true)} />}
    </>
  );
}
