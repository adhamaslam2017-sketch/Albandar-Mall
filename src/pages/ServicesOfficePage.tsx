import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Cpu, 
  Users, 
  Share2, 
  Zap, 
  ShoppingBag, 
  Printer, 
  Scale, 
  Globe, 
  FileText, 
  Truck, 
  Building2,
  Home,
  Briefcase,
  MessageCircle,
  PhoneCall,
  Languages
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ServicesOfficePage = () => {
  const { t, language, setLanguage } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('services.items.s1.title'),
      icon: Cpu,
      description: t('services.items.s1.desc')
    },
    {
      id: 2,
      title: t('services.items.s2.title'),
      icon: Users,
      description: t('services.items.s2.desc')
    },
    {
      id: 3,
      title: t('services.items.s3.title'),
      icon: Share2,
      description: t('services.items.s3.desc')
    },
    {
      id: 4,
      title: t('services.items.s4.title'),
      icon: Zap,
      description: t('services.items.s4.desc')
    },
    {
      id: 5,
      title: t('services.items.s5.title'),
      icon: ShoppingBag,
      description: t('services.items.s5.desc')
    },
    {
      id: 6,
      title: t('services.items.s6.title'),
      icon: Printer,
      description: t('services.items.s6.desc')
    },
    {
      id: 7,
      title: t('services.items.s7.title'),
      icon: Scale,
      description: t('services.items.s7.desc')
    },
    {
      id: 8,
      title: t('services.items.s8.title'),
      icon: Globe,
      description: t('services.items.s8.desc')
    },
    {
      id: 9,
      title: t('services.items.s9.title'),
      icon: FileText,
      description: t('services.items.s9.desc')
    },
    {
      id: 10,
      title: t('services.items.s10.title'),
      icon: Building2,
      description: t('services.items.s10.desc')
    },
    {
      id: 11,
      title: t('services.items.s11.title'),
      icon: Truck,
      description: t('services.items.s11.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-amber-500/5 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-amber-500/5 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-amber-500/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="/images/logo1.png" 
              alt="Al Bandar Mall Logo" 
              className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-amber-500 bg-black p-0.5 object-contain shadow-[0_0_20px_rgba(245,158,11,0.4)]"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-amber-500">{t('common.mallNameShort')}</span>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 rounded-full bg-zinc-900/50 p-1 border border-white/5">
              <button
                onClick={() => setLanguage('ar')}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                  language === 'ar' 
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {t('common.arabic')}
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                  language === 'en' 
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {t('common.english')}
              </button>
            </div>

            <Link 
              to="/" 
              className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-bold text-amber-500 transition-all hover:bg-amber-500 hover:text-black"
            >
              <Home size={16} className="md:w-5 md:h-5" />
              <span>{t('common.backToHome')}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 font-serif text-3xl font-black text-white md:text-6xl">
            {t('services.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-zinc-400">
            {t('services.desc')}
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-amber-500/10 bg-zinc-900/50 p-6 md:p-8 transition-all hover:border-amber-500/30 hover:bg-zinc-900"
            >
              <div className="mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                <service.icon size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="mb-4 text-lg md:text-xl font-bold text-white group-hover:text-amber-500">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>
              {service.id === 8 && (
                <a 
                  href="#business-services" 
                  className="inline-flex items-center gap-2 text-amber-500 font-bold hover:underline"
                >
                  <span>{t('common.contactUs')}</span>
                  <ArrowRight size={16} className={language === 'ar' ? 'rotate-180' : ''} />
                </a>
              )}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Services Section */}
      <section id="business-services" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
          <div className="absolute left-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
        </div>
        
        <div className="mx-auto max-w-5xl px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] md:rounded-[3rem] border-2 border-amber-500/30 bg-black/40 p-6 md:p-12 backdrop-blur-xl text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mb-8 md:mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full group-hover:bg-amber-500/30 transition-colors" />
                <img 
                  src="/images/bandar1.png" 
                  alt="Business Services Representative" 
                  className="relative h-40 w-40 md:h-64 md:w-64 rounded-[2rem] md:rounded-[2.5rem] object-cover border-2 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-amber-500 text-black p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl">
                  <Briefcase size={20} className="md:w-6 md:h-6" />
                </div>
              </motion.div>

              <div className="text-center md:text-right max-w-xl">
                <h2 className="mb-4 md:mb-6 font-serif text-3xl font-black text-white md:text-6xl leading-tight">
                  {t('common.businessServices').split(' ')[0]} <br />
                  <span className="text-amber-500">{t('common.businessServices').split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  {t('common.businessServicesDesc')}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
              {/* UAE Number */}
              <div className="flex flex-col items-center gap-3 md:gap-4 md:flex-row">
                <div className="flex items-center gap-3 md:gap-4 rounded-full bg-zinc-800 px-6 md:px-8 py-3 md:py-4 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <span className="text-xl md:text-2xl" title={t('common.uae')}>🇦🇪</span>
                  <span className="text-lg md:text-2xl font-black text-amber-500 tracking-wider" dir="ltr">00971 55 576 6456</span>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <a 
                    href="https://wa.me/971555766456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                    title={t('common.whatsappUAE')}
                  >
                    <MessageCircle size={24} className="md:w-7 md:h-7" />
                  </a>
                  <a 
                    href="tel:00971555766456" 
                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-amber-500 text-black transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    title={t('common.callUAE')}
                  >
                    <PhoneCall size={24} className="md:w-7 md:h-7" />
                  </a>
                </div>
              </div>

              {/* Yemen Number */}
              <div className="flex flex-col items-center gap-3 md:gap-4 md:flex-row">
                <div className="flex items-center gap-3 md:gap-4 rounded-full bg-zinc-800 px-6 md:px-8 py-3 md:py-4 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <span className="text-xl md:text-2xl" title={t('common.yemen')}>🇾🇪</span>
                  <span className="text-lg md:text-2xl font-black text-amber-500 tracking-wider" dir="ltr">00967 71 383 3068</span>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <a 
                    href="https://wa.me/967713833068" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                    title={t('common.whatsappYemen')}
                  >
                    <MessageCircle size={24} className="md:w-7 md:h-7" />
                  </a>
                  <a 
                    href="tel:00967713833068" 
                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-amber-500 text-black transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    title={t('common.callYemen')}
                  >
                    <PhoneCall size={24} className="md:w-7 md:h-7" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/10 bg-zinc-950 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-zinc-500">© {new Date().getFullYear()} {t('common.mallName')}. {t('common.allRightsReserved')}</p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesOfficePage;
