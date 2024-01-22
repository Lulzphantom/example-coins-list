import axios from "axios";
import { CoinType } from "../@types/coins";

const API_BASE_URL = 'https://api.livecoinwatch.com/';
const API_KEY = '';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY
  }
})

export const fetchCoins = async (page: number = 1) => {

  const coinsData = {
    currency: 'USD',
    sort: 'rank',
    order: 'ascending',
    offset: (page - 1) * 5,
    limit: 5,
    meta: true
  }

  const coins = await api
    .post<CoinType[]>('coins/list', coinsData)
    .then((r) => r.data)
    .catch((err) => {
      throw err
    });

  return coins
}

export const fetchCoinById = async (coindId: string) => {

  const coinData = {
    code: coindId,
    currency: 'USD',
    meta: true
  }

  const coin = await api
    .post<CoinType>('coins/single', coinData)
    .then((r) => r.data)
    .catch((err) => {
      throw err
    });

  return coin
}