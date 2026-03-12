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
              <span className="bg-amber-500 text-black font-black block mt-12 text-2xl md:text-7xl py-4 px-10 rounded-[2rem] shadow-[0_0_50px_rgba(245,158,11,0.4)] w-fit mx-auto leading-relaxed md:leading-[1.4] transition-transform duration-300 hover:scale-105 cursor-default">
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
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative overflow-hidden bg-zinc-900/30 py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[80%] rounded-full bg-amber-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 font-serif text-4xl font-black text-amber-500 md:text-6xl">{t('landing.about.title')}</h2>
            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">{t('landing.about.subtitle')}</h3>
            <div className="mx-auto h-1 w-24 bg-amber-500 rounded-full mb-8" />
            <p className="text-xl font-bold text-amber-500/90 italic">{t('landing.about.motto')}</p>
          </motion.div>

          <div className="grid gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-lg leading-relaxed text-zinc-300 text-justify">
                {t('landing.about.description')}
              </p>
            </motion.div>

            <div className="space-y-12">
              <h4 className="text-2xl font-bold text-white border-r-4 border-amber-500 pr-4">{t('landing.about.sectionsTitle')}</h4>
              
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-3xl border border-amber-500/10 bg-black/40 p-8 transition-colors hover:border-amber-500/30">
                  <h5 className="mb-4 text-xl font-bold text-amber-500">{t('landing.about.s1Title')}</h5>
                  <p className="mb-4 text-sm text-zinc-400">{t('landing.about.s1Desc')}</p>
                  <ul className="space-y-3 text-sm text-zinc-300">
                    <li className="flex gap-2"><span className="text-amber-500">•</span> {t('landing.about.s1Item1')}</li>
                    <li className="flex gap-2"><span className="text-amber-500">•</span> {t('landing.about.s1Item2')}</li>
                    <li className="flex gap-2"><span className="text-amber-500">•</span> {t('landing.about.s1Item3')}</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-amber-500/10 bg-black/40 p-8 transition-colors hover:border-amber-500/30">
                  <h5 className="mb-4 text-xl font-bold text-amber-500">{t('landing.about.s2Title')}</h5>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {t('landing.about.s2Desc')}
                  </p>
                </div>

                <div className="rounded-3xl border border-amber-500/10 bg-black/40 p-8 transition-colors hover:border-amber-500/30">
                  <h5 className="mb-4 text-xl font-bold text-amber-500">{t('landing.about.s3Title')}</h5>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {t('landing.about.s3Desc')}
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] bg-amber-500 p-12 text-black"
            >
              <h4 className="mb-8 text-3xl font-black">{t('landing.about.whyTitle')}</h4>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="h-1 w-12 bg-black/20" />
                  <p className="font-bold">{t('landing.about.why1')}</p>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-12 bg-black/20" />
                  <p className="font-bold">{t('landing.about.why2')}</p>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-12 bg-black/20" />
                  <p className="font-bold">{t('landing.about.why3')}</p>
                </div>
              </div>
              <p className="mt-12 text-center text-xl font-black border-t border-black/10 pt-8">
                {t('landing.about.conclusion')}
              </p>
            </motion.div>
          </div>
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
