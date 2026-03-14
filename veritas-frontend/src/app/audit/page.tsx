"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Shield, BookOpen, GraduationCap, Users, Scaling, Layers, FileText, BarChart, Route, UserCheck } from "lucide-react"

export default function AuditPage() {
  const dimensions = [
    { title: "Academic Governance", desc: "Evaluates the structural foundations of academic leadership.", icon: <Shield className="w-6 h-6" /> },
    { title: "Accreditation & Framework Alignment", desc: "Assesses program alignment with NVQ, SLQF, RQF frameworks.", icon: <Layers className="w-6 h-6" /> },
    { title: "Curriculum Integrity", desc: "Reviews the academic soundness and structural coherence of programs.", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Assessment & Quality Assurance", desc: "Examines the robustness of evaluation mechanisms.", icon: <FileText className="w-6 h-6" /> },
    { title: "Faculty Capability", desc: "Ensures faculty possess necessary qualifications and competencies.", icon: <UserCheck className="w-6 h-6" /> },
    { title: "Student Academic Experience", desc: "Examines the academic journey and available support structures.", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Institutional Scalability", desc: "Ensures consistent academic quality while expanding operations.", icon: <BarChart className="w-6 h-6" /> }
  ]

  const tiers = [
    {
      name: "Lite Audit",
      target: "Early-stage startups",
      desc: "Designed for early-stage education startups seeking an initial academic review.",
      features: [
        "Document review of academic structure and programs",
        "Preliminary curriculum evaluation",
        "Basic accreditation alignment overview",
        "Short diagnostic report"
      ],
      popular: false
    },
    {
      name: "Standard Audit",
      target: "Operational institutions",
      desc: "A comprehensive institutional review designed for operational institutions seeking quality improvement.",
      features: [
        "Full academic documentation review",
        "Institutional interviews with leadership and faculty",
        "Curriculum and assessment evaluation",
        "Accreditation alignment review",
        "Institutional scorecard",
        "Detailed audit report with recommendations"
      ],
      popular: true
    },
    {
      name: "Comprehensive Audit",
      target: "Full academic transformation",
      desc: "The most extensive institutional evaluation designed for organizations seeking full academic transformation.",
      features: [
        "Multi-dimensional institutional review",
        "Governance and academic leadership evaluation",
        "Curriculum and assessment deep analysis",
        "Faculty capability & scalability assessment",
        "Comprehensive scorecard and gap analysis",
        "Strategic transformation roadmap",
        "Optional advisory support for implementation"
      ],
      popular: false
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full text-sm font-bold tracking-widest mb-6 uppercase">
              Premium Flagship Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Veritas Education Audit™</h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              A structured institutional diagnostic framework assessing academic integrity, governance, and accreditation readiness. We provide evidence-based insights to elevate credibility and support sustainable scaling.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="premium" size="lg" className="h-14 px-8 text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  Request an Institutional Audit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audit Dimensions */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">7 Dimensions of Academic Quality</h2>
            <p className="text-gray-600 text-lg">Our audit examines the critical academic components that determine institutional quality and credibility.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dimensions.map((dim, i) => (
              <motion.div 
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#D4AF37]/30 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-950 text-white flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  {dim.icon}
                </div>
                <h3 className="font-bold text-xl text-blue-950 mb-3">{dim.title}</h3>
                <p className="text-gray-600">{dim.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-blue-950 text-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Audit Deliverables</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Following the audit process, institutions receive a comprehensive suite of insights and actionable documentation.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Executive Summary", desc: "High-level overview highlighting key findings and risks." },
                  { title: "Veritas Institutional Scorecard", desc: "A structured evaluation of performance across all audit dimensions." },
                  { title: "Risk & Gap Analysis", desc: "Detailed identification of areas requiring improvement for accreditation." },
                  { title: "Strategic Roadmap", desc: "Phased implementation plans over 90-day, 6-month, and 12-month timelines." }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="mt-1">
                      <Route className="text-[#D4AF37] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                 <div className="flex items-center justify-between mb-8 border-b border-white/20 pb-4">
                   <h3 className="font-bold text-xl">Scorecard Sample</h3>
                   <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Confidential</span>
                 </div>
                 {[90, 75, 85, 60, 95].map((val, i) => (
                   <div key={i} className="mb-5 last:mb-0">
                     <div className="flex justify-between text-sm mb-2">
                       <span>Dimension 0{i+1}</span>
                       <span className="font-bold">{val}/100</span>
                     </div>
                     <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                       <motion.div 
                         className="bg-[#D4AF37] h-full rounded-full"
                         initial={{ width: 0 }}
                         whileInView={{ width: `${val}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 1, delay: 0.5 }}
                       />
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Tiers */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Engagement Tiers</h2>
            <p className="text-gray-600 text-lg">Institutions may select from three engagement levels depending on the depth of review required.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div 
                key={i}
                className={`flex flex-col rounded-2xl p-8 bg-white border-2 ${tier.popular ? 'border-[#D4AF37] shadow-xl relative scale-105 z-10' : 'border-gray-100 shadow-sm'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-blue-950 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                    Most Selected
                  </div>
                )}
                <h3 className="text-2xl font-bold text-blue-950 mb-2">{tier.name}</h3>
                <p className="text-[#D4AF37] font-medium text-sm mb-6 pb-6 border-b border-gray-100">For {tier.target}</p>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">{tier.desc}</p>
                
                <ul className="space-y-4 mb-10 text-sm text-gray-700">
                  {tier.features.map((feature, idx) => (
                     <li key={idx} className="flex gap-3">
                       <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                       <span>{feature}</span>
                     </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link href="/contact">
                    <Button variant={tier.popular ? 'premium' : 'outline'} className={`w-full ${tier.popular ? '' : 'border-blue-950 text-blue-950'}`}>
                      Select {tier.name}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
