import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Paper,
} from "@mui/material";
import useCoins from "../../hooks/useCoins";

const CoinTable = () => {
  const { cryptos, loading } = useCoins();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "12px",
        overflow: "hidden",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <Table>
        <TableHead style={{ backgroundColor: "#205781", color: "#FFFFFF" }}>
          <TableRow>
            <TableCell style={{ width: "200px", padding: "12px" }}>
              Name
            </TableCell>
            <TableCell style={{ width: "150px", padding: "12px" }}>
              Price (USD)
            </TableCell>
            <TableCell style={{ width: "200px", padding: "12px" }}>
              Market Cap (USD)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptos.map((crypto) => (
            <TableRow
              key={crypto.id}
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: "scale(1)",
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 12px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <TableCell style={{ padding: "28px" }}>{crypto.name}</TableCell>
              <TableCell style={{ padding: "16px" }}>
                ${crypto.current_price.toLocaleString()}
              </TableCell>
              <TableCell style={{ padding: "16px" }}>
                ${crypto.market_cap.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinTable;
