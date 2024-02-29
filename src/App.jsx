import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './data';
import data from './data';
import Card from './components/Card';

export default function App() {
  const cardList = data.map((elem) => {
    return (
      <Card
        key={elem.id}
        img={elem.coverImg}
        rating={elem.stats.rating}
        reviewCount={elem.stats.reviewCount}
        location={elem.location}
        title={elem.title}
        price={elem.price}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="card-list">{cardList}</div>
    </div>
  );
}
