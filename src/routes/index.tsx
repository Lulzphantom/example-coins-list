import { FileRoute } from '@tanstack/react-router';
import { coinsQueryOptions } from '../api/coinsQueryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from "framer-motion"
import usePagination from '@hooks/usePagination';
import CoinCard from '@components/CoinCard';
import LoadingOverlay from '@components/LoadingOverlay';
import Button from '@/components/Button';

export const Route = new FileRoute('/').createRoute({
  validateSearch: (search: Record<string, unknown>): { p: number } => {
    return {
      p: Number(search?.p ?? 1),
    }
  },
  loaderDeps: ({ search: { p } }) => ({ p }),
  loader: ({ context: { queryClient }, deps }) =>
    queryClient.ensureQueryData(coinsQueryOptions(deps.p ?? 1)),
  component: Home,
})

function Home() {
  const { p } = Route.useSearch();

  const {
    page,
    handleNextPage,
    handlePrevPage,
  } = usePagination(p);

  const {
    data: coins,
    isFetching,
  } = useSuspenseQuery(coinsQueryOptions(page.cPage));

  return (
    <main>
      <section className='flex flex-col gap-2 relative'>
        {
          coins?.map((coin) => (
            <motion.article
              key={coin.code}
              initial={{ opacity: 0, x: page.cPage >= page.pPage ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: page.cPage >= page.pPage ? -100 : 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <CoinCard coin={coin} />
            </motion.article>
          ))
        }
        <AnimatePresence>
          {isFetching && <LoadingOverlay />}
        </AnimatePresence>
      </section>
      <section className='flex justify-between items-center mt-4 text-black text-sm'>
        <Button
          disabled={page.cPage === 1}
          onClick={handlePrevPage}>
          {'< Anterior'}
        </Button>
        <span>
          <strong>Página: </strong>{page.cPage}
        </span>
        <Button
          onClick={handleNextPage}>
          {'Siguiente >'}
        </Button>
      </section>
    </main>
  )
}
