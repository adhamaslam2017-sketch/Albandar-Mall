import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Building2, HardHat, UtensilsCrossed, ArrowLeft, Star, MapPin, Phone, Facebook, Instagram, Youtube, Music } from "lucide-react";

const MallSection = ({ title, description, icon: Icon, to, isLink = false }: { title: string, description: string, icon: any, to?: string, isLink?: boolean }) => {
  const CardContent = (
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
        
        {isLink && (
          <div className="flex items-center gap-2 font-bold text-amber-500">
            <span>دخول القسم</span>
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
          </div>
        )}
      </div>
    </div>
  );

  if (isLink && to) {
    return (
      <Link to={to} className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200" dir="rtl">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-amber-500/5 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-amber-500/5 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-amber-500/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="/images/logo1.png" 
              alt="Al Bandar Mall Logo" 
              className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-amber-500 bg-black p-1 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className="font-serif text-xl font-black tracking-tight text-amber-500 md:text-3xl mb-1 md:mb-2">مجمع البندر مول التجاري</h1>
              <p className="text-xs md:text-sm text-zinc-500 font-medium">وجهتكم الأولى للتسوق والخدمات</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-amber-500"
            >
              <MapPin size={18} className="text-amber-500" />
              <span className="text-sm">خط السده النادره</span>
            </a>
            <div className="flex items-center gap-2 text-zinc-400">
              <Phone size={18} className="text-amber-500" />
              <span className="text-sm" dir="ltr">00967 779 484 807</span>
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
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-2 text-sm font-bold uppercase tracking-widest text-amber-500">
              <Star size={16} fill="currentColor" />
              مرحباً بكم في مجمع البندر مول
              <Star size={16} fill="currentColor" />
            </div>
            
            <h2 className="mb-6 font-serif text-3xl font-black leading-tight text-white md:text-7xl">
              عالم من <span className="text-amber-500">التميز</span> <br />
              في قلب منطقتكم
            </h2>
            
            <p className="mx-auto mb-10 max-w-3xl text-lg md:text-3xl font-medium text-zinc-300 leading-relaxed">
              نجمع لكم بين <span className="text-amber-500 font-bold">الخدمات المتميزة</span>، و<span className="text-amber-500 font-bold">مواد البناء</span> عالية الجودة، و<span className="text-amber-500 font-bold">أشهى المأكولات</span> في مكان واحد. 
              <br />
              <span className="text-white font-bold block mt-4 text-xl md:text-4xl">مجمع البندر مول.. حيث تلتقي الجودة بالثقة.</span>
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
          <h2 className="mb-4 font-serif text-3xl font-black text-white md:text-5xl">أقسام المجمع</h2>
          <p className="text-lg md:text-xl text-zinc-500">تفضل بزيارة أقسامنا المختلفة والمتكاملة</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <MallSection 
              title="مكتب خدمات البندر مول"
              description="نقدم خدمات متميزة وحلولاً متكاملة لرجال الأعمال والخدمات العامة بأعلى معايير الدقة والاحترافية."
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
              title="محلات البندر مول لمواد البناء"
              description="نوفر أجود أنواع مواد البناء والكهرباء والسباكة بأسعار تنافسية وجودة مضمونة لمشاريعكم العمرانية."
              icon={HardHat}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <MallSection 
              title="كافتيريا البندر مول"
              description="استمتع بأشهى وجبات الإفطار الرمضانية، العصائر الطازجة، والحلويات الفاخرة في جو عائلي مميز."
              icon={UtensilsCrossed}
              to="/cafeteria"
              isLink={true}
            />
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
                <span className="font-serif text-xl font-bold text-amber-500">مجمع البندر مول</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                مجمع تجاري متكامل يهدف لتقديم أفضل الخدمات والمنتجات لعملائنا الكرام في المنطقة.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-white">تواصل معنا</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-amber-500"
                  >
                    <MapPin size={18} className="text-amber-500" />
                    <span>مجمع البندر مول، خط السده النادره</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-zinc-400">
                  <Phone size={18} className="text-amber-500" />
                  <span dir="ltr">00967 779 484 807</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-white">تابعنا على</h4>
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
            <p>© {new Date().getFullYear()} مجمع البندر مول التجاري. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
