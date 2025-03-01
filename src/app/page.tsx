"use client"

import FoodOptions from "@/components/FoodOptions";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage: "url(/assets/bg/tastenaija-bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black/50"></div>
        <div className="hero-content text-neutral-content text-center text-white">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              Savour the Rich Flavours of Nigeria
            </h1>
            <p className="mb-5">
              African experience delivered through Africa&apos;s finest food
              heritage
            </p>
            <button className="btn bg-[#b40323] border-[#b40323] text-white hover:border-[#b40323]">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black">
        <div className="bg-cover" style={{
          backgroundImage: "url('/assets/img/girls-happy.jpg')"
        }}></div>
        <div className="py-16 px-10 text-[#f5f8fd]">
          <h3 className="font-bold text-5xl">TasteNaija <span className="text-[#b40323]">UNLOCKED</span> Event</h3>
          <h4 className="font-bold text-3xl mt-6">
            TasteNaija Unlocked: A Feast of Flavors You&apos;ll Never Forget!
          </h4>
          <p className="mt-6 text-justify">
            We&apos;re bringing together a vibrant community of African food
            lovers for the ultimate culinary adventure, <span className="font-bold underline">TasteNaija Unlocked</span>! Get
            ready to indulge in a mouthwatering celebration of Nigeria&apos;s
            most beloved dishes, all in one unforgettable event.
          </p>

          <a href="/event" className="btn btn-outline btn-warning mt-6 hover:bg-[#b40323]">Read more</a>
        </div>
      </div>

      <div className="px-5 py-10">

      </div>

      <div className="px-5 py-10">
        <h3 className="font-bold text-3xl text-center">Teste of Food</h3>
        <FoodOptions />
      </div>
    </>
  );
}
