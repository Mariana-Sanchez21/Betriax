import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import fetchRandomCrypto from "../API/randomAPI";

interface Crypto {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
}

const fetchCoins = async (): Promise<Crypto[]> => {
  const apiUrl = "https://api.coingecko.com/api/v3/coins/markets";
  try {
    const response = await axios.get(apiUrl, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 50,
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    return [];
  }
};

const useCoins = () => {
  const { data: realCryptos = [], isLoading } = useQuery<Crypto[]>({
    queryKey: ["coins"],
    queryFn: fetchCoins,
    refetchInterval: 60000,
  });

  const cryptos = [fetchRandomCrypto(), ...realCryptos];
  console.log("cryptos", cryptos);

  return { cryptos, loading: isLoading };
};

export default useCoins;
