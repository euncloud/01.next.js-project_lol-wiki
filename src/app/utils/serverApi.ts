import { ChampionListResponse } from "@/types/Champion";
import { ItemListResponse } from "@/types/Item";

const API_VERSION_URL = "https://ddragon.leagueoflegends.com/api/versions.json";

// lol 최신 버전 정보 가져오기
const fetchLatestVersion = async (): Promise<string> => {
  const response = await fetch(API_VERSION_URL);
  if (!response.ok) {
    return "14.24.1";
  }

  const versions: string[] = await response.json();
  return versions[0];
};

// 버전 정보에 따른 챔피언 전체 데이터
export const fetchChampionData = async (): Promise<ChampionListResponse> => {
  try {
    const version = await fetchLatestVersion();
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );

    if (!response.ok) {
      throw new Error(
        "fetchChampionData: 챔피언 데이터를 불러오는데 실패했습니다."
      );
    }

    const data: ChampionListResponse = await response.json();
    return data;
  } catch (error) {
    console.log("fetchChampionData: 챔피언 데이터를 불러오는데 실패했습니다.");
    throw error;
  }
};

export const fetchItemData = async () : Promise<ItemListResponse>=> {
  try {
    const version = await fetchLatestVersion();
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );

    if (!response.ok) {
      throw new Error(
        "fetchItemData: 아이템 데이터를 불러오는데 실패했습니다."
      );
    }
    
    const data: ItemListResponse = await response.json();
    return data;
  } catch (error) {
    console.log("fetchItemData: 아이템 데이터를 불러오는데 실패했습니다.");
    throw error;
  }
};
