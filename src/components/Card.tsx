import { getChampionImageUrl } from "@/app/utils/imageUtils";
import { ChampionData } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ChampionCard({ id, version, name, title, image, flag }: Pick<ChampionData, 'id' | 'version' | 'name' | 'title' | 'image'> & {flag: string}) {

  const imgSrc = getChampionImageUrl(image.full, version, flag);
  const isChampion = flag === 'champion';

  return (
    <div className={`bg-white bg-opacity-15 px-4 py-6 rounded-lg flex flex-col items-center 
      ${isChampion ? 'cursor-pointer hover:scale-105 transition-transform' : ''}` }
    >
    {isChampion ? (
        <Link href={`/champions/${id}`}>
          <div>
            <Image
              className="rounded-md object-scale-down m-auto"
              width={100}
              height={100}
              src={imgSrc}
              alt="image URL"
            />
            <p className="text-xl font-semibold text-center text-white mt-5">{name}</p>
            <p className="text-sm text-white text-center mt-2">{title}</p>
          </div>
        </Link>
      ) : (
        <>
          <Image
            className="rounded-md object-cover"
            width={80}
            height={80}
            src={imgSrc}
            alt="image URL"
          />
          <p className="text-xl font-semibold text-white mt-5">{name}</p>
          <p className="text-sm text-white text-center mt-2">{title}</p>
        </>
      )}
    </div>
  );
}

export default ChampionCard;
