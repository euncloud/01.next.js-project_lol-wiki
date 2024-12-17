import React from "react";
import { fetchItemData } from "../utils/serverApi";
import ChampionCard from "@/components/Card";

async function ItemListPage() {
  const items = await fetchItemData();

  return (
    <div className="w-full h-[100vh] pt-[80px]">
      <div className="flex flex-col items-center justify-center max-w-[1400px]  mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-sky-500">
          아이템 목록
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full px-4 py-4">
          {Object.entries(items.data).map(([key, item]) => (
            <ChampionCard
              version='14.24.1'
              id=''
              key={key} // 객체의 키를 고유 key로 사용
              name={item.name}
              title={item.plaintext}
              image={item.image}
              flag ="item"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemListPage;
