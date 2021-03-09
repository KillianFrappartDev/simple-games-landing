import React, { useState } from 'react';

import Subscribe from "./components/Subscribe/index";
import Thanks from "./components/Thanks/index";
import logo from './assets/sg-white.png';
import './App.css';

const App = () => {
  const [isSub, setIsSub] = useState(false);

  return (
    <div className="container">
      <div className="filter">
        <img className="logo" src={logo} alt="Logo" />
        {isSub ? <Thanks /> :<Subscribe onSub={() => setIsSub(true)} />}
      </div>
    </div>
  );
};

export default App;
