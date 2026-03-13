import React from 'react';
import { motion } from 'motion/react';
import { 
  Scissors, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  ChevronRight, 
  Star,
  Menu,
  X
} from 'lucide-react';
import { Service, Stylist, Transformation, Testimonial } from './types';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants: any = {
    primary: 'bg-primary text-white hover:bg-accent',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
    white: 'bg-white text-salon-text hover:bg-secondary'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl lg:text-6xl font-serif text-salon-text leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

// --- Data ---

const SERVICES: Service[] = [
  { title: "Hair Cutting", description: "Precision cuts tailored to your face shape and hair texture.", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" },
  { title: "Hair Coloring", description: "From subtle gloss to dramatic changes, our colorists are masters of their craft.", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" },
  { title: "Balayage", description: "Hand-painted highlights for a natural, sun-kissed look.", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" },
  { title: "Highlights", description: "Dimensional color that adds brightness and movement.", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800" },
  { title: "Hair Treatments", description: "Nourishing rituals to restore health and shine to your hair.", image: "https://images.unsplash.com/photo-1527799822367-a7885d7f2bb3?auto=format&fit=crop&q=80&w=800" },
  { title: "Keratin", description: "Smoothing treatments for frizz-free, manageable hair.", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800" },
];

const STYLISTS: Stylist[] = [
  {
    name: "Elena Vance",
    role: "Creative Director",
    bio: "With over 15 years of experience in high-fashion editorial styling, Elena brings a visionary approach to every client.",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=800",
    specialties: ["Editorial Cuts", "Avant-Garde Color"]
  },
  {
    name: "Marcus Thorne",
    role: "Master Colorist",
    bio: "Marcus is renowned for his expertise in complex color corrections and seamless balayage techniques.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    specialties: ["Balayage", "Color Correction"]
  }
];

const TRANSFORMATIONS: Transformation[] = [
  { id: '1', before: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=400', stylist: 'Elena Vance', service: 'Full Transformation' },
  { id: '2', before: 'https://images.unsplash.com/photo-1516914915600-896acb9c0373?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400', stylist: 'Marcus Thorne', service: 'Balayage Glow' },
  { id: '3', before: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=400', stylist: 'Elena Vance', service: 'Blonde Ambition' },
  { id: '4', before: 'https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400', stylist: 'Marcus Thorne', service: 'Vivid Red' },
];

const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: "Sarah Jenkins", content: "The best salon experience I've ever had. Elena understood exactly what I wanted even when I couldn't explain it well.", rating: 5 },
  { id: '2', name: "Michael Chen", content: "Marcus is a color wizard. My hair has never looked this vibrant and healthy.", rating: 5 },
  { id: '3', name: "Amanda Ross", content: "A true boutique experience. The attention to detail and atmosphere are unmatched in Toronto.", rating: 5 },
];

const INSTAGRAM_POSTS = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1527799822367-a7885d7f2bb3?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=400",
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-salon-bg/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="text-primary w-6 h-6" />
            <span className="font-serif text-2xl tracking-tight">Hair by david & co</span>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            {['Services', 'Transformations', 'Stylists', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <Button variant="primary" className="!px-6 !py-2 text-sm">Book Now</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-salon-bg pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8 text-center">
            {['Services', 'Transformations', 'Stylists', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button variant="primary">Book Appointment</Button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920" 
            alt="Salon Interior" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white/80 uppercase tracking-[0.3em] text-sm font-semibold mb-6 block"
            >
              Est. 1998 • Downtown Toronto
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif text-white leading-[0.9] mb-8"
            >
              Hair by <br />
              <span className="italic">david & co</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 font-light mb-10 max-w-lg leading-relaxed"
            >
              25+ years of style and self expression.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="white">
                Book Appointment
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Salon Introduction */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                subtitle="Our Philosophy" 
                title="Artistry in every strand, luxury in every detail." 
              />
              <p className="text-lg text-salon-text/70 leading-relaxed mb-8">
                At Lumière, we don't just cut hair; we craft identities. Our boutique studio in the heart of Toronto is designed to be a sanctuary where creativity meets technical excellence.
              </p>
              <p className="text-lg text-salon-text/70 leading-relaxed mb-10">
                Each appointment begins with a deep consultation, ensuring that your vision is translated into a style that complements your lifestyle and enhances your natural beauty.
              </p>
              <Button variant="outline">Learn More About Us</Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000" 
                alt="Stylist at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-salon-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            centered 
            subtitle="What We Offer" 
            title="Curated Services" 
          />
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                  <p className="text-salon-text/60 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-primary font-semibold text-sm uppercase tracking-wider cursor-pointer group/link">
                    View Details 
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section id="transformations" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="Before & After" 
            title="Hair Transformations" 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRANSFORMATIONS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img src={item.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-xs uppercase tracking-widest font-bold mb-1">{item.service}</p>
                      <p className="text-sm italic">by {item.stylist}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-semibold uppercase tracking-tighter text-accent">Transformation {item.id}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Stylists */}
      <section id="stylists" className="py-32 bg-salon-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="The Team" 
            title="Meet Our Masters" 
          />
          <div className="space-y-32">
            {STYLISTS.map((stylist, index) => (
              <div 
                key={stylist.name}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 w-full"
                >
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <span className="text-primary font-serif italic text-xl mb-2 block">{stylist.role}</span>
                  <h3 className="text-5xl font-serif mb-6">{stylist.name}</h3>
                  <p className="text-lg text-salon-text/70 leading-relaxed mb-8">
                    {stylist.bio}
                  </p>
                  <div className="mb-10">
                    <p className="text-xs uppercase tracking-widest font-bold text-accent mb-4">Specialties</p>
                    <div className="flex flex-wrap gap-3">
                      {stylist.specialties.map(s => (
                        <span key={s} className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-black/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline">Book with {stylist.name.split(' ')[0]}</Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            centered 
            subtitle="Client Love" 
            title="Kind Words" 
          />
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-salon-bg/50 border border-black/5"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xl font-serif italic mb-8 leading-relaxed">"{t.content}"</p>
                <p className="font-semibold uppercase tracking-widest text-xs">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-32 bg-salon-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <SectionHeading 
              subtitle="Social Proof" 
              title="Follow Our Journey" 
            />
            <a href="#" className="hidden md:flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <Instagram className="w-5 h-5" /> @lumieresalon
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSTAGRAM_POSTS.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <img src={img} alt="Instagram Post" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location and Hours */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <SectionHeading 
                subtitle="Visit Us" 
                title="Location & Hours" 
              />
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-salon-bg flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Address</h4>
                    <p className="text-salon-text/70">123 Queen Street West<br />Toronto, ON M5H 2M9</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-salon-bg flex items-center justify-center shrink-0">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Hours</h4>
                    <ul className="text-salon-text/70 space-y-1">
                      <li className="flex justify-between w-64"><span>Mon - Fri</span> <span>10:00 - 20:00</span></li>
                      <li className="flex justify-between w-64"><span>Saturday</span> <span>09:00 - 18:00</span></li>
                      <li className="flex justify-between w-64"><span>Sunday</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-salon-bg flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Contact</h4>
                    <p className="text-salon-text/70">+1 (416) 555-0198<br />hello@lumieresalon.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <Button variant="primary">Get Directions</Button>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] md:h-auto border border-black/5">
              {/* Placeholder for Map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.263850362521!2d-79.3853176!3d43.651070!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2a33d0393%3A0x90588a4380e185bb!2sQueen%20St%20W%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1710320000000!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-salon-text text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <Scissors className="text-accent w-8 h-8" />
                <span className="font-serif text-4xl tracking-tight">Hair by david & co</span>
              </div>
              <p className="text-white/60 max-w-sm leading-relaxed mb-8">
                Elevating the art of hair styling since 1998. Experience the perfect blend of technique and luxury in the heart of Toronto.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-salon-text transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                {/* Add more social icons if needed */}
              </div>
            </div>
            <div>
              <h5 className="font-serif text-xl mb-6">Quick Links</h5>
              <ul className="space-y-4 text-white/60">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#transformations" className="hover:text-white transition-colors">Transformations</a></li>
                <li><a href="#stylists" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Book Now</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-serif text-xl mb-6">Newsletter</h5>
              <p className="text-white/60 mb-6">Join our list for style tips and exclusive offers.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/10 border border-white/20 rounded-full px-6 py-2 w-full focus:outline-none focus:border-accent"
                />
                <button className="bg-accent text-white px-4 py-2 rounded-full hover:bg-primary transition-colors">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
            <p>© 2026 Hair by david & co. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
