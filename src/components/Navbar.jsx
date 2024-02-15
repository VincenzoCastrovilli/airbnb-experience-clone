import './Navbar.css';
import Logo from '../assets/images/airbnb-logo.png';

export default function Header() {
  return (
    <div className="navbar">
      <img src={Logo} alt="AirBnb Logo" />
    </div>
  );
}
