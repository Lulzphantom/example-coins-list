import { FileRoute } from '@tanstack/react-router';
import { coinByIdQueryOptions } from '../api/coinsQueryOptions';
import { motion } from "framer-motion"

export const Route = new FileRoute('/$coinId').createRoute({
  loader: ({ context: { queryClient }, params: { coinId } }) =>
    queryClient.ensureQueryData(coinByIdQueryOptions(coinId)),
  component: CoinDetailComponent,
})

function CoinDetailComponent() {
  const coin = Route.useLoaderData();

  return (
    <motion.main
      key={coin.code}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut' }}
      className='text-black'>
      <section className="flex justify-between">
        <div className='flex gap-4 items-center'>
          <img src={coin.png64} className="h-8" />
          <div className="flex flex-col text-left">
            <span
              style={{ color: coin.color }}
              className="font-bold text-lg">
              {coin.name}
            </span>
            <span className="text-sm">
              USD {Math.floor(coin.rate)}
            </span>
          </div>
        </div>
        <div className='flex flex-col text-right'>
          <span className='text-sm'>
            <strong>Volumen: </strong>{coin.volume}
          </span>
          <span className='text-sm'>
            <strong>Cap:</strong> {coin.cap}
          </span>
        </div>
      </section>
      <hr className='my-2' />
      <section className='flex flex-col gap-2'>
        {
          Object.keys(coin.links)
            .filter((val) => coin.links[val])
            .map((val, i) => (
              <div key={i}>
                <span className='capitalize font-bold'>
                  {val}:
                </span>
                {' '}
                <a href={coin.links[val]} target='__blank' >
                  {coin.links[val]}
                </a>
              </div>
            ))
        }
      </section>
    </ motion.main>
  );
}