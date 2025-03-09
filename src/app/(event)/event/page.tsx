"use client";

function Page() {
  return (
    <div className="">
      <div
        className="hero min-h-[60vh]"
        style={{
          backgroundImage: "url(/assets/img/girls-happy.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black/50"></div>
        <div className="hero-content text-neutral-content text-center text-white">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-black">
              TasteNaija <span className="text-[#b40323]">UNLOCKED</span> Event
            </h1>
            <p className="mb-5 text-2xl font-bold">
              21<sup>st</sup> March 2025
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 py-10 flex justify-center">
        <div className="max-w-3xl">
          <p className="text-justify text-lg">
            Savor the rich, bold flavors of authentic Nigerian cuisine, from
            jollof rice that steals the show to sizzling suya, pepper soup,
            Egusi, pounded yam, and more, all prepared to perfection. It&apos;s
            a Food Festival, it&apos;s a cultural experience! Connect with
            fellow food enthusiasts from all walks of life, share laughter, and
            bond over plates of goodness right here in the heart of Dar es
            Salaam.
          </p>

          <p className="font-bold text-4xl text-[#fc0030] text-center my-10">
            Come hungry, leave inspired. Taste Nigeria like never before!
          </p>
        </div>
      </div>

      <div>
      <h3 className="text-center font-bold text-3xl mb-6">Some highlights of the event:</h3>
      </div>

      <div className="px-5 flex justify-center">
        <img
          src="/assets/img/Taste-Naija-Features.png"
          style={{
            transform: "rotate(-0.5deg)",
          }}
          alt="..."
        />
      </div>

      <div className="px-5 md:px-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center">
            <img src="/assets/img/50k-Taste-Naija.png" alt="50k" />
          </div>
          <div className="flex justify-center">
            <img src="/assets/img/90k-Taste-Naija.png" alt="90k" />
          </div>
        </div>
      </div>

      <div className="px-5 md:px-10 py-10">
        <h3 className="font-bold mb-3">Steps to pay:</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Pay to MPESA Lipa Number</li>
          <li>Name: Farm Boksi</li>
          <li>Lipa Number: 54353507</li>
          <li>
            Send your payment receipt through Whatsapp:{" "}
            <span className="underline">+255742949268</span> or email:{" "}
            <span className="underline">hello@tastenaija.co</span>
          </li>
        </ul>
        <p>
          Once your payment is confirmed, your ticket will be shared with you.
          You will automativally be registered for the raffle draw.
          <br />
          <br />
          You can also access TasteNaija Unlocked ticket through our whatsapp
          number: <span className="font-bold">+255742949268</span>
        </p>
      </div>
    </div>
  );
}

export default Page;
