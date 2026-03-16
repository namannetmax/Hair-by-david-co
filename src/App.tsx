import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Scissors, 
  Sparkles, 
  Star, 
  Instagram, 
  Clock, 
  ChevronRight,
  Play
} from 'lucide-react';
import { BlurText } from './components/BlurText';
import { ImageSection } from './components/ImageSection';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden liquid-glass flex items-center justify-center">
            <Scissors className="text-white w-6 h-6" />
          </div>
        </div>

        <div className="liquid-glass rounded-full px-6 py-2 flex items-center gap-8">
          {['Home', 'Services', 'Transformation', 'Stylists', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors hidden md:block"
            >
              {item}
            </a>
          ))}
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-all">
            Book Now <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const ServiceCard = ({ title, description, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="liquid-glass rounded-3xl p-8 flex flex-col gap-4 group"
  >
    <div className="w-12 h-12 rounded-2xl liquid-glass-strong flex items-center justify-center group-hover:scale-110 transition-transform">
      <Icon className="text-white w-6 h-6" />
    </div>
    <h3 className="text-2xl font-heading italic text-white">{title}</h3>
    <p className="body-text">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, content, rating }: any) => (
  <div className="liquid-glass rounded-2xl p-8 flex flex-col gap-4">
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-white text-white" />
      ))}
    </div>
    <p className="font-body italic text-white/90 leading-relaxed">"{content}"</p>
    <p className="text-xs font-medium uppercase tracking-widest text-white/40">— {name}</p>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-white/20 overflow-visible">
      <Navbar />

      {/* Section 2: Hero */}
      <section className="relative h-screen min-h-[800px] w-full bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageSection 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920"
            className="h-full w-full"
            overlayClassName="bg-black/40"
            showFades={true}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="section-badge flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="bg-white text-black px-2 py-0.5 rounded-full text-[10px] font-bold mr-1">NEW</span>
            Boutique Excellence in Canada
          </div>
          
          <BlurText 
            text="Sculpting Confidence Through Artistry"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] max-w-4xl mb-8"
          />

          <motion.p 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.8, duration: 1 }}
            className="body-text text-lg md:text-xl max-w-xl mb-12"
          >
            Experience the fusion of high-fashion technique and personalized care in our premium Toronto studio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="liquid-glass-strong px-10 py-4 rounded-full text-white font-medium flex items-center gap-2 hover:scale-105 transition-transform">
              Book Appointment <ArrowUpRight className="w-5 h-5" />
            </button>
            <button className="liquid-glass px-10 py-4 rounded-full text-white/80 font-medium hover:text-white transition-colors">
              View Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section id="how-it-works" className="relative py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center border-y border-white/5">
        <div className="relative z-10 max-w-4xl text-center">
          <div className="section-badge">The Experience</div>
          <h2 className="section-heading mb-8">How We Craft Your Look</h2>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              { step: "01", title: "Consultation", desc: "A deep dive into your vision and hair health." },
              { step: "02", title: "Execution", desc: "Masterful technique meets premium products." },
              { step: "03", title: "Aftercare", desc: "Personalized rituals to maintain your glow." }
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-4">
                <span className="text-5xl font-heading italic text-white/20">{item.step}</span>
                <h4 className="text-xl font-heading italic text-white">{item.title}</h4>
                <p className="body-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Services */}
      <section id="services" className="py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="section-badge">Our Expertise</div>
              <h2 className="section-heading">Curated Services for the Modern Individual</h2>
            </div>
            <p className="body-text max-w-xs">
              From precision cuts to avant-garde color, we offer a full spectrum of premium hair services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Couture Cutting" 
              description="Tailored silhouettes that enhance your natural features."
              icon={Scissors}
            />
            <ServiceCard 
              title="Master Coloring" 
              description="Dimensional tones and seamless transitions."
              icon={Sparkles}
            />
            <ServiceCard 
              title="Balayage Artistry" 
              description="Hand-painted highlights for a sun-kissed glow."
              icon={Play}
            />
            <ServiceCard 
              title="Scalp Rituals" 
              description="Nourishing treatments for optimal hair health."
              icon={Clock}
            />
          </div>
        </div>
      </section>

      {/* Section 6: Before After */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-badge">Transformations</div>
            <h2 className="section-heading">Excellence by Default</h2>
            <p className="body-text mt-4">Enterprise-grade protection comes standard.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="group relative aspect-[16/9] rounded-3xl overflow-hidden liquid-glass">
                <img 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1562322140-8baeececf3df' : '1522337360788-8b13dee7a37e'}?auto=format&fit=crop&q=80&w=1200`} 
                  alt="Transformation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div>
                    <h4 className="text-2xl font-heading italic text-white">Signature Balayage</h4>
                    <p className="body-text">Hand-crafted by Elena Vance</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Our Team */}
      <section id="stylists" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ImageSection 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920"
            saturate={0}
            showFades={true}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="section-badge">The Masters</div>
            <h2 className="section-heading">Meet the Visionaries</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Elena Vance", role: "Creative Director", img: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=800" },
              { name: "Marcus Thorne", role: "Master Colorist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
              { name: "Sophie Chen", role: "Styling Lead", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" }
            ].map((stylist) => (
              <motion.div 
                key={stylist.name}
                whileHover={{ y: -10 }}
                className="flex flex-col gap-6"
              >
                <div className="aspect-[3/4] rounded-3xl overflow-hidden liquid-glass">
                  <img src={stylist.img} alt={stylist.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="text-3xl font-heading italic text-white">{stylist.name}</h4>
                  <p className="body-text uppercase tracking-widest text-xs mt-1">{stylist.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="section-badge">What They Say</div>
            <h2 className="section-heading">Don't take our word for it.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Jenkins" 
              content="The liquid glass aesthetic of the salon is matched only by the precision of their cuts. Truly a world-class experience."
              rating={5}
            />
            <TestimonialCard 
              name="Michael Chen" 
              content="Marcus is a color wizard. I've never felt more confident with my look. The atmosphere is pure luxury."
              rating={5}
            />
            <TestimonialCard 
              name="Amanda Ross" 
              content="A sanctuary in the city. The attention to detail from the moment you walk in is incredible."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Section 9: Instagram */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="section-badge">Social Proof</div>
          <h2 className="section-heading mb-16">Follow the Aesthetic</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square rounded-2xl overflow-hidden liquid-glass cursor-pointer"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${1560066984 + i}?auto=format&fit=crop&q=80&w=400`} 
                  alt="Instagram" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto liquid-glass-strong rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
             <ImageSection src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1920" showFades={false} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-heading italic text-white mb-8">Ready for your <br /> transformation?</h2>
            <p className="body-text text-lg max-w-xl mx-auto mb-12">
              Join our exclusive clientele and experience the pinnacle of boutique hair styling.
            </p>
            <button className="bg-white text-black px-12 py-5 rounded-full text-lg font-medium flex items-center gap-2 mx-auto hover:bg-white/90 transition-all">
              Book Appointment <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 pt-16 pb-8 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Scissors className="text-white w-8 h-8" />
                <span className="font-heading italic text-3xl text-white">Hair by david & co</span>
              </div>
              <p className="body-text max-w-sm">
                Elevating the art of hair styling since 1998. Experience the perfect blend of technique and luxury in the heart of Toronto.
              </p>
            </div>
            <div>
              <h5 className="text-white font-medium mb-6">Studio</h5>
              <ul className="space-y-4 body-text">
                <li>123 Queen Street West</li>
                <li>Toronto, ON M5H 2M9</li>
                <li>+1 (416) 555-0198</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-6">Connect</h5>
              <ul className="space-y-4 body-text">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/20">
            <p>© 2026 Hair by david & co. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
