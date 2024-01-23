import Footer from '@/components/Footer';
import { QueryClient } from '@tanstack/react-query';
import { Outlet, rootRouteWithContext } from '@tanstack/react-router';

const RootComponent = () => (
  <>
    <div className='w-full md:w-1/3 px-8 md:p-0 text-white mx-auto flex-grow'>
      <header className="my-5 p-5 flex gap-2 justify-center bg-neutral-700 rounded-md text-neutral-50 font-bold self-center">
        Coins List
      </header>
      <Outlet />
    </div>
    <Footer />
  </>
);

export const Route = rootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
});
