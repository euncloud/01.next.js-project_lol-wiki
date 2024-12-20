"use client"

import { useQuery } from "@tanstack/react-query";
import { fetchChampionData } from "../utils/serverApi";
import { getChampionRotation } from "../utils/riotApi";
import ChampionCard from "@/components/Card";
import Loading from "../loading";


function RotationPage() {
  
  const { isPending, error, data : champions } = useQuery({
    queryKey: ['champions'],
    queryFn: () => fetchChampionData(),
    staleTime: 7 * 24 * 60 * 60 * 1000,
  })
  
  const { isPending : Pending, error: err, data : rotation } = useQuery({
    queryKey: ['rotation'],
    queryFn: () => getChampionRotation(),
    staleTime: 24 * 60 * 60 * 1000,
  })

  if (isPending || Pending) return <Loading />;

  if (error || err) throw error || err;

  // 챔피언 상세 정보 필터
  const rotationData = Object.entries(champions.data)
    .filter(([key, champion]) => (rotation.freeChampionIds).includes(Number(champion.key)))
    .map(([_, champion]) => champion);
    
  return (
    <div className="w-full h-[100vh] pt-[80px]">
      <div className="flex flex-col items-center justify-center max-w-[1400px] mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-sky-500">
        이 주의 로테이션 챔피언
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full px-4 py-4">

        {rotationData.map((champion) => (
          <ChampionCard
          key={champion.key} // 객체의 키를 고유 key로 사용
          id={champion.id}
          version={champion.version}
          name={champion.name}
          title={champion.title}
          image={champion.image}
          flag="champion"
        />
        ))}
        </div>
      </div>
    </div>
  );
}

export default RotationPage;
