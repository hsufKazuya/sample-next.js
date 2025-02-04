import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="flex justify-center space-between items-center p-4">
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:underline">CONCEPT</a>
          <a href="#" className="text-gray-700 hover:underline">MENU</a>
          <a href="#" className="text-gray-700 hover:underline">SHOP</a>
          <a href="#" className="text-gray-700 hover:underline">ACCESS</a>
        </nav>
      </header>

      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image src="/mountain_fuji.jpg" layout="fill" objectFit="cover" alt="Mount Fuji"
        />
      </div>

      <section className="text-center p-8">
        <p className="text-gray-700 text-lg">
          想像力はあなたをどこにでも連れて行ってくれる
          <br />
          注文を作り置きにしないで、一瞬のあいだに見つけた高揚。
          <br />
          ゆったり流れる時間の中で、想像をふくらませる楽しさを思い出す。
          <br />
          そんな時間を過ごす時、美味しいコーヒーがあると嬉しい。
        </p>
        <button className="mt-4 bg-pink-300 text-black px-6 py-2 rounded-full shadow-md">CONCEPT</button>
      </section>

      <section className="bg-blue-400 py-10 text-center">
        <h2 className="text-xl font-bold">RECOMMENDED</h2>
        <div className="flex justify-center gap-4 mt-6">
          <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
        </div>
        <div className="mt-4 text-left max-w-md mx-auto">
          <h3 className="font-bold">カフェラテ</h3>
          <p className="text-gray-700 text-sm">
            エスプレッソとミルクの、心地よい甘さのバランスが楽しめるカフェラテ。
            やさしい香りとまろやかさを、ゆっくりと楽しんでください。
          </p>
          <p className="font-bold mt-2">¥460</p>
        </div>
        <button className="mt-4 bg-pink-300 text-black px-6 py-2 rounded-full shadow-md">MENU</button>
      </section>
      
      <footer className="bg-black text-white text-center p-6">
        <nav className="space-x-4">
          <a href="#" className="text-gray-400 hover:underline">CONCEPT</a>
          <a href="#" className="text-gray-400 hover:underline">MENU</a>
          <a href="#" className="text-gray-400 hover:underline">SHOP</a>
          <a href="#" className="text-gray-400 hover:underline">ACCESS</a>
        </nav>
        <div className="mt-4 w-40 h-16 bg-gray-400 mx-auto rounded-md flex justify-center items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center text-lg font-bold">K</div>
        </div>
        <p className="mt-4">TEL: 01-2345-6789</p>
        <p className="text-gray-500 text-sm">© 2025</p>
      </footer>
    </div>
  );
}
