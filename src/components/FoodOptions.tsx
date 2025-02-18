import React from "react";

function FoodOptions() {
  const array = [
    {
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Salad",
    },
    {
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Salad",
    },
    {
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Salad",
    },
    {
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Salad",
    },
    {
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Salad",
    },
    {
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Salad",
    },
  ];

  const FoodCard = ({ image, name }: { image: string; name: string }) => (
    <div className="card card-side bg-base-100 shadow-xl group bg-white cursor-pointer">
      <figure>
        <div
          className="w-[30vw] bg-center bg-cover bg-no-repeat bg-red-200"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </figure>
      <div className="card-body group-hover:bg-[#FF6624] group-hover:text-white">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );

  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {array.map((a, i) => (
        <div key={i}>
          <FoodCard image={a.image} name={a.name} />
        </div>
      ))}
    </div>
  );
}

export default FoodOptions;