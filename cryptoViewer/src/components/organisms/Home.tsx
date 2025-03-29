import CoinTable from "../molecules/CoinTable";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundImage: "url('./assets/market2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        color: "#333",
      }}
    >
      <Typography variant="h4" gutterBottom align="center" color="#EFEFEF">
        Cryptocurrency Prices
      </Typography>

      <CoinTable />
    </div>
  );
};

export default Home;
