export const fetchRandomCrypto = () => {
  const randomPrice = (Math.random() * (1000 - 50) + 50).toFixed(2);

  const randomMarketCap = (
    Math.random() * (10000000000 - 1000000000) +
    1000000000
  ).toFixed(0);

  return {
    id: "mariverse",
    name: "MariVerse",
    current_price: parseFloat(randomPrice),
    market_cap: parseInt(randomMarketCap, 10),
  };
};

export default fetchRandomCrypto;
