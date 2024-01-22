import { QueryClient } from '@tanstack/react-query';
import { Link, Outlet, rootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const RootComponent = () => (
  <>
    <div className='w-full md:w-1/3 px-8 md:p-0 text-white mx-auto'>
      <nav className="my-5 p-5 flex gap-2 justify-center bg-neutral-700 rounded-md text-white self-center">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
      </nav>
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = rootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
});
