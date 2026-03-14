"use client"
import { motion } from "framer-motion"
import { ShieldCheck, Target, Award, ListChecks, Users } from "lucide-react"

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-blue-950 text-white py-20 pb-32 relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Veritas
          </motion.h1>
          <motion.p 
            className="text-lg text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevating the quality, credibility, and strategic clarity of education systems.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="-mt-16 container mx-auto px-4 md:px-8 relative z-20 pb-20">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Who We Are</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            <strong>Veritas Academic Consultation</strong> is a boutique education consultancy specializing in academic strategy, accreditation alignment, curriculum architecture, institutional audits, and faculty capability development.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We partner with education startups, private institutes, and academic leaders to design credible, future-ready education systems. We also provide selective, evidence-based advisory services to families and students pursuing higher education pathways.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <span className="text-[#D4AF37]"><Target size={32} /></span>
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted authority in defining and delivering globally recognized academic quality and strategic clarity for leading educational institutions.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <span className="text-[#D4AF37]"><ShieldCheck size={32} /></span>
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To elevate the quality, credibility, and strategic clarity of education systems through evidence-based advisory and institutional capacity building.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div className="mb-20 text-center" {...fadeIn}>
          <h2 className="text-3xl font-bold text-blue-950 mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#D4AF37]">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">Upholding absolute honesty, transparency, and ethical standards in all academic advisory.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-950">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Academic Rigor</h3>
              <p className="text-gray-600 text-sm">Applying robust evaluation methodologies, evidence-based practices, and consistent standards.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#D4AF37]">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Institutional Excellence</h3>
              <p className="text-gray-600 text-sm">Empowering organizations to build enduring, scalable, and high-impact educational frameworks.</p>
            </div>
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div className="mb-20" {...fadeIn}>
          <h2 className="text-3xl font-bold text-blue-950 mb-10 text-center">Our Methodology: The Design Sync Circle</h2>
          <div className="relative border-l-2 border-[#D4AF37] md:border-l-0 md:flex flex-col md:flex-row gap-6 mx-auto">
            {/* Steps line for Desktop */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-blue-950/20" />
            
            {[
              { num: '01', title: 'Phase 1 - Diagnostic', text: 'Institutional review or consultation assessment.' },
              { num: '02', title: 'Phase 2 - Design', text: 'Curriculum architecture, governance structuring, or pathway mapping.' },
              { num: '03', title: 'Phase 3 - Alignment', text: 'Accreditation mapping and regulatory integration.' },
              { num: '04', title: 'Phase 4 - Capability Building', text: 'Staff training, documentation support, and implementation guidance.' },
            ].map((phase, i) => (
              <div key={i} className="relative pl-8 pb-8 md:pl-0 md:flex-1 pt-8 md:text-center group">
                {/* Dots */}
                <div className="absolute left-[-9px] top-9 w-4 h-4 rounded-full bg-white border-4 border-[#D4AF37] md:left-1/2 md:-translate-x-1/2 md:-top-[28px] md:mt-2 bg-white transition-transform duration-300 group-hover:scale-125 z-10" />
                <h4 className="text-[#D4AF37] font-bold text-sm mb-2 uppercase tracking-wide">Phase {phase.num}</h4>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{phase.title.split(' - ')[1]}</h3>
                <p className="text-gray-600 text-sm">{phase.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Advisory Council */}
        <motion.div 
          className="bg-blue-950 text-white rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-white/10 rounded-full flex items-center justify-center border-4 border-[#D4AF37]">
                <Users size={64} className="text-[#D4AF37]" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Veritas Academic Advisory Council</h2>
              <p className="text-[#D4AF37] mb-6 font-medium">Independent Quality Assurance & Oversight</p>
              <p className="text-white/80 leading-relaxed mb-6">
                Veritas Academic Consultation operates with the guidance of an Independent Academic Advisory Council comprising senior academicians and quality assurance specialists.
              </p>
              <h4 className="text-xl font-bold mb-2">Madubhashini Sarathchandra</h4>
              <p className="text-white/60 text-sm mb-4">Founder & Principal Advisor</p>
              <p className="text-white/80 text-sm leading-relaxed border-l-2 border-white/20 pl-4 py-1 italic">
                Our purpose is clear: oversee academic standards, review audit methodologies, validate curriculum frameworks, and ultimately strengthen institutional credibility globally.
              </p>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  )
}
