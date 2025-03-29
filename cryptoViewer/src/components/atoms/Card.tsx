type CardProps = {
  name: string;
  price: number;
  marketCap: number;
};

const Card = ({ name, price, marketCap }: CardProps) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price.toLocaleString()}</p>
      <p>Market Cap: ${marketCap.toLocaleString()}</p>
    </div>
  );
};

export default Card;
