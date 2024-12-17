import { getChampionImageUrl } from "@/app/utils/imageUtils";
import { fetchChampionDetail } from "@/app/utils/serverApi";
import Image from "next/image";
import React from "react";

async function ChampionDetailPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const championResponse = await fetchChampionDetail(id);
  const champion = championResponse.data[id];
  const imgSrc = getChampionImageUrl(champion.image.full);

  return (
    <div className="w-full h-[100vh] pt-[80px]">
      <div className="flex flex-col items-center h-screen bg-zinc-900 text-white p-10 max-w-[800px] mx-auto">
        <div className="flex flex-col items-center space-x-2 mb-6">
          <h1 className="text-4xl font-bold text-sky-500 mb-2">
            {champion.name}
          </h1>
          <p className="text-lg text-gray-400">{champion.title}</p>
        </div>

        <div className="mb-6">
          <Image
            className="rounded-md object-cover m-auto"
            width={180}
            height={180}
            src={imgSrc}
            alt="image URL"
          />
        </div>

        <div className="text-left text-gray-300 mb-8">
          <p>{champion.lore}</p>
        </div>

        <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-sky-500 mb-4">능력치</h2>
          <div className="grid grid-cols-3 gap-4 text-gray-300">
            <div className="flex justify-between">
              <span>공격력 {champion.info.attack}</span>
              <span></span>
            </div>
            <div className="flex justify-between">
              <span>방어력 {champion.info.defense}</span>
              <span></span>
            </div>
            <div className="flex justify-between">
              <span>주문력 {champion.info.magic}</span>
              <span></span>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <h2 className="text-xl font-semibold text-sky-500 mb-2">난이도</h2>
            <span>{"⭐".repeat(champion.info.difficulty)}</span>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default ChampionDetailPage;
