import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { FaStore, FaShoppingCart, FaTruck, FaMobileAlt } from "react-icons/fa";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      icon: FaStore,
      title: "Store Selection",
      description:
        "Access a wide variety of local grocery stores in your area.",
    },
    {
      icon: FaShoppingCart,
      title: "Easy Ordering",
      description: "Browse products and place orders with just a few clicks.",
    },
    {
      icon: FaTruck,
      title: "Reliable Delivery",
      description:
        "Get your groceries delivered to your doorstep at your chosen time.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App",
      description: "Order on-the-go with our user-friendly mobile application.",
    },
  ];

  return (
    <div className="w-full relative overflow-x-hidden bg-[#f8f9e9] ">
      <Navbar />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto mt-6">
        <h1 className="text-5xl font-bold mb-8 text-center">Our Services</h1>
        <p className="text-xl mb-12 text-center">
          Connecting you with local grocery stores for convenient home delivery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="text-4xl mb-4 text-green-600" />
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-100 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Why Use Our Platform?</h2>
          <ul className="list-disc pl-6 text-lg">
            <li>Convenient access to multiple local grocery stores</li>
            <li>Time-saving online ordering process</li>
            <li>Flexible delivery options to fit your schedule</li>
            <li>Support local businesses in your community</li>
          </ul>
        </div>
      </section>

      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            How Our Platform Works
          </h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/platform-demo.jpg"
              alt="Platform demonstration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Ready to simplify your grocery shopping?
          </h2>
          <button className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
            Start Shopping Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
