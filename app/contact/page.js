import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="w-full relative overflow-x-hidden bg-[#f8f9e9]">
      <Navbar />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto mt-6">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-xl mb-12 text-center">
          We{"'"}re here to help. Reach out to us for any inquiries or support.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-3" />
                  <span>123 Main St, City, Country 12345</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-blue-600 mr-3" />
                  <span>+1 (123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-3" />
                  <span>info@example.com</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </li>
                <li>
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                </li>
                <li>
                  <strong>Sunday:</strong> Closed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Find Us on the Map
          </h2>
          <div className="h-96 bg-gray-300 rounded-lg">
            {/* Replace this div with an actual map component or embed */}
            <p className="text-center pt-40">Map placeholder</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
