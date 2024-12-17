/* 
TODO 5.2 : - Data Dragon API의 아이템 데이터 구조를 참고하세요.
- 아이템의 가격 정보와 스탯 정보를 포함하도록 타입을 정의하세요.
*/
export type ItemData = {
  name: string; // 장화
  description: string;
  colloq: string;
  plaintext: string; // 이동속도가 약간 증가합니다
  into: string[];
  image: ItemImage;
  gold: object;
  tags: string[];
  maps: object;
  stats: object;
};

export type ItemImage = {
    full: string; // 1001.png
    sprite: string; 
    group: string; 
    x: number;
    y: number;
    w: number;
    h: number; 
}

  export type ItemListResponse = {
    data: Record<string, ItemData>; 
  };
