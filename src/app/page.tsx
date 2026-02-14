import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import {
  Leaf,
  Server,
  ShieldCheck,
  Cloud,
  Network,
  Wind,
  Zap,
  Download,
  MessageCircle,
  Monitor,
  CircleCheckBig,
  MapPin,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory text-warm-gray">
      {/* ─── Navigation ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage/20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/SAIDICanadaLogo.png"
              alt="SAIDI Canada"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-forest">
              SAIDI <span className="text-sage font-normal">Canada</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-warm-gray hover:text-forest transition-colors text-sm font-medium">About</a>
            <a href="#services" className="text-warm-gray hover:text-forest transition-colors text-sm font-medium">Services</a>
            <a href="#sustainability" className="text-warm-gray hover:text-forest transition-colors text-sm font-medium">Sustainability</a>
            <a href="#contact" className="text-warm-gray hover:text-forest transition-colors text-sm font-medium">Contact</a>
            <a
              href="#contact"
              className="bg-forest text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-forest-light transition-colors"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Canadian Rocky Mountains with pristine blue lake"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-sage/20 text-white border border-sage/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Lower-Carbon Infrastructure for Canada
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Powering the Future,{" "}
              <span className="text-sage-light">Reducing the Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-xl">
              SAIDI Canada delivers enterprise-grade data centre services powered by natural gas — the
              cleanest-burning fossil fuel — combined with Canada&apos;s natural cooling advantage. High performance, lower footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-white text-forest px-8 py-4 rounded-lg text-base font-semibold hover:bg-sage-light hover:text-forest-dark transition-colors text-center"
              >
                Explore Our Services
              </a>
              <a
                href="#sustainability"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Our Green Commitment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About / Mission ─── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-forest font-semibold text-sm uppercase tracking-wider">About SAIDI Canada</span>
              <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">
                Data Centre Excellence, Rooted in Canadian Values
              </h2>
              <p className="text-warm-gray leading-relaxed mb-5">
                Canada is uniquely positioned to support the global data centre industry. With a naturally cool
                climate that dramatically reduces cooling costs, abundant natural gas resources, and some of the
                strongest environmental regulations in the world, our nation provides a responsible foundation
                for digital infrastructure.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8">
                SAIDI Canada&apos;s facilities are powered primarily by liquefied natural gas (LNG) — the
                cleanest-burning fossil fuel, producing up to 50% less CO2 than coal and 30% less than oil.
                Combined with Canada&apos;s cold climate and our commitment to operational efficiency, we
                deliver data centre services with a significantly lower carbon footprint than the industry norm.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-forest">~50%</div>
                  <div className="text-sm text-warm-gray mt-1">Less CO2 Than Coal</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-forest">99.99%</div>
                  <div className="text-sm text-warm-gray mt-1">Uptime SLA</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-forest">24/7</div>
                  <div className="text-sm text-warm-gray mt-1">Expert Support</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-forest">Tier III+</div>
                  <div className="text-sm text-warm-gray mt-1">Facility Design</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80"
                alt="Northern lights over Canadian landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sustainability Section ─── */}
      <section id="sustainability" className="py-24 bg-mint">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
            <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">
              A Cleaner Approach to Data Centre Energy
            </h2>
            <p className="text-warm-gray max-w-3xl mx-auto leading-relaxed">
              The data centre industry accounts for roughly 1-1.5% of global electricity consumption, and that
              figure is rising. We&apos;re honest about the challenge: our facilities run on LNG, a fossil fuel.
              But it&apos;s the cleanest-burning one available, and when combined with Canada&apos;s natural cooling
              advantage and our efficiency-first engineering, it represents a meaningful step toward lower-carbon
              digital infrastructure — today, not someday.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf size={40} />,
                title: "LNG: A Cleaner Bridge Fuel",
                description:
                  "Natural gas produces up to 50% less CO2 than coal and 30% less than oil, with significantly lower particulate and sulphur emissions. While not zero-carbon, LNG is widely recognized as a critical transition fuel as the industry works toward renewable alternatives. We chose it deliberately as the cleanest option available at scale today.",
              },
              {
                icon: <Wind size={40} />,
                title: "Free-Air & Water Cooling",
                description:
                  "Canada's naturally cool climate allows us to use free-air cooling for much of the year, cutting energy consumption by up to 40% compared to traditional mechanical cooling. This is where our real environmental advantage lies — a benefit no amount of engineering can replicate in warmer climates.",
              },
              {
                icon: <Zap size={40} />,
                title: "Efficiency-First Engineering",
                description:
                  "We target a Power Usage Effectiveness (PUE) of 1.2 or lower — well below the industry average of 1.58. Combined with LNG's lower emissions profile, this means every unit of computing we deliver has a smaller carbon footprint than most competitors worldwide.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-sage/10"
              >
                <div className="text-forest mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-forest-dark mb-3">{item.title}</h3>
                <p className="text-warm-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 relative rounded-2xl overflow-hidden h-72 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&q=80"
              alt="Moraine Lake in Banff National Park surrounded by forest"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-forest-dark/50 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Canada&apos;s Climate Is Our Greatest Asset</h3>
                <p className="text-white/90 max-w-2xl text-lg">
                  Our northern location isn&apos;t just scenic — it&apos;s our most powerful efficiency tool.
                  Cold ambient temperatures slash cooling demands naturally, and when paired with LNG&apos;s
                  lower emissions profile, the result is one of the lowest-carbon data centre operations achievable
                  with today&apos;s proven technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">
              Comprehensive Data Centre Services
            </h2>
            <p className="text-warm-gray max-w-3xl mx-auto leading-relaxed">
              From colocation to fully managed infrastructure, SAIDI Canada provides the full spectrum of data
              centre services — all delivered with our commitment to sustainability and operational excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Server size={36} />,
                title: "Colocation Services",
                description:
                  "Secure, climate-controlled rack space in our Tier III+ facilities. Bring your own hardware and benefit from our resilient power, cooling, and connectivity infrastructure. Flexible options from single racks to private cages and suites.",
              },
              {
                icon: <Cloud size={36} />,
                title: "Cloud & Hybrid Solutions",
                description:
                  "Private cloud, public cloud, and hybrid architectures tailored to your workload. Our cloud infrastructure runs on energy-efficient hardware powered by LNG, delivering lower-carbon computing compared to coal or oil-dependent alternatives.",
              },
              {
                icon: <Monitor size={36} />,
                title: "Managed Hosting",
                description:
                  "Fully managed dedicated servers and virtual environments. We handle provisioning, patching, monitoring, and maintenance so you can focus on your core business without worrying about infrastructure.",
              },
              {
                icon: <Download size={36} />,
                title: "Disaster Recovery & Backup",
                description:
                  "Business continuity solutions with geographically diverse recovery sites across Canada. Automated backups, replication, and tested failover procedures ensure your data is always protected and recoverable.",
              },
              {
                icon: <Network size={36} />,
                title: "Network & Connectivity",
                description:
                  "Carrier-neutral facilities with access to major Canadian and international network providers. High-bandwidth, low-latency connections with redundant fibre paths and direct peering with leading cloud platforms.",
              },
              {
                icon: <ShieldCheck size={36} />,
                title: "Security & Compliance",
                description:
                  "Physical security with biometric access, 24/7 surveillance, and multi-layer perimeter controls. Compliance support for Canadian privacy regulations including PIPEDA, provincial health data requirements, and SOC 2.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-light-gray rounded-2xl p-8 hover:bg-forest hover:text-white transition-all duration-300 border border-sage/10 hover:border-forest"
              >
                <div className="text-forest group-hover:text-sage-light mb-5 transition-colors">{service.icon}</div>
                <h3 className="text-xl font-bold text-forest-dark group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-warm-gray group-hover:text-white/85 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Managed Services ─── */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80"
                alt="Sunset over a Canadian lake with forests"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-forest font-semibold text-sm uppercase tracking-wider">Full-Service Support</span>
              <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">Managed Services</h2>
              <p className="text-warm-gray leading-relaxed mb-8">
                Let our team of certified engineers manage your infrastructure end-to-end. We offer proactive
                monitoring, rapid incident response, and strategic guidance — all backed by Canadian-based support
                staff available around the clock.
              </p>
              <div className="space-y-5">
                {[
                  "Infrastructure provisioning, scaling, and optimization",
                  "24/7 proactive monitoring and incident response",
                  "Security management and threat detection",
                  "Backup management and disaster recovery testing",
                  "Operating system and application patching",
                  "Compliance auditing and reporting",
                  "Capacity planning and performance tuning",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CircleCheckBig size={20} className="text-forest mt-0.5 shrink-0" />
                    <span className="text-warm-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why SAIDI Canada ─── */}
      <section className="py-24 bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">The SAIDI Difference</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-6">Why Choose SAIDI Canada</h2>
            <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine world-class data centre operations with transparent environmental
              responsibility — delivering the reliability your business demands with a lower carbon footprint.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf size={32} />,
                title: "Lower Carbon",
                description: "LNG power plus Canada's natural cooling means a significantly smaller carbon footprint than the industry average.",
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Canadian Data Sovereignty",
                description: "Your data stays in Canada, protected by some of the world's strongest privacy laws.",
              },
              {
                icon: <Zap size={32} />,
                title: "Reliable Power",
                description: "Redundant LNG-powered generation with full backup systems for consistent, dependable uptime.",
              },
              {
                icon: <MessageCircle size={32} />,
                title: "Canadian Support",
                description: "Bilingual, expert support teams based in Canada — available 24/7/365.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl text-sage-light mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest font-semibold text-sm uppercase tracking-wider">Getting Started</span>
            <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Consult & Design",
                description:
                  "We begin with a thorough assessment of your requirements — capacity, connectivity, compliance, and sustainability goals. Our team designs a solution tailored to your needs.",
              },
              {
                step: "02",
                title: "Deploy & Connect",
                description:
                  "Your infrastructure is provisioned in our secure, energy-efficient facilities. We handle everything from rack installation to network cross-connects, ensuring a seamless go-live.",
              },
              {
                step: "03",
                title: "Manage & Scale",
                description:
                  "With 24/7 monitoring and support, we keep your operations running at peak performance. As your needs grow, we scale your resources seamlessly — always sustainably.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-mint text-forest text-2xl font-bold rounded-full mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-forest-dark mb-3">{item.title}</h3>
                <p className="text-warm-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
            alt="Canadian mountain landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-dark/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Lower-Carbon Digital Infrastructure?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Join the growing number of Canadian businesses choosing cleaner data centre solutions.
            Let&apos;s discuss how SAIDI Canada can power your operations with a smaller footprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-forest px-10 py-4 rounded-lg text-base font-semibold hover:bg-sage-light transition-colors"
            >
              Contact Our Team
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-forest font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">Contact Us</h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Whether you&apos;re looking for colocation, cloud solutions, or managed services, our team is ready
              to help you find the right sustainable infrastructure solution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center text-forest shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-dark mb-1">Location</h3>
                  <p className="text-warm-gray">Canada</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center text-forest shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-dark mb-1">Email</h3>
                  <p className="text-warm-gray">info@saidicanada.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center text-forest shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-dark mb-1">Support</h3>
                  <p className="text-warm-gray">24/7 Canadian-based technical support</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-forest-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/SAIDICanadaLogo.png"
                  alt="SAIDI Canada"
                  width={44}
                  height={44}
                  className="object-contain brightness-0 invert"
                />
                <span className="text-2xl font-bold">
                  SAIDI <span className="text-sage-light font-normal">Canada</span>
                </span>
              </div>
              <p className="text-white/70 leading-relaxed max-w-md">
                Lower-carbon data centre services for Canadian businesses. High performance, smaller environmental
                footprint, powered by LNG and Canada&apos;s natural cooling advantage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#services" className="hover:text-sage-light transition-colors">Colocation</a></li>
                <li><a href="#services" className="hover:text-sage-light transition-colors">Cloud Solutions</a></li>
                <li><a href="#services" className="hover:text-sage-light transition-colors">Managed Hosting</a></li>
                <li><a href="#services" className="hover:text-sage-light transition-colors">Disaster Recovery</a></li>
                <li><a href="#services" className="hover:text-sage-light transition-colors">Network Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#about" className="hover:text-sage-light transition-colors">About Us</a></li>
                <li><a href="#sustainability" className="hover:text-sage-light transition-colors">Sustainability</a></li>
                <li><a href="#contact" className="hover:text-sage-light transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} SAIDI Canada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
