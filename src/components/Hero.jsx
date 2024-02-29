import './Hero.css';
import ImageList from '/images/photo-grid.png';

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={ImageList} alt="List of experiences" className="hero-photo" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
