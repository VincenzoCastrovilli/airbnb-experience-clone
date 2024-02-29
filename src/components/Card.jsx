import './Card.css';

export default function Card({
  img,
  rating,
  price,
  location,
  reviewCount,
  title,
}) {
  return (
    <div className="card">
      <img src={`/images/${img}`} className="card-image" />
      <div className="card-stats">
        <img src="/images/star.png" className="card-star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
