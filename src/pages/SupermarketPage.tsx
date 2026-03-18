import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  CheckCircle2, 
  Truck, 
  Tag, 
  MapPin, 
  PhoneCall, 
  ArrowRight,
  Home,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SupermarketPage = () => {
  const { t } = useLanguage();

  const features = [
    { 
      icon: Zap, 
      title: t('supermarket.features.f1.title'), 
      desc: t('supermarket.features.f1.desc'),
      color: "bg-emerald-500"
    },
    { 
      icon: ShieldCheck, 
      title: t('supermarket.features.f2.title'), 
      desc: t('supermarket.features.f2.desc'),
      color: "bg-blue-500"
    },
    { 
      icon: Tag, 
      title: t('supermarket.features.f3.title'), 
      desc: t('supermarket.features.f3.desc'),
      color: "bg-amber-500"
    },
    { 
      icon: Truck, 
      title: t('supermarket.features.f4.title'), 
      desc: t('supermarket.features.f4.desc'),
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-white selection:bg-amber-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-black transition-transform group-hover:rotate-12">
              <Home size={20} />
            </div>
            <span className="font-serif text-xl font-black tracking-tighter">{t('common.mallNameShort')}</span>
          </Link>
          
          <Link 
            to="/"
            className="rounded-full bg-white/5 px-6 py-2 text-sm font-bold transition-all hover:bg-amber-500 hover:text-black"
          >
            {t('common.backToHome')}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-zinc-950" />
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500 text-black shadow-[0_0_40px_rgba(245,158,11,0.3)]"
          >
            <ShoppingBag size={40} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-serif text-5xl font-black md:text-7xl"
          >
            {t('supermarket.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-zinc-400 md:text-2xl"
          >
            {t('supermarket.desc')}
          </motion.p>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-[2.5rem] border border-white/5 bg-zinc-900/50 p-8 transition-all hover:border-amber-500/50 hover:bg-zinc-900"
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] border border-amber-500/20 bg-black p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
            
            <div className="relative z-10">
              <h2 className="mb-8 font-serif text-4xl font-black md:text-6xl">{t('common.contactUs')}</h2>
              
              <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                <a 
                  href={`tel:${t('common.phone')}`}
                  className="group flex items-center gap-4 rounded-full bg-amber-500 px-10 py-5 text-xl font-black text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
                >
                  <PhoneCall size={28} />
                  <span>{t('common.phone')}</span>
                </a>

                <a 
                  href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-full border-2 border-white/10 bg-white/5 px-10 py-5 text-xl font-black text-white transition-all hover:bg-white hover:text-black"
                >
                  <MapPin size={28} className="text-amber-500 group-hover:text-black" />
                  <span>{t('common.viewMap')}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center">
        <p className="text-zinc-500">
          © {new Date().getFullYear()} {t('common.mallName')}. {t('common.allRightsReserved')}
        </p>
      </footer>
    </div>
  );
};

export default SupermarketPage;
