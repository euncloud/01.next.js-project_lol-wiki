/* TODO 5 : Riot의 Data Dragon API에서 제공하는 챔피언 데이터 구조를 참고하세요.
- 필요한 경우 타입을 확장하거나 새로운 인터페이스를 생성할 수 있습니다. */
export type ChampionData = {
  version: string; // 14.24.1
  id: string; // Aatrox
  key: string; // 266
  name: string; // 아트록스
  title: string; // 다르킨의 검
  blurb: string; // 챔피언의 짧은 설명
  info: ChampionInfo;
  image: ChampionImage;
  tags: string[]; // "Fighter", "Mage"
  partype: string; // "피의 샘" or "마나"
  stats: ChampionStats;
};

export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type ChampionImage = {
  full: string; // Aatrox.png
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

export type ChampionListResponse = {
  data: Record<string, ChampionData>;
};

// 챔피언 상세 정보
export type ChampionDetail = {
  id: string; //Ahri
  key: string; //103
  name: string;
  title: string; //구미호
  image: ChampionImage;
  skins: object;
  lore: string;
  blurb: string;
  allytips: [];
  enemytips: [];
  tags: [];
  partype: string;
  info: ChampionInfo;
  stats: object;
  spells: [];
  passive: object;
  recommended: [];
};

export type ChampionDetailResponse = {
  data: Record<string, ChampionDetail>;
};
