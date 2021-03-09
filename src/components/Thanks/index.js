import { BsCheckCircle } from 'react-icons/bs';

import './styles.css';

const Thanks = () => {
  return (
    <div className="thanks-container">
      <div className="thanks-box">
      <BsCheckCircle className="subscribe-icon" size="2rem"/>
        <p className="thanks-text">Thank you!</p>
      </div>
    </div>
  );
};

export default Thanks;
