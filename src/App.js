import Subscribe from "./components/Subscribe/index";
import logo from './assets/sg-white.png';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="filter">
        <img className="logo" src={logo} />
        <Subscribe />
      </div>
    </div>
  );
};

export default App;
