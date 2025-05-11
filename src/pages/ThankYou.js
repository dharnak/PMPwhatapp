import { Link } from 'react-router-dom';
import thankyouImage from '../assets/thankyou.jpg';
import './ThankYou.css';

function ThankYou() {
  return (
    <div className="thankyou-container">
      <div className="thankyou-box">
        <h1 className="thankyou-title">Thank You for Registering!</h1>
        <img src={thankyouImage} alt="Thank You" className="thankyou-image" />
        <Link to="/join" className="thankyou-link">
          👉 Join our WhatsApp group
        </Link>
      </div>
      
    </div>
  );
}

export default ThankYou;
