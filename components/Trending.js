import React from "react";
import GameCard from "../components/cardgame/GameCard";
const Trending = () => {
  const games = [
    {
      id: 1,
      price: 12,
      name: "Call of Duty: Modern Warfare",
      slug: "call-of-duty",
      image: "https://unsplash.com/fr/photos/Wzs4-QEmCUQ",
    },
    {
      id: 2,
      price: 14,
      name: "Assassin's Creed Valhalla",
      slug: "assassin-creed",
      image:
        "https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QXNzYXNzaW4ncyUyMENyZWVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      price: 42,
      name: "FIFA 23",
      slug: "fifa-23",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheSUyMHN0YXRpb24lMjBmaWZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },

    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image:
        "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image:
        "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image:
        "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image:
        "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <section className=" min-h-screen  bg-[#F9F6EF] ">
      <div className="space-y-10 py-16">
        <h1 className="text-center text-4xl font-medium tracking-wide text-black md:text-5xl">
          Best Sellers
        </h1>

        <div className="flex gap-8 flex-wrap">
          {games.map((game) => (
            <GameCard
              key={game.id}
              gameName={game.name}
              imageUrl={game.image}
              slug={game.slug}
              price={game.price}
            />
          ))}
        </div>

        <h3 className="font-semibold text-2xl max-w-3xl text-center mx-auto text-primary-dark pt-12 sm:pt-28 pb-8 sm:pb-16 leading-[125%] sm:leading-[187%]">
          Featured Game
        </h3>
      </div>
    </section>
  );
};
export default Trending;
