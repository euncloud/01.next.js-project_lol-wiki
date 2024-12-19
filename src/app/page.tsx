import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-[60px] bg-black">
      <div className="w-full h-[calc(100vh-60px)] flex items-center justify-center object-cover">
        <Image
          src={"/champion-teemo-astronaut-splash.jpg"}
          alt="홈 이미지"
          width={1920}
          height={1080} 
          className="w-full h-[100vh] object-cover top-0 absolute"
          priority={false}
        />
        <div className="absolute top-[20%] left-[25%]">
          <Link href="/champions">
            <div className="px-16 py-4 bg-sky-700 text-white text-xl rounded-lg hover:bg-sky-500 flex justify-center items-center bg-opacity-80">
              시작하기
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
