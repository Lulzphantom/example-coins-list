export type CoinType = {
  code: string;
  name: string;
  symbol: string;
  rank: number;
  color: string;
  png64: string;
  volume: number;
  cap: number;
  totalSupply: number;
  rate: number;
  links: CoinLinks;
}

type CoinLinks = {
  [key:string]: string;
}