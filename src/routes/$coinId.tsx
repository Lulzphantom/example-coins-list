import { FileRoute, useRouter } from '@tanstack/react-router';
import { coinByIdQueryOptions } from '../api/coinsQueryOptions';
import { motion } from "framer-motion"
import Button from '@/components/Button';
import { LinkIcon, iconMapping } from '@/utils/iconMapping';
import getTitleColor from '@/utils/getTitleColor';

export const Route = new FileRoute('/$coinId').createRoute({
  loader: ({ context: { queryClient }, params: { coinId } }) =>
    queryClient.ensureQueryData(coinByIdQueryOptions(coinId)),
  component: CoinDetailComponent,
})

function CoinDetailComponent() {
  const coin = Route.useLoaderData();
  const router = useRouter();
  const onBack = () => router.history.back();

  const titleLuminace = getTitleColor(coin.color);

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut' }}
        className='text-black p-8 bg-neutral-50 rounded-md border-neutral-300 border-[1px]'>
        <section className="flex justify-between flex-wrap">
          <div className='flex gap-4 items-center'>
            <img src={coin.png64} className="h-8" />
            <div className="flex flex-col text-left">
              <span
                style={{ color: coin.color, filter: titleLuminace > 200 ? 'brightness(60%)' : undefined }}
                className="font-bold text-lg">
                {coin.name}
              </span>
              <span className="text-sm">
                $ {coin.rate.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD
              </span>
            </div>
          </div>
          <div className='flex flex-col text-left xs:text-right mt-4 xs:mt-0'>
            <span className='text-sm'>
              <strong>Rango: </strong>{coin.rank}
            </span>
            <span className='text-sm'>
              <strong>Volumen: </strong>{coin.volume}
            </span>
            <span className='text-sm'>
              <strong>Market Cap:</strong> {coin.cap}
            </span>
          </div>
        </section>
        <hr className='my-2' />
        <section className='flex flex-wrap gap-2 mt-6'>
          {
            Object.keys(coin.links)
              .filter((val) => coin.links[val])
              .map((val, i) => (
                <Button
                  className='bg-slate-700 text-sm'
                  onClick={() => window.open(coin.links[val], '_blank')}
                  key={i}>
                  <div className='flex gap-2 items-center'>
                    {iconMapping[val as LinkIcon]}
                    <span className='capitalize'>
                      {val}
                    </span>
                  </div>
                </Button>
              ))
          }
        </section>
      </ motion.main>
      < motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', delay: 0.3 }}
        className='mt-4 flex justify-stretch'
      >
        <Button className='w-full' onClick={onBack}>
          Volver
        </Button>
      </motion.div>
    </>
  );
}