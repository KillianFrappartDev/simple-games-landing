import './styles.css';

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h2 className="subscribe-title">Stay tuned</h2>
      <div className="subscribe-box">
          <input className="subscribe-input" placeholder="Write your email here...." />
          <button className="subscribe-send">OK</button>
      </div>
    </div>
  );
};

export default Subscribe;
