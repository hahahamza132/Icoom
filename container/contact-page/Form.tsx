"use client";
import Link from "next/link";
import { RoundButton } from "@/components";
import { motion } from "framer-motion";
import { User, Building, Target, Calendar, DollarSign, Mail, FileText, Shield } from "lucide-react";

export default function Form() {
  return (
    <section className="w-full bg-primary padding-y">
      <div className="max-w-4xl mx-auto padding-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-telecom-lg border border-gray-100 overflow-hidden"
        >
          {/* Form Header */}
          <div className="bg-gradient-to-r from-telecomBlue to-telecomDark text-white p-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Start Your Telecom Project</h2>
            <p className="text-telecomLight text-lg">
              Tell us about your requirements and we'll create a custom solution
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-telecomDark mb-3 flex items-center gap-2">
                    <User className="w-4 h-4 text-telecomBlue" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border-2 border-gray-200 focus:border-telecomBlue rounded-2xl px-6 py-4 text-telecomDark focus:outline-none transition-colors shadow-sm hover:shadow-telecom"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-telecomDark mb-3 flex items-center gap-2">
                    <Building className="w-4 h-4 text-telecomBlue" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full border-2 border-gray-200 focus:border-telecomBlue rounded-2xl px-6 py-4 text-telecomDark focus:outline-none transition-colors shadow-sm hover:shadow-telecom"
                  />
                </motion.div>
              </div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-telecomDark mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-telecomBlue" />
                  Project Requirements *
                </label>
                <textarea
                  placeholder="Describe your telecommunications needs, current challenges, and project goals..."
                  rows={5}
                  className="w-full border-2 border-gray-200 focus:border-telecomBlue rounded-2xl px-6 py-4 text-telecomDark focus:outline-none transition-colors shadow-sm hover:shadow-telecom resize-none"
                />
              </motion.div>

              {/* Service Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-telecomDark mb-3">
                  Services Needed (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "5G Infrastructure",
                    "VoIP Solutions", 
                    "Network Security",
                    "Cloud Communications",
                    "Digital Transformation",
                    "Managed Services"
                  ].map((service, index) => (
                    <label key={index} className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-2xl hover:border-telecomBlue transition-colors cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 text-telecomBlue border-2 border-gray-300 rounded focus:ring-telecomBlue"
                      />
                      <span className="text-telecomDark group-hover:text-telecomBlue transition-colors">{service}</span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Timeline and Budget */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-telecomDark mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-telecomBlue" />
                    Project Timeline
                  </label>
                  <select className="w-full border-2 border-gray-200 focus:border-telecomBlue rounded-2xl px-6 py-4 text-telecomDark focus:outline-none transition-colors shadow-sm hover:shadow-telecom">
                    <option value="">Select timeline...</option>
                    <option value="immediate">Immediate (1-2 weeks)</option>
                    <option value="short">Short-term (1-3 months)</option>
                    <option value="medium">Medium-term (3-6 months)</option>
                    <option value="long">Long-term (6+ months)</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-telecomDark mb-3 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-telecomBlue" />
                    Budget Range
                  </label>
                  <select className="w-full border-2 border-gray-200 focus:border-telecomBlue rounded-2xl px-6 py-4 text-telecomDark focus:outline-none transition-colors shadow-sm hover:shadow-telecom">
                    <option value="">Select budget...</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k-plus">$500,000+</option>
                  </select>
                </motion.div>
              </div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-telecomDark mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-telecomBlue" />
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  className="w-full border-2 border-gray-200 focus:border-telecomBlue rounded-2xl px-6 py-4 text-telecomDark focus:outline-none transition-colors shadow-sm hover:shadow-telecom"
                />
              </motion.div>

              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-telecomDark mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-telecomBlue" />
                  Additional Information
                </label>
                <textarea
                  placeholder="Any specific requirements, current infrastructure details, or questions..."
                  rows={4}
                  className="w-full border-2 border-gray-200 focus:border-telecomBlue rounded-2xl px-6 py-4 text-telecomDark focus:outline-none transition-colors shadow-sm hover:shadow-telecom resize-none"
                />
              </motion.div>

              {/* Privacy and Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-telecomBlue border-2 border-gray-300 rounded focus:ring-telecomBlue mt-0.5"
                  />
                  <div className="text-sm text-gray-600">
                    <p>I agree to the{" "}
                      <Link href="/privacy" className="text-telecomBlue hover:text-telecomDark underline font-medium">
                        Privacy Policy
                      </Link>{" "}
                      and consent to being contacted about this inquiry.
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <Shield className="w-3 h-3" />
                      <span>Your information is secure and will never be shared</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-telecomBlue hover:bg-telecomDark text-white px-8 py-4 rounded-2xl font-semibold shadow-telecom hover:shadow-telecom-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                >
                  Send Inquiry
                  <Mail className="w-5 h-5" />
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Response Time",
              value: "< 2 Hours",
              desc: "We respond to all inquiries within 2 hours during business hours"
            },
            {
              title: "Free Consultation",
              value: "30 Minutes",
              desc: "Complimentary consultation with our telecommunications experts"
            },
            {
              title: "Custom Proposal",
              value: "48 Hours",
              desc: "Detailed project proposal delivered within 2 business days"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-telecom border border-gray-100 text-center">
              <div className="text-2xl font-bold text-telecomBlue mb-2">{item.value}</div>
              <div className="text-lg font-semibold text-telecomDark mb-2">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}