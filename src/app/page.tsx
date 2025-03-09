"use client";

import ContactForm from "@/components/ContactForm";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function Home() {
  const CuriosityOption = ({
    title,
    desc,
    bg,
    classOpt,
  }: {
    title: string;
    desc: string;
    bg: string;
    classOpt?: string;
  }) => (
    <div
      className={`bg-[${bg}] ${classOpt} text-${
        bg == "#b40323" ? "white" : "black"
      } p-10`}
    >
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <p className="text-justify">{desc}</p>
    </div>
  );

  return (
    <div className="bg-white">
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
            {/* <button className="btn bg-[#b40323] border-[#b40323] text-white hover:border-[#b40323]">
              Read More
            </button> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black">
        <div
          className="bg-cover"
          style={{
            backgroundImage: "url('/assets/img/girls-happy.jpg')",
          }}
        ></div>
        <div className="py-16 px-10 text-[#f5f8fd]">
          <h3 className="font-bold text-5xl">
            TasteNaija <span className="text-[#b40323]">UNLOCKED</span> Event
          </h3>
          <h4 className="font-bold text-3xl mt-6">
            TasteNaija Unlocked: A Feast of Flavors You&apos;ll Never Forget!
          </h4>
          <p className="mt-6 text-justify">
            We&apos;re bringing together a vibrant community of African food
            lovers for the ultimate culinary adventure,{" "}
            <span className="font-bold underline">TasteNaija Unlocked</span>!
            Get ready to indulge in a mouthwatering celebration of
            Nigeria&apos;s most beloved dishes, all in one unforgettable event.
          </p>

          <a
            href="/event"
            className="btn btn-outline btn-warning mt-6 hover:bg-[#b40323]"
          >
            Read more
          </a>
        </div>
      </div>

      <div className="py-10">
        <h3 className="font-bold text-2xl md:text-3xl text-center mb-5">
          We Satisfy your Food Curiosity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <CuriosityOption
            bg="#b40323"
            classOpt="order-2 md:order-1"
            title="Order from our top Menu"
            desc="Select from our well curated menu to satisfy your cravings. We prepare your meal just the way and size you want it. Good news! For every meal you order, you receive TasteNaija points. You can redeem these points after 10 meals ordered from TasteNaija. You can redeem the points by getting free meal or gift voucher or shopping voucher, or even sharing meal with the less privilage."
          />
          <CuriosityOption
            bg="white"
            classOpt="order-1 md:order-2"
            title="Family Experience"
            desc="You want home service? And we have it! Through our pre-booked home
service experience, you have the luxury of having our Chef cook for your family right at your
home, giving your family the home cooking experience. We source everything according to
your order and meal preferrence."
          />
          <CuriosityOption
            title="Nigeria Food Stuff for Delivery:"
            bg="white"
            classOpt="order-3"
            desc="You are the type that wants to put your hands to work and
  make your own Nigeria meals? We got you covered with the best and quality food stuffs
  from Nigeria. You order, we package and deliver food stuff to your doorstep across
  Tanzania."
          />
          <CuriosityOption
            bg="#b40323"
            classOpt="order-4"
            title="Event Catering"
            desc="Add a touch of Nigeria flavour to your event. With our tailor-made catering
services, we provide the best and mouthwatering Nigeria food options to light up your
special occasions. We work with you to deliver outstanding catering experience that will
leave a lasting legacy for your event."
          />
        </div>
      </div>

      <div className="px-5 md:px-20 py-10 md:py-20">
        <h3 className="font-bold text-2xl md:text-3xl text-center mb-5">
          Reviews
        </h3>
        <p>
          We want to constantly imrpove our services and quality of food we
          serve our most cherished customers. If you have any feedback that will
          help us serve you better, please use this form to provide your
          reviews. We welcome positive and constructive reviews to help us serve
          you better.
        </p>
      </div>

      <div className="px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg">
              Authentic Naija flavours on your plate in Tz. 🇹🇿🇳🇬
Bringing people together through food, culture & unity.
Handcrafted Nigerian delicacies.
                </p>

                <div className="flex flex-col gap-y-5 mt-10">
                <div className="flex items-center space-x-2">
                <FaLocationPin className="text-[#b40323] text-2xl" />
        <span className="text-lg text-gray-700">
        206 Mwai Kibaki Road, Kawe Beach, Dar es Salaam, Tanzania
        </span>
      </div>

      <div className="flex items-center space-x-2">
       <FaMailBulk className="text-[#b40323] text-2xl" />
        <span className="text-lg text-gray-700">hello@tastenaija.co</span>
      </div>

      <div className="flex items-center space-x-2">
        <FaPhoneAlt className="text-[#b40323] text-2xl" />
        <span className="text-lg text-gray-700">+255742949268</span>
      </div>

                </div>
            </div>
            <div>
            <ContactForm />
            </div>
      </div>
    </div>
  );
}