"use client";
import Link from "next/link";
import { RoundButton } from "@/components";

export default function Form() {
  return (
    <section className="w-full max-w-3xl mx-auto bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-3xl p-10 border border-gray-200">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center drop-shadow-sm">
        🚀 Contact Form
      </h2>

      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-4 focus:ring-blue-400 focus:outline-none shadow-sm hover:shadow-md transition-all"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Enter your company"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-4 focus:ring-blue-400 focus:outline-none shadow-sm hover:shadow-md transition-all"
          />
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            What do you need help with? <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Describe your project or goal..."
            rows={4}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-4 focus:ring-blue-400 focus:outline-none shadow-sm hover:shadow-md transition-all"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Expected Deadline
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-4 focus:ring-blue-400 focus:outline-none shadow-sm hover:shadow-md transition-all"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Budget Range
          </label>
          <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-4 focus:ring-blue-400 focus:outline-none shadow-sm hover:shadow-md transition-all">
            <option value="">Select...</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k+">$10,000+</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-4 focus:ring-blue-400 focus:outline-none shadow-sm hover:shadow-md transition-all"
          />
        </div>

        {/* More details */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            placeholder="Add more details if necessary..."
            rows={3}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-4 focus:ring-blue-400 focus:outline-none shadow-sm hover:shadow-md transition-all"
          />
        </div>

        {/* Privacy + Submit */}
        <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-400 rounded"
            />
            <p className="text-sm text-gray-600">
              I agree with the{" "}
              <Link href="/privacy" className="text-blue-600 underline hover:text-blue-700">
                Privacy Policy
              </Link>
            </p>
          </div>

          <RoundButton
            bgcolor="#2563eb"
            href="/"
            title="Send Inquiry"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-[0_5px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_5px_30px_rgba(37,99,235,0.6)] transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </form>
    </section>
  );
}
