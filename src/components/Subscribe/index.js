import React, { useState } from 'react';
import axios from "axios";
import { IoMdMail } from 'react-icons/io';

import './styles.css';

const Subscribe = (props) => {
const [value, setValue] = useState("");

  const subHandler = () => {
    try {
      axios.post("https://simple-games-studio.herokuapp.com/api/emails/", { value });
    } catch (error) {
      console.log("An error occured");
    }
    props.onSub();
  }

  return (
    <div className="subscribe-container">
      <div className="subscribe-box">
          <input className="subscribe-input" placeholder="Write your email here...." value={value} onChange={(e) => setValue(e.target.value)} />
          <div className="subscribe-send" onClick={subHandler}><IoMdMail className="subscribe-icon" size="2rem"/></div>
      </div>
    </div>
  );
};

export default Subscribe;
