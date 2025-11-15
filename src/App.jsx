import { useMemo } from 'react'
import { Building2, MapPin, Cube, Monitor, Sparkles, MessageSquare, LayoutDashboard, Rocket, ShieldCheck, Clock, Layers, Cpu } from 'lucide-react'

function StatBadge({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-gray-700 ring-1 ring-gray-200">
      <Icon className="h-4 w-4 text-blue-600" />
      <span>{label}</span>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, desc, accent = 'blue' }) {
  const accentClasses = useMemo(() => ({
    blue: 'from-blue-500/10 to-cyan-500/10 ring-blue-200/60',
    violet: 'from-violet-500/10 to-fuchsia-500/10 ring-violet-200/60',
    emerald: 'from-emerald-500/10 to-teal-500/10 ring-emerald-200/60',
    amber: 'from-amber-500/10 to-orange-500/10 ring-amber-200/60',
  })[accent], [accent])

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b ${accentClasses} p-6 ring-1 transition hover:shadow-xl`}> 
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/0 via-white/5 to-white/10" />
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-white ring-1 ring-gray-200 p-3 shadow-sm">
          <Icon className="h-6 w-6 text-gray-800" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function Pill({ children }) {
  return <span className="rounded-full bg-white/60 px-3 py-1 text-xs ring-1 ring-gray-200 text-gray-700">{children}</span>
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 grid place-items-center text-white font-bold">U</div>
            <span className="font-semibold">Unada Labs</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#offerings" className="hover:text-gray-900">What We Offer</a>
            <a href="#clients" className="hover:text-gray-900">Who We Serve</a>
            <a href="#reasons" className="hover:text-gray-900">Why Us</a>
            <a href="#mission" className="hover:text-gray-900">Mission & Vision</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white text-sm shadow hover:bg-blue-700">
            <Rocket className="h-4 w-4" /> Start a project
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(600px_200px_at_20%_0%,#93c5fd_15%,transparent),radial-gradient(700px_250px_at_80%_0%,#c4b5fd_10%,transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <StatBadge icon={Sparkles} label="AI-first PropTech" />
              <StatBadge icon={ShieldCheck} label="Enterprise-grade" />
              <StatBadge icon={Clock} label="Fast turnaround" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Premium digital sales experiences for real estate developers
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-2xl">
              We combine interactive geospatial maps, immersive 3D environments, and AI-driven content generation to showcase projects with clarity, speed, and world‑class presentation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#offerings" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white shadow hover:bg-black">
                Explore capabilities
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 ring-1 ring-gray-200 text-gray-900 hover:bg-gray-50">
                See it in action
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="offerings" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">What We Offer</h2>
          <p className="mt-2 text-gray-600 max-w-3xl">Modular, production-ready experiences that scale from single-site launches to multi-city portfolios.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={MapPin}
            title="Vista 360 – Interactive Map"
            desc="A browser-based satellite map displaying all projects on one screen with metro lines, landmarks, commute routes, floor plans, and 360° site views."
            accent="blue"
          />
          <FeatureCard
            icon={Cube}
            title="Immersive 3D Experience"
            desc="Unreal Engine walkthroughs to explore amenities, units, landscapes, and masterplans across touchscreen, projector, PC, and VR."
            accent="violet"
          />
          <FeatureCard
            icon={Monitor}
            title="Digital Tabletop Display"
            desc="A large touchscreen table for sales galleries showing masterplans, inventory, comparisons, and surroundings—replacing brochures."
            accent="emerald"
          />
          <FeatureCard
            icon={Sparkles}
            title="AI Render Engine & Visuals"
            desc="AI-generated 12K renders, interior mood boards, dynamic brochures, narration videos, and brand-consistent visuals (FLUX, SDXL, LoRA)."
            accent="amber"
          />
          <FeatureCard
            icon={MessageSquare}
            title="AI Sales Companion"
            desc="An intelligent agent trained on project data that answers buyer questions on WhatsApp, web widgets, and inside experience centers."
            accent="blue"
          />
          <FeatureCard
            icon={LayoutDashboard}
            title="Digital Experience Centers"
            desc="Curved LED rooms, transparent displays, multi-screen immersive environments, and interactive screens with complete integration."
            accent="violet"
          />
        </div>
      </section>

      {/* Who We Serve */}
      <section id="clients" className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Who We Serve</h2>
              <p className="mt-2 text-gray-600">Trusted by top developers and consultants across India and the Gulf.</p>
            </div>
            <div className="hidden md:flex gap-2">
              <Pill>Adani Realty</Pill>
              <Pill>Sattva</Pill>
              <Pill>Puravankara</Pill>
              <Pill>Casagrand</Pill>
              <Pill>Goyal & Co.</Pill>
              <Pill>Brigade</Pill>
              <Pill>Divyasree</Pill>
              <Pill>Panchshil</Pill>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Adani Realty","Sattva","Puravankara","Casagrand","Goyal & Co.","Brigade","Divyasree","Panchshil"].map((c) => (
              <div key={c} className="flex items-center justify-center rounded-xl bg-white ring-1 ring-gray-200 h-20 text-sm font-medium text-gray-700">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Developers Choose Us */}
      <section id="reasons" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Why Developers Choose Us</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Cpu} title="AI-first workflows" desc="Automated pipelines accelerate content, analysis, and personalization across the sales journey." accent="blue" />
          <FeatureCard icon={Rocket} title="Fast turnaround" desc="Rapid prototyping and reusable modules shorten go-to-market timelines." accent="violet" />
          <FeatureCard icon={Layers} title="Scalable modules" desc="Pick-and-choose components that adapt to project size and budget." accent="emerald" />
          <FeatureCard icon={Building2} title="Hardware + software" desc="End-to-end delivery—from code to on-ground experience center setup." accent="amber" />
          <FeatureCard icon={Sparkles} title="Premium UX" desc="Polished interfaces, motion, and storytelling designed for decision clarity." accent="blue" />
          <FeatureCard icon={ShieldCheck} title="Enterprise-ready" desc="Security, reliability, and maintainability for leading developers." accent="violet" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-8">
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">To simplify and elevate the real estate sales journey with intelligent digital tools.</p>
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-8">
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">To be the global leader in AI-driven real estate experiences—online and on-ground.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to transform your sales experience?</h2>
          <p className="mt-3 text-gray-700">Share your project details and we’ll recommend the right modules for your next launch.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <a href="mailto:hello@unadalabs.com" className="rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700">Email hello@unadalabs.com</a>
            <a href="#" className="rounded-lg bg-white px-5 py-3 ring-1 ring-gray-200 text-gray-900 hover:bg-gray-50">Schedule a demo</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Unada Labs. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Pill>Mumbai</Pill>
            <Pill>Bengaluru</Pill>
            <Pill>Hyderabad</Pill>
            <Pill>Gujarat</Pill>
            <Pill>Gulf</Pill>
          </div>
        </div>
      </footer>
    </div>
  )
}
