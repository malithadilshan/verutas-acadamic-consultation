"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    phone: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", organization: "", phone: "", email: "", message: "" })
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-blue-950 text-white py-24 relative">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-lg text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Whether you need to request an Institutional Audit, book an appointment, or schedule your training, our advisory team is ready to assist.
          </motion.p>
        </div>
      </section>

      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#D4AF37] mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-blue-950 mb-2">Phone</h3>
              <p className="text-gray-600">+94 71 751 1917</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#D4AF37] mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-blue-950 mb-2">Email</h3>
              <p className="text-gray-600">veritasacademic@...</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#D4AF37] mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-blue-950 mb-2">Strategic Office</h3>
              <p className="text-gray-600">Location to be provided</p>
            </motion.div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">Schedule a Consultation</h2>
            
            {isSuccess ? (
              <motion.div 
                className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                <p>Thank you for reaching out. A member of the Veritas team will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Contact Person Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-gray-700">Name of Client / Organization *</label>
                    <input 
                      type="text" 
                      id="organization"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      placeholder="Institute of Advanced Studies"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Contact No. *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+94 7X XXX XXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@institute.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Inquiry Details</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Please specify if you are looking for an Institutional Audit, Accreditation Alignment, or standard Consultation."
                  ></textarea>
                </div>

                <div className="pt-4 text-center">
                  <Button type="submit" variant="premium" size="lg" className="w-full md:w-auto h-14 px-12 text-lg disabled:opacity-70" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        Submit Inquiry <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
