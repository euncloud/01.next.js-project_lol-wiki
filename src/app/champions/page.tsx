import ChampionCard from "@/components/Card";
import { fetchChampionData } from "../utils/serverApi";

export const revalidate = 86400;

async function ChampionListPage() {
  const champions = await fetchChampionData();

  return (
    <div className="w-full h-[100vh] pt-[80px]">
      <div className="flex flex-col items-center justify-center max-w-[1400px] mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-sky-500">
          전체 챔피언 목록
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full px-4 py-4">
          {Object.entries(champions.data).map(([key, champion]) => (
            <ChampionCard
              key={key} // 객체의 키를 고유 key로 사용
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

export default ChampionListPage;
