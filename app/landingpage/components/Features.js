import React from "react";
import Feature from "../sub/Feature";
import Image from "next/image";

const features = [
  {
    title: "Easy",
    subtitle: "Ordering",
    description:
      "Shop from anywhere with just a few taps. Our intuitive app ensures that you can quickly find and order what you need without the hassle.",
    image: "/images/easy.png",
  },
  {
    title: "Fast",
    subtitle: "Delivery",
    description:
      "Get your groceries delivered at lightning speed. With Asbeza, we prioritize fast, reliable delivery so your order arrives fresh and on time.",
    image: "/images/fast.png",
  },
  {
    title: "Fresh, ",
    subtitle: "Quality Products",
    description:
      "We partner with trusted local suppliers to guarantee that you always receive the freshest produce and quality essentials.",
    image: "/images/fresh.png",
  },
  {
    title: "24/7",
    subtitle: "Customer Support",
    description:
      "Our dedicated support team is here for you around the clock. Whether you have a question or need assistance, we’re always ready to help.",
    image: "/images/24.png",
  },
  {
    title: "Customized",
    subtitle: "Grocery",
    description:
      "Tailor your grocery list to fit your preferences. Whether it’s dietary needs or personal favorites, we customize your shopping experience to suit your lifestyle.",
    image: "/images/customized.png",
  },
  {
    title: "Community",
    subtitle: "Support",
    description:
      "Asbeza is committed to supporting local farmers, producers, and small businesses. When you shop with us, you’re directly helping your community thrive.",
    image: "/images/community.png",
  },
];

// "/images/logo.png"
const Features = () => {
  return (
    <div className="w-full flex flex-col md:px-20 px-8">
      <div className="my-10">
        <span className="text-[#096a13] text-[40px] font-bold underline leading-[37.92px]">
          Why{" "}
        </span>
        <span className="text-[#096a13] text-[40px] font-medium underline leading-[37.92px]">
          Asbeza
        </span>
        <span className="text-[#096a13] text-[40px] font-bold underline leading-[37.92px]">
          ?
        </span>
      </div>
      <div className="w-full flex flex-col justify-center ">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} index={index} />
        ))}
      </div>
      <div>
        <span className="text-[#096a13] text-[37px] font-bold underline leading-[37.92px]">
          Bonus:
        </span>
        <em className="text-[#096a13] text-[34px] font-medium capitalize leading-[37.92px]">
          {" "}
          Win Free Groceries!
        </em>
      </div>
      <div className="flex flex-col md:flex-row my-10">
        <div className="md:w-1/2 md:flex items-center justify-center hidden">
          <Image
            src={"/images/bonus.png"}
            alt={"logo"}
            width={200}
            height={150}
            className="rounded-lg"
          />
        </div>

        <div className="md:w-1/2">
          <em className="flex items-center justify-center text-black md:text-[30px] text-[20px] font-light leading-10 tracking-tight">
            Our exclusive loyalty program offers a fun, lottery-style bonus.
            Each time you shop, you get a chance to win an entire grocery order
            for free — it{"'"}s our way of giving back to loyal customers!
          </em>
        </div>
      </div>
    </div>
  );
};

export default Features;
