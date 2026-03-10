import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Building2, HardHat, UtensilsCrossed, ArrowLeft, Star, MapPin, Phone, Facebook, Instagram, Youtube, Music, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const MallSection = ({ 
  title, 
  description, 
  icon: Icon, 
  to, 
  isLink = false
}: { 
  title: string, 
  description: string, 
  icon: any, 
  to?: string, 
  isLink?: boolean
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="group relative overflow-hidden rounded-[2.5rem] border-2 border-amber-500/20 bg-zinc-900/50 p-8 transition-all duration-500 hover:border-amber-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-3xl border-2 border-amber-500/20 bg-amber-500/10 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black">
          <Icon size={32} className="md:w-10 md:h-10" />
        </div>
        
        <h3 className="mb-4 font-serif text-2xl md:text-3xl font-bold text-white group-hover:text-amber-500 transition-colors">
          {title}
        </h3>
        
        <p className="mb-6 text-lg text-zinc-400 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col gap-4">
          {isLink && to && (
            <Link to={to} className="flex items-center gap-2 font-bold text-amber-500 hover:text-white transition-colors">
              <span>{t('common.enterSection')}</span>
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2 rtl:group-hover:translate-x-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-amber-500/5 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-amber-500/5 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-amber-500/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="/images/logo1.png" 
              alt="Al Bandar Mall Logo" 
              className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-amber-500 bg-black p-1 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className="font-serif text-xl font-black tracking-tight text-amber-500 md:text-3xl mb-1 md:mb-2">{t('common.mallName')}</h1>
              <p className="text-xs md:text-sm text-zinc-500 font-medium">{t('common.tagline')}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 rounded-full border border-amber-500/20 bg-zinc-900/50 p-1">
              <button
                onClick={() => setLanguage('ar')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                  language === 'ar' 
                    ? 'bg-amber-500 text-black shadow-lg' 
                    : 'text-zinc-400 hover:text-amber-500'
                }`}
              >
                {t('common.arabic')}
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                  language === 'en' 
                    ? 'bg-amber-500 text-black shadow-lg' 
                    : 'text-zinc-400 hover:text-amber-500'
                }`}
              >
                {t('common.english')}
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <a 
                href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-amber-500"
              >
                <MapPin size={18} className="text-amber-500" />
                <span className="text-sm">{t('common.location')}</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-400">
                <Phone size={18} className="text-amber-500" />
                <span className="text-sm" dir="ltr">{t('common.phone')}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/mall/1920/1080?blur=2" 
            alt="Mall Background" 
            className="h-full w-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 font-serif text-6xl font-black leading-tight text-white md:text-9xl">
              {t('landing.heroTitle')}
            </h2>
            
            <p className="mx-auto mb-10 max-w-3xl text-xl md:text-4xl font-medium text-zinc-300 leading-relaxed">
              {t('landing.heroDesc')}
              <br />
              <span className="text-white font-bold block mt-8 text-3xl md:text-7xl px-6 border-x-4 border-amber-500 w-fit mx-auto">
                {t('landing.motto')}
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="h-1 w-24 bg-amber-500 rounded-full" />
              <div className="h-1 w-8 bg-amber-500/30 rounded-full" />
              <div className="h-1 w-24 bg-amber-500 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-black text-white md:text-5xl">{t('landing.sectionsTitle')}</h2>
          <p className="text-lg md:text-xl text-zinc-500">{t('landing.sectionsDesc')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <MallSection 
              title={t('landing.servicesTitle')}
              description={t('landing.servicesDesc')}
              icon={Building2}
              to="/services"
              isLink={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MallSection 
              title={t('landing.constructionTitle')}
              description={t('landing.constructionDesc')}
              icon={HardHat}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <MallSection 
              title={t('landing.cafeteriaTitle')}
              description={t('landing.cafeteriaDesc')}
              icon={UtensilsCrossed}
              to="/cafeteria"
              isLink={true}
            />
          </motion.div>

          {/* Partner Success Banner - New Prominent Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <a 
              href="https://gamma.app/docs/-hh9huowm9ecsegk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border-2 border-amber-500 bg-amber-500/10 p-8 text-center transition-all duration-500 hover:bg-amber-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <h3 className="font-serif text-2xl md:text-4xl font-black text-amber-500 transition-colors duration-500 group-hover:text-black">
                {t('landing.partnerSuccess')}
              </h3>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-black/70">
                <span>{t('common.enterSection')}</span>
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-2 rtl:group-hover:translate-x-2" />
              </div>
            </a>
          </motion.div>

          {/* Cafeteria Promo Video - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-amber-500/20 bg-zinc-900/50 shadow-2xl transition-all duration-500 hover:border-amber-500/50">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
              <video 
                src="public/images/abd alwale.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full aspect-video md:aspect-[21/9] object-cover"
              />
              <div className="absolute bottom-4 right-6 z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-500/80 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500/20">
                  {t('landing.liveCafeteria')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/10 bg-zinc-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/logo1.png" 
                  alt="Al Bandar Mall Logo" 
                  className="h-12 w-12 rounded-full border border-amber-500 bg-black p-0.5"
                  referrerPolicy="no-referrer"
                />
                <span className="font-serif text-xl font-bold text-amber-500">{t('common.mallNameShort')}</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {t('landing.footerDesc')}
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-white">{t('common.contactUs')}</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-amber-500"
                  >
                    <MapPin size={18} className="text-amber-500" />
                    <span>{t('common.mallNameShort')}، {t('common.location')}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-zinc-400">
                  <Phone size={18} className="text-amber-500" />
                  <span dir="ltr">{t('common.phone')}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-white">{t('common.followUs')}</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1S5jfzPtaD/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-amber-500/20 text-zinc-400 transition-colors hover:border-amber-500 hover:text-amber-500">
                  <Facebook size={20} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-amber-500/20 text-zinc-400 transition-colors hover:border-amber-500 hover:text-amber-500">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com/@albandarmall?si=UR1W8BEGYDSK94i9" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-amber-500/20 text-zinc-400 transition-colors hover:border-amber-500 hover:text-amber-500">
                  <Youtube size={20} />
                </a>
                <a href="https://www.tiktok.com/@albandar.mall6?_r=1&_t=ZS-94PNqUssOcH" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-amber-500/20 text-zinc-400 transition-colors hover:border-amber-500 hover:text-amber-500">
                  <Music size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} {t('common.mallNameShort')}. {t('common.allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
