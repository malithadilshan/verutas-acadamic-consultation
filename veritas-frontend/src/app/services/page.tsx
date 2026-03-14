"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Building2, ClipboardCheck, BookOpen, Compass, Users, GraduationCap, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "startup",
      icon: <Building2 className="w-10 h-10 text-[#D4AF37]" />,
      title: "1. Education Startup & Institutional Consulting",
      desc: "We support new and growing education institutions in building strong academic foundations.",
      includes: [
        "Education venture structuring",
        "Academic governance framework design",
        "Program portfolio strategy",
        "Institutional policy development",
        "Academic operations blueprinting"
      ],
      for: "New educational ventures, startup institutes, and evolving organizations requiring robust operational and academic structures."
    },
    {
      id: "accreditation",
      icon: <ClipboardCheck className="w-10 h-10 text-[#D4AF37]" />,
      title: "2. Accreditation & Qualification Alignment",
      desc: "Expert guidance on national and international framework alignment to secure credibility and recognition.",
      includes: [
        "Mapping to required frameworks (NVQ, SLQF, RQF)",
        "Outcome-Based Education (OBE) integration",
        "Accreditation readiness audits",
        "Quality assurance documentation"
      ],
      for: "Institutes aiming for local or international certification, university partnerships, or pathway recognitions."
    },
    {
      id: "curriculum",
      icon: <BookOpen className="w-10 h-10 text-[#D4AF37]" />,
      title: "3. Curriculum & Program Architecture",
      desc: "Designing academically sound, industry-aligned programs that drive student success.",
      includes: [
        "Syllabus & curriculum development",
        "Learning outcome mapping",
        "Notional hour structuring",
        "Assessment framework design",
        "Module progression mapping",
        "Diploma-to-degree articulation pathways"
      ],
      for: "Academic heads, curriculum designers, and institutions looking to upgrade course architecture to meet industry standard demands."
    },
    {
      id: "training",
      icon: <Users className="w-10 h-10 text-[#D4AF37]" />,
      title: "4. Institutional Training & Capacity Building",
      desc: "Building academic capability within institutions to ensure sustainable, high-quality implementation.",
      includes: [
        "Framework Orientation",
        "Outcome-Based Education (OBE)",
        "Competency-Based Training Models",
        "Academic Documentation & QA",
        "Assessment Moderation Practices",
        "Faculty Development Workshops"
      ],
      for: "Academic teams, marketing and sales divisions of educational entities aiming to thoroughly understand and communicate programmatic values."
    },
    {
      id: "pathway",
      icon: <GraduationCap className="w-10 h-10 text-[#D4AF37]" />,
      title: "5. Academic Pathway & Higher Ed Advisory",
      desc: "We provide selective, evidence-based guidance for families and students navigating higher education.",
      includes: [
        "Degree program selection strategy",
        "Country comparison analysis",
        "Qualification pathway planning",
        "Career-aligned academic mapping",
        "Risk and readiness assessments"
      ],
      for: "Students, postgraduates, and families requiring expert, unbiased academic counseling beyond generic agency offerings."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-950 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Core Services
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Veritas's services are tailor-made to provide professionals with current, complete, and accurate in-depth details suited perfectly for your institution's strategic goals.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                id={service.id}
                className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-start`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full lg:w-1/3 shrink-0">
                  <div className="bg-blue-50/50 p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center border border-blue-100/50">
                    <div className="mb-6 bg-white p-5 rounded-full shadow-sm">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-blue-950 mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                </div>
                
                <div className="w-full lg:w-2/3 flex flex-col justify-center py-4">
                  <h3 className="text-xl font-bold text-blue-950 mb-6 border-b pb-2">What it includes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-950">
                    <h4 className="font-bold text-blue-950 mb-2">Who is this for?</h4>
                    <p className="text-gray-700">{service.for}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Veritas Audit Box out section */}
            <motion.div 
               className="bg-blue-950 text-white rounded-3xl p-10 md:p-16 overflow-hidden relative shadow-2xl mt-10"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <div className="absolute right-0 bottom-0 opacity-10 blur-xl transform translate-x-1/4 translate-y-1/4">
                <Compass className="w-96 h-96" />
              </div>
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#D4AF37] text-sm font-bold tracking-widest mb-6">
                  PREMIUM SERVICE
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Veritas Education Audit™</h2>
                <p className="text-lg text-white/80 mb-10">
                  A structured institutional diagnostic framework assessing academic integrity, governance, and accreditation readiness across three engagement tiers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit">
                    <Button variant="premium" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg">
                      Explore Audit Dimensions & Tiers
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
