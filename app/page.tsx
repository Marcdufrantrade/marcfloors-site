import Image from "next/image"
import { Phone, MapPin, ShieldCheck, Hammer, Layers3, Ruler, Star, CheckCircle2, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Layers3,
    title: "Hardwood Installation",
    text: "Professional hardwood installation with clean finishing, proper preparation, and detail-focused workmanship.",
  },
  {
    icon: Hammer,
    title: "Laminate & LVP",
    text: "Durable laminate and luxury vinyl plank installation for a modern, clean, and practical flooring upgrade.",
  },
  {
    icon: Ruler,
    title: "Floor Prep & Leveling",
    text: "Subfloor preparation and leveling to support a long-lasting installation and better final appearance.",
  },
]

const highlights = [
  "Licensed presentation",
  "Free estimates",
  "Sacramento and surrounding areas",
  "Clean, detail-focused installation",
]

const testimonials = [
  {
    name: "Homeowner",
    text: "Professional communication, clean finish, and excellent attention to detail from start to finish.",
  },
  {
    name: "Residential Client",
    text: "The work looked sharp, the schedule was clear, and the entire installation felt well managed.",
  },
  {
    name: "Client",
    text: "Very solid craftsmanship. The final result looked premium and the process was straightforward.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
          <a href="#top" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Marc Floors"
              width={220}
              height={88}
              className="h-11 w-auto object-contain lg:h-14"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#services" className="text-sm font-semibold uppercase tracking-[0.08em] text-zinc-700 hover:text-orange-600">
              Services
            </a>
            <a href="#why-us" className="text-sm font-semibold uppercase tracking-[0.08em] text-zinc-700 hover:text-orange-600">
              Why Us
            </a>
            <a href="#reviews" className="text-sm font-semibold uppercase tracking-[0.08em] text-zinc-700 hover:text-orange-600">
              Reviews
            </a>
            <a href="#contact" className="text-sm font-semibold uppercase tracking-[0.08em] text-zinc-700 hover:text-orange-600">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+12797901575"
              className="flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-orange-600"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                <Phone className="h-4 w-4" />
              </span>
              <span>(279) 790-1575</span>
            </a>

            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-orange-600 px-6 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section
          className="border-b border-zinc-200 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.96), rgba(255,255,255,0.74)), url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Sacramento Flooring Contractor
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-6xl">
                Premium flooring installation in Sacramento.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
                Marc Floors installs hardwood, laminate, and luxury vinyl with clean finishing, strong workmanship, and
                a professional presentation from estimate to completion.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-orange-600 px-6 text-base font-semibold text-white transition hover:bg-orange-700"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="tel:+12797901575"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-300 bg-white px-6 text-base font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                    <span className="text-sm text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-end">
              <div className="w-full rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/60">
                <div className="p-6 lg:p-8">
                  <div className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-700">
                    Fast Contact
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Request an estimate</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    Call or send your project details, flooring type, approximate square footage, and location for a
                    faster response.
                  </p>

                  <div className="mt-6 space-y-4">
                    <a
                      href="tel:+12797901575"
                      className="flex items-center gap-3 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-900 hover:border-orange-300 hover:text-orange-700"
                    >
                      <Phone className="h-4 w-4" />
                      (279) 790-1575
                    </a>

                    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-900">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      Sacramento, CA and surrounding areas
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex h-11 w-full items-center justify-center rounded-md bg-orange-600 text-sm font-semibold text-white transition hover:bg-orange-700"
                    >
                      Get Free Estimate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-700">Services</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Flooring services presented in a clean, professional way.
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              Simple, clear, and strong positioning focused on the work clients actually hire you for.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-zinc-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{service.text}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="why-us" className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <ShieldCheck className="h-6 w-6 text-orange-600" />
                <h3 className="mt-4 text-xl font-semibold text-zinc-950">Professional Presentation</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  A cleaner, more trustworthy brand image that helps clients feel confident contacting you.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <Hammer className="h-6 w-6 text-orange-600" />
                <h3 className="mt-4 text-xl font-semibold text-zinc-950">Detail-Focused Work</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Workmanship, prep, and finishing details positioned as the reason clients should choose Marc Floors.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <Star className="h-6 w-6 text-orange-600" />
                <h3 className="mt-4 text-xl font-semibold text-zinc-950">Lead-Focused Design</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  A simpler homepage built to push visitors toward calling, texting, or requesting an estimate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-700">Reviews</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              A stronger trust section helps turn visitors into leads.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1 text-orange-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-zinc-600">“{item.text}”</p>
                <div className="mt-5 text-sm font-semibold text-zinc-950">{item.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-zinc-200 bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-400">
                  Contact Marc Floors
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Ready to request your estimate?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">
                  Use the button below or call directly to discuss your flooring project in Sacramento and nearby areas.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
                <div className="space-y-4">
                  <a
                    href="tel:+12797901575"
                    className="flex items-center gap-3 rounded-xl border border-zinc-800 px-4 py-3 text-sm font-semibold hover:border-orange-500"
                  >
                    <Phone className="h-4 w-4 text-orange-400" />
                    (279) 790-1575
                  </a>

                  <div className="flex items-center gap-3 rounded-xl border border-zinc-800 px-4 py-3 text-sm font-semibold text-zinc-200">
                    <MapPin className="h-4 w-4 text-orange-400" />
                    Sacramento, California
                  </div>

                  <a
                    href="tel:+12797901575"
                    className="inline-flex h-11 w-full items-center justify-center rounded-md bg-orange-600 text-sm font-semibold text-white transition hover:bg-orange-700"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
