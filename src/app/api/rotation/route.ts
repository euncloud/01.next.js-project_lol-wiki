/* TODO 6.1 : 현재 무료로 플레이 가능한 챔피언들의 ID를 가져옵니다.*/
import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const apiKey = process.env.RIOT_API_KEY;
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        method: "GET",
        headers: {
          "X-Riot-Token": `${apiKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `fetchRotationChampions: 챔피언 로테이션 정보를 불러오는데 실패했습니다. \n api 응답: ${response.status}`
      );
    }

    const data: ChampionRotation = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(
      `fetchRotationChampions: 챔피언 로테이션 정보를 불러오는데 실패했습니다. ${error}`
    );
  }
}
