import { getChampionImageUrl } from "@/app/utils/imageUtils";
import { ChampionData } from "@/types/Champion";
import Image from "next/image";
import React from "react";

function ChampionCard({ name, title, image }: Pick<ChampionData, 'name' | 'title' | 'image'>) {

  const imgSrc = getChampionImageUrl(image.full);
    
  return (
    <div className="bg-white bg-opacity-15 px-4 py-6 rounded-lg flex flex-col items-center">
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
