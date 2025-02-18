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
            <h1 className="mb-5 text-5xl font-bold">Savour the Rich Flavours of Nigeria</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <button className="btn bg-[#FF6624] border-[#FF6624] text-white hover:border-[#FF6624]">Read More</button>
          </div>
        </div>
      </div>
      <div className="px-5 py-10">
        <h3 className="font-bold text-3xl text-center">
          Teste of Food
        </h3>
        <FoodOptions />
      </div>
    </>
  );
}
