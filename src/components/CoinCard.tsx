import { Link } from "@tanstack/react-router";
import { CoinType } from "../@types/coins";

type Props = {
  coin: CoinType;
}

const CoinCard = ({ coin }: Props) => {
  return (
    <Link
      to="/$coinId"
      params={{
        coinId: coin.code,
      }}
      className="bg-neutral-50 rounded-md p-8 text-black flex justify-between items-center border-neutral-300 border-[1px] hover:shadow-lg transition-all">
      <div className="flex gap-4 items-center">
        <img src={coin.png64} className="h-8" />
        <section className="flex flex-col text-left">
          <span
            style={{ color: coin.color }}
            className="font-bold">
            {coin.name}
          </span>
          <span className="text-xs">
            USD {Math.floor(coin.rate)}
          </span>
        </section>
      </div>
      <span
        className="text-xs">
        {'Mostrar detalles >'}
      </span>
    </Link>
  )
}

export default CoinCard