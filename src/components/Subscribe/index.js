import { IoMdMail } from 'react-icons/io';

import './styles.css';

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h2 className="subscribe-title">Stay tuned</h2>
      <div className="subscribe-box">
          <input className="subscribe-input" placeholder="Write your email here...." />
          <button className="subscribe-send"><IoMdMail color="#E0E0E0" size="2.5rem"/></button>
      </div>
    </div>
  );
};

export default Subscribe;
