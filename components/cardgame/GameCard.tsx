import Link from "next/link";
import { FC } from "react";
import gameCardClassNames from "./gameCardClassNames";
import Image from "next/image";

interface GameCardProps {
  gameName: string;
  imageUrl: string;
  slug: string;
  price: number;
}
const GameCard: FC<GameCardProps> = (props) => {
  const { gameName, imageUrl, slug, price } = props;

  return (
    <Link href={`/singleprod`} className="card">
      <Image
        className="w-full object-cover"
        src={imageUrl}
        alt={gameName}
        width={100}
        height={100}
      />
      <div className="p-5 flex flex-col gap-3 ">
        <div className="flex items-center gap-2">
          <span className="badge"> stock ready</span>
          <span className="badge">official store</span>
        </div>

        <h2 className="prodect-title" title="Best Headphones">
          {gameName}
        </h2>
        <div>
          <span className="text-xl font-bold">{price} $</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">2000 $</span>
            <span className="discount-percentage">save 20%</span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <Image src="/4.png" alt="" width={20} height={20} />
          <Image src="/4.png" alt="" width={20} height={20} />
          <Image src="/4.png" alt="" width={20} height={20} />
          <Image src="/4.png" alt="" width={20} height={20} />
          <Image src="/4.png" alt="" width={20} height={20} />

          <span className="text-xs ml-2 text-gray-500">20K views</span>
        </span>

        <div className="mt-5 flex gap-2 ">
          <button className="button-primary">add to cart</button>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
