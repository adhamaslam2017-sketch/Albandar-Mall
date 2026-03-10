import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Utensils, Coffee, MapPin, Clock, Phone, Star, Moon, Sun, ChevronLeft, ChevronRight, MessageCircle, PhoneCall, Briefcase, Trophy, Gift, CheckCircle, Facebook, Instagram, Twitter, Youtube, Music, Globe, CreditCard, Wallet, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "../context/LanguageContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MenuItem = ({ name, image, onOrder }: { name: string, image: string, onOrder: () => void }) => {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col items-center"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-amber-500/20 bg-zinc-900 transition-all duration-500 group-hover:border-amber-500 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <button 
            onClick={onOrder}
            className="rounded-full bg-amber-500 px-6 py-2 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            {t('common.orderNow')}
          </button>
        </div>
      </div>
      <h4 className="mt-4 text-center font-serif text-lg md:text-xl font-bold text-zinc-100 transition-colors duration-300 group-hover:text-amber-500">
        {name}
      </h4>
    </motion.div>
  );
};

export default function CafeteriaPage() {
  const { t, language, setLanguage } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<{name: string, image: string} | null>(null);
  const [copied, setCopied] = useState(false);

  const handleOrder = (item: {name: string, image: string}) => {
    setSelectedItem(item);
  };

  const closeOrderModal = () => {
    setSelectedItem(null);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('1134011677');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const confirmOrderOnWhatsApp = () => {
    if (!selectedItem) return;
    const message = language === 'ar' 
      ? `السلام عليكم، أريد طلب: ${selectedItem.name}`
      : `Hello, I would like to order: ${selectedItem.name}`;
    window.open(`https://wa.me/967779484807?text=${encodeURIComponent(message)}`, '_blank');
  };

  const categories = [
    {
      id: "buffet",
      title: t('cafeteria.menu.buffet.title'),
      description: t('cafeteria.menu.buffet.desc'),
      icon: Utensils,
      items: [
        { name: "بوفيه إفطار متكامل", image: "/images/aftarmtakaml.webp" },
        { name: "ركن الشوربات الساخنة", image: "/images/shorbah.webp" },
        { name: "ركن المقبلات والسلطات", image: "/images/salads.webp" },
        { name: "ركن الأطباق الرئيسية", image: "/images/atbagraeseah.webp" }
      ]
    },
    {
      id: "platters",
      title: t('cafeteria.menu.platters.title'),
      description: t('cafeteria.menu.platters.desc'),
      icon: Gift,
      items: [
        { name: "صحن إفطار ملكي", image: "/images/sahnaftarmalake.webp" },
        { name: "بوكس السمبوسة المشكل", image: "/images/sambosmoshakl.webp" },
        { name: "صحن حلويات عائلي", image: "/images/sahnhaloeataile.webp" },
        { name: "بوكس العصائر المشكل", image: "" },
        { name: "وجبة إفطار متكاملة", image: "/images/wajbataftarramadan.webp" }
      ]
    },
    {
      id: "samosa",
      title: t('cafeteria.menu.samosa.title'),
      description: t('cafeteria.menu.samosa.desc'),
      icon: Utensils,
      items: [
        { name: "سمبوسه دقه لحم", image: "/images/sad2.webp" },
        { name: "سمبوسه بالجبن", image: "/images/smbosjobn.webp" },
        { name: "سمبوسه بالعدس", image: "/images/sambosaadas.webp" },
        { name: "سمبوسه بالبطاط", image: "/images/sambosabatato.webp" }
      ]
    },
    {
      id: "falafel",
      title: t('cafeteria.menu.falafel.title'),
      description: t('cafeteria.menu.falafel.desc'),
      icon: Sun,
      items: [
        { name: "طعميه شاميه", image: "/images/tameahshame.webp" },
        { name: "طعميه بلدي", image: "/images/tameabalade.webp" },
        { name: "طعميه مصري", image: "/images/tameamasre.webp" }
      ]
    },
    {
      id: "juices",
      title: t('cafeteria.menu.juices.title'),
      description: t('cafeteria.menu.juices.desc'),
      icon: Coffee,
      items: [
        { name: "فيمتو", image: "/images/femto.webp" },
        { name: "اسبيشل", image: "/images/aspeshal.webp" },
        { name: "فخفخينه", image: "/images/fakfakina.webp" },
        { name: "ملكي", image: "/images/malake.webp" },
        { name: "عرائسي", image: "/images/araese.webp" },
        { name: "فواكه مشكل", image: "/images/foakhmoshakal.webp" },
        { name: "مارينا", image: "/images/marina.webp" },
        { name: "خلطه عريس", image: "/images/kaltatares.webp" },
        { name: "خلطه عربي", image: "/images/kaltaarabe.webp" },
        { name: "كوكتيل", image: "/images/koktel.webp" },
        { name: "فراوله", image: "/images/farolah.webp" },
        { name: "جوافه", image: "/images/joafah.webp" },
        { name: "اناناس", image: "/images/ananas.webp" },
        { name: "مجموع", image: "" },
        { name: "خوخ", image: "/images/kok.webp" },
        { name: "حليب بالموز", image: "/images/moas.webp" },
        { name: "ليم", image: "/images/lem.webp" },
        { name: "مكسرات", image: "" }
      ]
    },
    {
      id: "desserts",
      title: t('cafeteria.menu.desserts.title'),
      description: t('cafeteria.menu.desserts.desc'),
      icon: Star,
      items: [
        { name: "أصابع زينب", image: "/images/asabezaenab.webp" },
        { name: "بقلاوه", image: "/images/bglaoah.webp" },
        { name: "رواني", image: "/images/roane.webp" },
        { name: "شعيريه", image: "/images/shaereah.webp" },
        { name: "بسبوسه", image: "/images/basbosah.webp" },
        { name: "زنود الست", image: "/images/sanoodalset.webp" },
        { name: "مشكل ملكي", image: "/images/moshkalmalakehaloeat.webp" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-amber-500/10 bg-black/80 backdrop-blur-md">
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

          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-1 text-xs md:text-sm font-bold text-amber-500 transition-colors hover:text-white"
            >
              <ChevronRight size={16} className="rtl:rotate-0 rotate-180" />
              <span>{t('common.backToMall')}</span>
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 rounded-full border border-amber-500/20 bg-zinc-900/50 p-0.5">
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold transition-all ${
                  language === 'ar' 
                    ? 'bg-amber-500 text-black' 
                    : 'text-zinc-400 hover:text-amber-500'
                }`}
              >
                {t('common.arabic')}
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold transition-all ${
                  language === 'en' 
                    ? 'bg-amber-500 text-black' 
                    : 'text-zinc-400 hover:text-amber-500'
                }`}
              >
                {t('common.english')}
              </button>
            </div>

            <div className="hidden items-center gap-6 lg:flex">
              <a href="#home" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">{t('cafeteria.nav.home')}</a>
              <a href="#menu" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">{t('cafeteria.nav.menu')}</a>
              <a href="#winners" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">{t('cafeteria.nav.winners')}</a>
              <a href="#gallery" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">{t('cafeteria.nav.gallery')}</a>
              <a href="#contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">{t('cafeteria.nav.contact')}</a>
            </div>

            <a 
              href="tel:+967779484807"
              className="rounded-full bg-amber-500 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
            >
              {t('common.orderNow')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/ramadan/1920/1080?blur=4" 
            alt="Ramadan Background" 
            className="h-full w-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-amber-500/30 blur-3xl" />
              <img 
                src="/images/logo1.png" 
                alt="Al Bandar Mall Logo Large" 
                className="relative h-32 w-32 rounded-full border-4 border-amber-500 bg-black p-1 shadow-[0_0_60px_rgba(245,158,11,0.6)] md:h-48 md:w-48"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-500"
          >
            <Moon size={14} />
            {t('cafeteria.hero.ramadanKareem')}
            <Star size={14} fill="currentColor" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 font-serif text-4xl font-black leading-[1.1] text-white md:text-8xl"
          >
            {t('cafeteria.hero.title')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mb-8 max-w-2xl text-base text-zinc-400 md:text-xl"
          >
            {t('cafeteria.hero.desc')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#menu" className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-amber-500 px-8 py-4 text-lg font-bold text-black transition-all hover:pr-10">
              {t('cafeteria.hero.viewMenu')}
              <div className="absolute right-4 translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 rtl:left-4 rtl:right-auto rtl:-translate-x-4 rtl:group-hover:translate-x-0">
                {language === 'ar' ? '←' : '→'}
              </div>
            </a>
            <a 
              href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-amber-500/30 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              {t('cafeteria.hero.location')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="mb-20 md:mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 font-serif text-4xl font-black text-white md:text-8xl"
          >
            {t('cafeteria.menu.title')}
          </motion.h2>
          <p className="text-lg md:text-xl text-zinc-500">{t('cafeteria.menu.desc')}</p>
          <div className="mx-auto mt-8 h-1 w-32 md:w-40 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-20 md:mb-32">
            <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-[1.5rem] md:rounded-[2rem] border-2 border-amber-500/20 bg-amber-500/5 text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                <category.icon size={32} className="md:w-12 md:h-12" />
              </div>
              <h3 className="mb-4 font-serif text-3xl md:text-5xl font-black text-amber-500">{category.title}</h3>
              <p className="max-w-2xl text-lg md:text-xl text-zinc-400">{category.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
              {category.items.map((item, index) => (
                <MenuItem 
                  key={index} 
                  name={item.name} 
                  image={item.image} 
                  onOrder={() => handleOrder(item)}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Competition Section */}
      <section className="relative overflow-hidden bg-black py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-amber-500 bg-amber-500/10 text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            >
              <Trophy size={40} />
            </motion.div>
            <h2 className="mb-4 font-serif text-3xl font-black text-white md:text-7xl">{t('cafeteria.competition.title')}</h2>
            <div className="mx-auto h-1 w-24 md:w-32 bg-amber-500" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Prizes Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] md:rounded-[2.5rem] border-2 border-amber-500/30 bg-zinc-900/50 p-6 md:p-12 backdrop-blur-sm"
            >
              <h3 className="mb-6 md:mb-8 flex items-center gap-3 font-serif text-2xl md:text-3xl font-bold text-amber-500">
                <Gift className="text-amber-500" />
                {t('cafeteria.competition.prizes')}
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-amber-500/10 bg-black/40 p-4 md:p-6 transition-transform hover:scale-[1.02]">
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm text-zinc-400">{t('cafeteria.competition.prize1')}</span>
                    <span className="text-lg md:text-2xl font-black text-white">{t('cafeteria.competition.ramadan10')}</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-amber-500">$100</div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-amber-500/10 bg-black/40 p-4 md:p-6 transition-transform hover:scale-[1.02]">
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm text-zinc-400">{t('cafeteria.competition.prize2')}</span>
                    <span className="text-lg md:text-2xl font-black text-white">{t('cafeteria.competition.ramadan20')}</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-amber-500">$100</div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border-2 border-amber-500 bg-amber-500/10 p-4 md:p-6 transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm text-amber-500/60 font-bold">{t('cafeteria.competition.grandPrize')}</span>
                    <span className="text-lg md:text-2xl font-black text-white">{t('cafeteria.competition.ramadan29')}</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-amber-500">$200</div>
                </div>
              </div>
            </motion.div>

            {/* Conditions Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] md:rounded-[2.5rem] border-2 border-zinc-800 bg-zinc-900/30 p-6 md:p-12 backdrop-blur-sm"
            >
              <h3 className="mb-6 md:mb-8 flex items-center gap-3 font-serif text-2xl md:text-3xl font-bold text-white">
                <CheckCircle className="text-amber-500" />
                {t('cafeteria.competition.conditions')}
              </h3>
              <ul className="space-y-6 md:space-y-8">
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black font-black text-sm md:text-base">1</div>
                  <div>
                    <p className="text-lg md:text-xl font-bold text-white">{t('cafeteria.competition.cond1Title')}</p>
                    <p className="text-sm md:text-base text-zinc-400">{t('cafeteria.competition.cond1Desc')} </p>
                    <a 
                      href="https://www.facebook.com/share/1S5jfzPtaD/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 mt-2 font-bold text-amber-500 hover:underline text-sm md:text-base"
                    >
                      <Facebook size={16} />
                      Albandar Mall
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black font-black text-sm md:text-base">2</div>
                  <div>
                    <p className="text-lg md:text-xl font-bold text-white">{t('cafeteria.competition.cond2Title')}</p>
                    <p className="text-sm md:text-base text-zinc-400">{t('cafeteria.competition.cond2Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black font-black text-sm md:text-base">3</div>
                  <div>
                    <p className="text-lg md:text-xl font-bold text-white">{t('cafeteria.competition.cond3Title')}</p>
                    <p className="text-sm md:text-base text-zinc-400">{t('cafeteria.competition.cond3Desc')}</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Services Section */}
      <section className="relative overflow-hidden bg-zinc-900 py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-500 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-amber-500 blur-3xl" />
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
                  {t('common.businessServices')}
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

      {/* Gallery Section */}
      <section id="gallery" className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">{t('cafeteria.gallery.title')}</h2>
            <div className="mx-auto h-1 w-24 bg-amber-500" />
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-4">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="/images/smbosjobn.webp" 
                className="w-full rounded-2xl border border-amber-500/20 object-cover"
                referrerPolicy="no-referrer"
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="/images/sahnhaloeataile.webp" 
                className="w-full rounded-2xl border border-amber-500/20 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="/images/fakfakina.webp" 
                className="w-full rounded-2xl border border-amber-500/20 object-cover"
                referrerPolicy="no-referrer"
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="/images/tameamasre.webp" 
                className="w-full rounded-2xl border border-amber-500/20 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-4">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="/images/tameabalade.webp" 
                className="w-full rounded-2xl border border-amber-500/20 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Winners Section */}
      <section id="winners" className="relative overflow-hidden bg-zinc-900 py-24">
        <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">{t('cafeteria.winners.title')}</h2>
            <div className="mx-auto h-1 w-24 bg-amber-500" />
            <p className="mt-6 text-zinc-400">{t('cafeteria.winners.desc')}</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-black/40 p-8 text-center backdrop-blur-sm md:p-12"
            >
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
              
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-amber-500/20 blur-2xl" />
                  <img 
                    src="/images/moalad1.webp" 
                    alt="أمير معمر المولد" 
                    className="relative h-48 w-48 rounded-full border-4 border-amber-500 object-cover shadow-[0_0_40px_rgba(245,158,11,0.4)]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-black shadow-lg">
                    <Trophy size={24} />
                  </div>
                </div>
              </div>

              <div className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-2 text-sm font-bold uppercase tracking-widest text-amber-500">
                {t('cafeteria.competition.prize1')} - {t('cafeteria.competition.ramadan10')}
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white md:text-4xl">{t('cafeteria.winners.grandPrizeWinner')}</h3>
              <div className="mb-6 font-serif text-4xl font-black text-amber-500 md:text-6xl">
                {t('cafeteria.winners.winnerName')}
              </div>

              <p className="text-lg text-zinc-400">
                {t('cafeteria.winners.congrats')}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-tighter">{t('cafeteria.winners.ramadan')}</div>
                </div>
                <div className="border-r border-white/10 text-center">
                  <div className="text-3xl font-bold text-white">#1</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-tighter">{t('cafeteria.winners.drawNumber')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-zinc-900/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <a 
              href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                <MapPin size={32} />
              </div>
              <h4 className="mb-2 font-bold text-white group-hover:text-amber-500 transition-colors">{t('cafeteria.info.location')}</h4>
              <p className="text-sm text-zinc-400">{t('cafeteria.info.locationDesc')}</p>
            </a>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <Clock size={32} />
              </div>
              <h4 className="mb-2 font-bold text-white">{t('cafeteria.info.hours')}</h4>
              <p className="text-sm text-zinc-400">{t('cafeteria.info.hoursDesc')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <a 
                href="tel:+967779484807"
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-colors hover:bg-amber-500 hover:text-black shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                title={t('common.orderNow')}
              >
                <Phone size={32} />
              </a>
              <h4 className="mb-2 font-bold text-white">{t('cafeteria.info.reservation')}</h4>
              <p className="text-sm text-zinc-400">{t('cafeteria.info.reservationDesc')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <Star size={32} />
              </div>
              <h4 className="mb-2 font-bold text-white">{t('cafeteria.info.quality')}</h4>
              <p className="text-sm text-zinc-400">{t('cafeteria.info.qualityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-500 to-amber-600 p-12 text-center text-black"
        >
          <h2 className="mb-6 font-serif text-4xl font-black md:text-6xl">{t('cafeteria.cta.title')}</h2>
          <p className="mb-10 text-lg font-medium opacity-90">{t('cafeteria.cta.desc')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+967779484807"
              className="rounded-full bg-black px-10 py-4 text-lg font-bold text-amber-500 transition-transform hover:scale-105 active:scale-95 shadow-xl"
            >
              {t('cafeteria.cta.callNow')}
            </a>
            <a 
              href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border-2 border-black/20 bg-transparent px-10 py-4 text-lg font-bold text-black transition-colors hover:bg-black/5"
            >
              {t('cafeteria.cta.viewMap')}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/10 py-12 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-center gap-3">
            <img 
              src="/images/logo1.png" 
              alt="Al Bandar Mall Logo Footer" 
              className="h-10 w-10 rounded-full border border-amber-500 bg-black p-0.5 object-contain shadow-[0_0_10px_rgba(245,158,11,0.2)]"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-lg font-bold text-amber-500">{t('cafeteria.hero.title')}</span>
          </div>
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} {t('cafeteria.hero.title')}. {t('common.allRightsReserved')}</p>
          <div className="mt-4 flex justify-center gap-4 text-zinc-400 text-sm">
            <a href="#" className="flex flex-col items-center gap-1 hover:text-amber-500 transition-colors">
              <span>انستغرام</span>
              <Instagram size={14} />
            </a>
            <a href="#" className="flex flex-col items-center gap-1 hover:text-amber-500 transition-colors">
              <span>تويتر</span>
              <Twitter size={14} />
            </a>
            <a 
              href="https://www.facebook.com/share/1S5jfzPtaD/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 hover:text-amber-500 transition-colors"
            >
              <span>فيسبوك</span>
              <Facebook size={14} />
            </a>
            <a 
              href="https://youtube.com/@albandarmall?si=UR1W8BEGYDSK94i9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 hover:text-amber-500 transition-colors"
            >
              <span>يوتيوب</span>
              <Youtube size={14} />
            </a>
            <a 
              href="https://www.tiktok.com/@albandar.mall6?_r=1&_t=ZS-94PNqUssOcH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 hover:text-amber-500 transition-colors"
            >
              <span>تيك توك</span>
              <Music size={14} />
            </a>
          </div>
        </div>
      </footer>

      {/* Order Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOrderModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border-2 border-amber-500/30 bg-zinc-900 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={closeOrderModal}
                className="absolute right-6 top-6 text-zinc-500 transition-colors hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                  <Utensils size={32} />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white">{t('cafeteria.order.title')}</h3>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t('cafeteria.order.selectedItem')}</span>
                  <p className="mt-1 text-xl font-bold text-amber-500">{selectedItem.name}</p>
                </div>

                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
                  <div className="mb-4 flex items-center gap-3 text-amber-500">
                    <CreditCard size={24} />
                    <span className="font-bold">{t('cafeteria.order.paymentMethod')}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-400">{t('cafeteria.order.accountName')}</p>
                    <div className="flex items-center justify-between rounded-xl bg-black/40 p-4 border border-amber-500/10">
                      <span className="font-mono text-xl font-black text-white tracking-wider">1134011677</span>
                      <button 
                        onClick={handleCopy}
                        className="text-xs font-bold text-amber-500 hover:underline"
                      >
                        {copied ? 'COPIED!' : 'COPY'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-zinc-400">
                  <div className="mt-1 shrink-0 rounded-full bg-amber-500/20 p-1 text-amber-500">
                    <Wallet size={14} />
                  </div>
                  <p>{t('cafeteria.order.instructions')}</p>
                </div>

                <button 
                  onClick={confirmOrderOnWhatsApp}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-500 py-4 text-lg font-bold text-black transition-all hover:bg-amber-600 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  <MessageCircle size={24} />
                  {t('cafeteria.order.confirmOrder')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
