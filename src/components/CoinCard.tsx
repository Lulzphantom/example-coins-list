import { Link } from "@tanstack/react-router";
import { CoinType } from "../@types/coins";
import getTitleColor from "@/utils/getTitleColor";

type Props = {
  coin: CoinType;
}

const CoinCard = ({ coin }: Props) => {

  const titleLuminace = getTitleColor(coin.color);

  return (
    <Link
      to="/$coinId"
      params={{
        coinId: coin.code,
      }}
      className="bg-white rounded-md p-8 text-black flex justify-between items-center border-neutral-300 border-[1px] hover:shadow-lg transition-all">
      <div className="flex gap-4 items-center">
        <img 
        alt={coin.name}
        src={coin.png64} 
        height={32}
        width={32}
        />
        <section className="flex flex-col text-left">
          <span
            style={{ color: coin.color, filter: titleLuminace > 200 ? 'brightness(60%)' : undefined }}
            className="font-bold">
            {coin.name}
          </span>
          <span className="text-xs">
            $ {coin.rate.toLocaleString(undefined, { maximumFractionDigits: 2})} USD
          </span>
        </section>
      </div>
      <span
        className="text-xs">
        {'Detalles >'}
      </span>
    </Link>
  )
}

export default CoinCard