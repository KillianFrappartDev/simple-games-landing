import { IoMdMail } from 'react-icons/io';

import './styles.css';

const Subscribe = (props) => {
  return (
    <div className="subscribe-container">
      {/* <h2 className="subscribe-title">Stay tuned</h2> */}
      <div className="subscribe-box">
          <input className="subscribe-input" placeholder="Write your email here...." />
          <div className="subscribe-send" onClick={props.onSub}><IoMdMail className="subscribe-icon" size="2rem"/></div>
      </div>
    </div>
  );
};

export default Subscribe;
