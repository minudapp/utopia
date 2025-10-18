import { useQuery } from "@tanstack/react-query";

async function getBNBPrice() {
  const response = await fetch(
    "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT",
  );
  const data = await response.json();
  return parseFloat(data.price);
}

export function useBNBPrice() {
  return useQuery({
    queryKey: ["bnb-price"],
    queryFn: getBNBPrice,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
