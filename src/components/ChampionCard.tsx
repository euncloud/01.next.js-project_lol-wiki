"use client"

import { getChampionImageUrl } from "@/app/utils/imageUtils";
import { ChampionData } from "@/types/Champion";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function ChampionCard({ id, version, name, title, image, flag }: Pick<ChampionData, 'id' | 'version' | 'name' | 'title' | 'image'> & {flag: string}) {

  const imgSrc = getChampionImageUrl(image.full, version, flag);
  const isChampion = flag === 'champion';
  const router = useRouter();

  const handleClick = () => {
    router.push(`/champions/${id}`);
  }

  return (
    
    <div className={`bg-white bg-opacity-15 px-4 py-6 rounded-lg flex flex-col items-center 
      ${isChampion ? 'cursor-pointer hover:scale-105 transition-transform' : ''}` }
      onClick={isChampion ? handleClick : undefined}>
      <Image
        className="rounded-sm object-scale-down"
        width={100}
        height={100}
        src={imgSrc}
        alt="image URL"
      />
      <h2 className="text-xl font-semibold text-white mt-5">{name}</h2>
      <p className="text-sm text-white text-center mt-2">
        {title}
      </p>
    </div>
  );
}

export default ChampionCard;
