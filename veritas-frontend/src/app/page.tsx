"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Building2, BookOpen, GraduationCap, ClipboardCheck, Users, Compass } from "lucide-react"

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    viewport: { once: true }
  }

  const childVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const services = [
    {
      icon: <Building2 className="w-8 h-8 text-[#D4AF37]" />,
      title: "Education Startup Consulting",
      desc: "Building strong academic foundations for new and growing institutions."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-[#D4AF37]" />,
      title: "Accreditation & Qualification",
      desc: "Expert guidance on national and international framework alignment."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#D4AF37]" />,
      title: "Curriculum Architecture",
      desc: "Designing academically sound, industry-aligned programs."
    },
    {
      icon: <Compass className="w-8 h-8 text-[#D4AF37]" />,
      title: "Veritas Education Audit™",
      desc: "A structured diagnostic framework assessing academic integrity and readiness."
    },
    {
      icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
      title: "Institutional Training",
      desc: "Building academic capability within institutions for sustainable implementation."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#D4AF37]" />,
      title: "Academic Pathway Advisory",
      desc: "Selective, evidence-based guidance for families and students."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-blue-950 text-white overflow-hidden">
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <polygon fill="#D4AF37" points="100,0 0,100 100,100" />
            <polygon fill="#ffffff" points="100,0 50,0 100,50" />
          </svg>
        </div>
        
        <div className="container px-4 md:px-8 mx-auto relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Designing Education.<br />
              <span className="text-[#D4AF37]">Building Capability.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
              A boutique education consultancy specializing in academic strategy, accreditation alignment, curriculum architecture, institutional audits, and faculty capability development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="premium" size="lg" className="w-full sm:w-auto h-12 text-base px-8">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 text-base border-white/30 text-white hover:bg-white/10 hover:border-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-8 mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            {...fadeIn}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Elevating Educational Quality</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We partner with education startups, private institutes, and academic leaders to design credible, future-ready education systems. Our focus is on ensuring global academic standards through rigorous, evidence-based advisory.
              </p>
              <ul className="space-y-4 mb-8">
                {['Academic integrity', 'Regulatory expertise', 'Global education insight', 'Institutional capacity building'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="outline" className="text-blue-950 border-blue-950">
                  Read Our Full Story Form
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-950/5" />
              {/* Fallback pattern while images are sorted */}
              <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <Compass className="absolute w-32 h-32 text-blue-950/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-8 mx-auto">
          <motion.div className="text-center max-w-2xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Core Services</h2>
            <p className="text-gray-600">
              Comprehensive academic solutions designed to establish, evaluate, and elevate educational institutions.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={childVariant}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-6 p-4 rounded-full bg-blue-50/50 w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link href="/services" className="text-[#D4AF37] font-medium inline-flex items-center hover:underline">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="default" size="lg">View All Services Details</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Veritas */}
      <section className="py-20 md:py-28 bg-blue-950 text-white relative overflow-hidden">
        <div className="container px-4 md:px-8 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Veritas?</h2>
              <p className="mb-10 text-white/80 text-lg">
                We bring a structured, rigorous, and proven approach to educational consulting, ensuring your institution not only meets standards but sets benchmarks.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Integrity-Driven", desc: "Upholding the highest academic standards without compromise." },
                  { title: "Framework Expertise", desc: "Deep understanding of NVQ, SLQF, RQF and global frameworks." },
                  { title: "Institutional Focus", desc: "Solutions designed specifically for institutional growth." },
                  { title: "Evidence-Based", desc: "Advisory rooted in data, research, and proven methodologies." }
                ].map((feature, i) => (
                  <div key={i} className="border-l-2 border-[#D4AF37] pl-4">
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-white/70 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to elevate your institution?</h3>
              <p className="text-white/80 mb-8">
                Our team is ready to conduct a detailed diagnostic of your academic structure and propose a targeted growth roadmap.
              </p>
              <Link href="/contact">
                <Button variant="premium" size="lg" className="w-full">
                  Contact Our Advisory Team
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
