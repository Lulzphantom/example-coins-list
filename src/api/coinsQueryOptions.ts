import { fetchCoinById, fetchCoins } from './coins'
import { queryOptions, keepPreviousData } from '@tanstack/react-query'

export const coinsQueryOptions = (page: number) => queryOptions({
  queryKey: ['coins', page],
  queryFn: () => fetchCoins(page),
  placeholderData: keepPreviousData,
  refetchOnWindowFocus: false,
});

export const coinByIdQueryOptions = (coinId: string) => queryOptions({
  queryKey: ['coins', { coinId }],
  queryFn: () => fetchCoinById(coinId),
});

