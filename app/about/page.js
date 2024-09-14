import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full relative overflow-x-hidden bg-[#f8f9e9]">
      <Navbar />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto mt-6">
        <h1 className="text-5xl font-bold mb-8 text-center">
          About Our Platform
        </h1>
        <p className="text-xl mb-12 text-center">
          Connecting you with local grocery stores for convenient home delivery.
        </p>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Founded in 2023, our platform aims to simplify grocery shopping by
            connecting customers with local stores and delivery services. We
            believe in making fresh, quality groceries accessible to everyone,
            right at their doorstep.
          </p>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/grocery-delivery.jpg"
              alt="Grocery delivery"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">How We Help</h2>
          <ul className="list-disc pl-6 text-lg">
            <li>Connecting customers with local grocery stores</li>
            <li>Providing a user-friendly ordering platform</li>
            <li>Facilitating efficient delivery services</li>
            <li>Supporting local businesses and communities</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
              Convenience: Making grocery shopping effortless for our users
            </li>
            <li>
              Quality: Partnering with reputable stores for the best products
            </li>
            <li>Community: Supporting local businesses and economies</li>
            <li>
              Innovation: Continuously improving our platform and services
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
