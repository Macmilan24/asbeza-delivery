import React from "react";
import Image from "next/image";

const HIW = () => {
  return (
    <section className=" bg-transparent py-10 px-6 md:px-0">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">
          How it works?
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Step 1: Browse */}
          <div className="md:w-1/6 flex flex-col items-center">
            <Image
              src="/images/browse.png"
              alt="Browse"
              width={120}
              height={120}
            />
            <h3 className="text-2xl font-bold text-green-700 mt-5 mb-2">
              Browse
            </h3>
            <p className="text-gray-600">
              Wonder twenty hunted and put income set desire expect. Am cottage
              calling.
            </p>
          </div>

          {/* Dot and Dash */}
          <div className="hidden md:flex items-center justify-center">
            <div className="rounded-full w-2 h-2 bg-green-500 mx-2"></div>
            <div className="w-2 rounded-sm  h-1  bg-green-500"></div>
            <div className="w-2 rounded-sm h-1 ml-2 bg-green-500"></div>
            <div className="w-2 rounded-sm h-1 ml-2 bg-green-500"></div>
            <div className="w-2 rounded-sm h-1 ml-2 bg-green-500"></div>
            <div className="w-2 rounded-sm h-1 ml-2 bg-green-500"></div>
            <div className="rounded-full w-2 h-2 bg-green-500 mx-2"></div>
          </div>

          {/* Step 2: Order */}
          <div className="md:w-1/6 flex flex-col items-center">
            <Image
              src="/images/order.png"
              alt="Order"
              width={120}
              height={120}
            />
            <h3 className="text-2xl font-bold text-green-700 mt-5 mb-2">
              Order
            </h3>
            <p className="text-gray-600">
              Conveying or northward offending admitting perfectly my. Colonel
              gravit and moonlight.
            </p>
          </div>

          {/* Step 3: Wait for A Day */}
          <div className="md:w-1/6 hiw-step flex flex-col items-center">
            <Image
              src="/images/wait.png"
              alt="Wait for A Day"
              width={120}
              height={120}
            />
            <h3 className="text-2xl font-bold text-green-700 mt-5 mb-2 text-center">
              Wait for A Day
            </h3>
          </div>

          {/* Step 4: Deliver */}
          <div className="md:w-1/6 flex flex-col items-center">
            <Image
              src="/images/deliver.png"
              alt="Deliver"
              width={120}
              height={120}
            />
            <h3 className="text-2xl font-bold text-green-700 mt-5 mb-2">
              Deliver
            </h3>
            <p className="text-gray-600">
              Moderate children at of outweigh it. Unstable it is considered.
            </p>
          </div>

          {/* Dot and Dash */}
          <div className="hidden md:flex items-center justify-center">
            <div className="rounded-full w-2 h-2 bg-green-500 mx-2"></div>
            <div className="w-2 rounded-sm  h-1  bg-green-500"></div>
            <div className="w-2 rounded-sm h-1 ml-2 bg-green-500"></div>
            <div className="w-2 rounded-sm h-1 ml-2 bg-green-500"></div>
            <div className="w-2 rounded-sm h-1 ml-2 bg-green-500"></div>
            <div className="w-2 rounded-sm h-1 ml-2 bg-green-500"></div>
            <div className="rounded-full w-2 h-2 bg-green-500 mx-2"></div>
          </div>

          {/* Step 5: Enjoy */}
          <div className="md:w-1/6 flex flex-col items-center">
            <Image
              src="/images/enjoy.png"
              alt="Enjoy"
              width={120}
              height={120}
            />
            <h3 className="text-2xl font-bold text-green-700 mt-5 mb-2">
              Enjoy
            </h3>
            <p className="text-gray-600">
              Moderate children at of outweigh it. Unstable it is considered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HIW;
