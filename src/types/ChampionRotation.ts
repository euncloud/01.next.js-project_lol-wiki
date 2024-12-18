/**
 * TODO 5.3 : - Riot API 문서에서 챔피언 로테이션 엔드포인트의 응답 구조를 확인하세요.
- 숫자 배열과 같은 기본 타입을 정확히 명시하세요.
 */
export type ChampionRotation = {
    freeChampionIds : number[];
    freeChampionIdsForNewPlayers : number[];
    maxNewPlayerLevel : number;
}