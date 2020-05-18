type Balance = number;
type Type = string;

type Wallet = {
  name: string;
  amount: Balance;
  symbol: Type;
};

let bitcoinWallet: Wallet = {
  name: "Bitcoin",
  amount: 5.88800007,
  symbol: "BTC",
};
