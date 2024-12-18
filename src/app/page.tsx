import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-[60px]">
      <div className="w-full h-[calc(100vh-60px)] flex items-center justify-center">
        <Image
          src={"/champion-teemo-astronaut-splash.jpg"}
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          alt="홈 이미지"
        />
        <div className="absolute top-[20%] left-[25%]">
          <Link href="/champions">
            <div className="px-16 py-4 bg-sky-700 text-white text-2xl rounded-lg hover:bg-sky-500 flex justify-center items-center bg-opacity-80">
              시작하기
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
