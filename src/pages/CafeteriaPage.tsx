import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Utensils, Coffee, MapPin, Clock, Phone, Star, Moon, Sun, ChevronLeft, ChevronRight, MessageCircle, PhoneCall, Briefcase, Trophy, Gift, CheckCircle, Facebook, Instagram, Twitter, Youtube, Music } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MenuItem = ({ name, image }: { name: string, image: string }) => (
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
    </div>
    <h4 className="mt-4 text-center font-serif text-xl font-bold text-zinc-100 transition-colors duration-300 group-hover:text-amber-500">
      {name}
    </h4>
  </motion.div>
);

export default function CafeteriaPage() {
  const categories = [
    {
      id: "buffet",
      title: "بوفيه رمضان المفتوح",
      description: "استمتع بتشكيلة لا حصر لها من الأطباق التقليدية والعالمية في بوفيهنا اليومي.",
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
      title: "صحون إفطار خاصة",
      description: "بوكسات وصحون مشكلة تناسب الجمعات العائلية والإفطار الجماعي.",
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
      title: "سمبوسة مقرمشة",
      description: "سمبوسة محضرة يومياً بحشوات متنوعة مقلية حتى الكمال الذهبي.",
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
      title: "طعمية ساخنة",
      description: "طعمية (فلافل) طازجة ومقرمشة مع خلطتنا السرية من البهارات ",
      icon: Sun,
      items: [
        { name: "طعميه شاميه", image: "/images/tameahshame.webp" },
        { name: "طعميه بلدي", image: "/images/tameabalade.webp" },
        { name: "طعميه مصري", image: "/images/tameamasre.webp" }
      ]
    },
    {
      id: "juices",
      title: "عصائر رمضانية",
      description: "تشكيلة واسعة من العصائر الطازجة والرمضانية لتنعش إفطارك.",
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
      title: "حلويات فاخرة",
      description: "تشكيلة من الحلويات الرمضانية وسلطات الفواكه المنعشة والمعدة بكل حب.",
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
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200" dir="rtl">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-amber-500/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo1.png" 
              alt="Al Bandar Mall Logo" 
              className="h-14 w-14 rounded-full border-2 border-amber-500 bg-black p-0.5 object-contain shadow-[0_0_20px_rgba(245,158,11,0.4)]"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-xl font-bold tracking-tight text-amber-500">البندر مول</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm font-bold text-amber-500 transition-colors hover:text-white">العودة للمول</Link>
            <a href="#home" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">الرئيسية</a>
            <a href="#menu" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">قائمة الإفطار</a>
            <a href="#winners" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">الفائزين</a>
            <a href="#gallery" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">معرض الصور</a>
            <a href="#contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">اتصل بنا</a>
          </div>
          <a 
            href="tel:+967779484807"
            className="rounded-full bg-amber-500 px-6 py-2 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
          >
            اطلب الآن
          </a>
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
            رمضان كريم
            <Star size={14} fill="currentColor" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 font-serif text-6xl font-black leading-[1.1] text-white md:text-8xl"
          >
            كافتيريا <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">مجمع البندر مول</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl"
          >
            استمتع بأشهى وجبات الإفطار الرمضانية التقليدية. سمبوسة مقرمشة، طعمية ساخنة، عصائر طازجة، وحلويات لذيذة تروي عطشك وتجمل مائدتك.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#menu" className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-amber-500 px-8 py-4 text-lg font-bold text-black transition-all hover:pr-10">
              استعرض المنيو
              <div className="absolute right-4 translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                ←
              </div>
            </a>
            <a 
              href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-amber-500/30 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              موقعنا في المول
            </a>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 font-serif text-6xl font-black text-white md:text-8xl"
          >
            قائمة الإفطار
          </motion.h2>
          <p className="text-xl text-zinc-500">استمتع بتشكيلة واسعة من الأصناف الرمضانية الطازجة</p>
          <div className="mx-auto mt-10 h-1 w-40 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-32">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] border-2 border-amber-500/20 bg-amber-500/5 text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                <category.icon size={48} />
              </div>
              <h3 className="mb-4 font-serif text-5xl font-black text-amber-500">{category.title}</h3>
              <p className="max-w-2xl text-xl text-zinc-400">{category.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {category.items.map((item, index) => (
                <MenuItem key={index} name={item.name} image={item.image} />
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
            <h2 className="mb-4 font-serif text-5xl font-black text-white md:text-7xl">مسابقة كافتيريا البندر مول</h2>
            <div className="mx-auto h-1 w-32 bg-amber-500" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Prizes Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] border-2 border-amber-500/30 bg-zinc-900/50 p-8 md:p-12 backdrop-blur-sm"
            >
              <h3 className="mb-8 flex items-center gap-3 font-serif text-3xl font-bold text-amber-500">
                <Gift className="text-amber-500" />
                جوائز المسابقة
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-amber-500/10 bg-black/40 p-6 transition-transform hover:scale-[1.02]">
                  <div className="flex flex-col">
                    <span className="text-zinc-400">السحب الأول</span>
                    <span className="text-2xl font-black text-white">10 رمضان</span>
                  </div>
                  <div className="text-3xl font-black text-amber-500">$100</div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-amber-500/10 bg-black/40 p-6 transition-transform hover:scale-[1.02]">
                  <div className="flex flex-col">
                    <span className="text-zinc-400">السحب الثاني</span>
                    <span className="text-2xl font-black text-white">20 رمضان</span>
                  </div>
                  <div className="text-3xl font-black text-amber-500">$100</div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border-2 border-amber-500 bg-amber-500/10 p-6 transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <div className="flex flex-col">
                    <span className="text-amber-500/60 font-bold">الجائزة الكبرى</span>
                    <span className="text-2xl font-black text-white">29 رمضان</span>
                  </div>
                  <div className="text-4xl font-black text-amber-500">$200</div>
                </div>
              </div>
            </motion.div>

            {/* Conditions Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] border-2 border-zinc-800 bg-zinc-900/30 p-8 md:p-12 backdrop-blur-sm"
            >
              <h3 className="mb-8 flex items-center gap-3 font-serif text-3xl font-bold text-white">
                <CheckCircle className="text-amber-500" />
                شروط المسابقة
              </h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black font-black">1</div>
                  <div>
                    <p className="text-xl font-bold text-white">متابعة الصفحة الرسمية</p>
                    <p className="text-zinc-400">متابعة صفحة البندر مول على الفيسبوك: </p>
                    <a 
                      href="https://www.facebook.com/share/1S5jfzPtaD/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 mt-2 font-bold text-amber-500 hover:underline"
                    >
                      <Facebook size={18} />
                      Albandar Mall
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black font-black">2</div>
                  <div>
                    <p className="text-xl font-bold text-white">التفاعل مع المنشور</p>
                    <p className="text-zinc-400">عمل متابعة للحساب وترك تعليق على منشور المسابقة.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black font-black">3</div>
                  <div>
                    <p className="text-xl font-bold text-white">شراء الفطور</p>
                    <p className="text-zinc-400">يجب شراء وجبة الإفطار من الكافتيريا للدخول في السحب.</p>
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
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border-2 border-amber-500/30 bg-black/40 p-8 md:p-12 backdrop-blur-xl text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
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
                  className="relative h-48 w-48 md:h-64 md:w-64 rounded-[2.5rem] object-cover border-2 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-black p-3 rounded-2xl shadow-xl">
                  <Briefcase size={24} />
                </div>
              </motion.div>

              <div className="text-center md:text-right max-w-xl">
                <h2 className="mb-6 font-serif text-4xl font-black text-white md:text-6xl leading-tight">
                  لخدمات <br />
                  <span className="text-amber-500">رجال الأعمال</span>
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  نقدم خدمات متميزة وحلولاً متكاملة تلبي تطلعاتكم. <br />
                  يرجى التواصل عبر الأرقام التالية للحصول على خدماتنا المتميزة.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-8">
              {/* UAE Number */}
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="flex items-center gap-4 rounded-full bg-zinc-800 px-8 py-4 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <span className="text-2xl" title="الإمارات العربية المتحدة">🇦🇪</span>
                  <span className="text-2xl font-black text-amber-500 tracking-wider" dir="ltr">00971 55 576 6456</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/971555766456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                    title="واتساب الإمارات"
                  >
                    <MessageCircle size={28} />
                  </a>
                  <a 
                    href="tel:00971555766456" 
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-black transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    title="اتصال هاتفي الإمارات"
                  >
                    <PhoneCall size={28} />
                  </a>
                </div>
              </div>

              {/* Yemen Number */}
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="flex items-center gap-4 rounded-full bg-zinc-800 px-8 py-4 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <span className="text-2xl" title="اليمن">🇾🇪</span>
                  <span className="text-2xl font-black text-amber-500 tracking-wider" dir="ltr">00967 71 383 3068</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/967713833068" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                    title="واتساب اليمن"
                  >
                    <MessageCircle size={28} />
                  </a>
                  <a 
                    href="tel:00967713833068" 
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-black transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    title="اتصال هاتفي اليمن"
                  >
                    <PhoneCall size={28} />
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
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">من داخل الكافتيريا</h2>
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
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">نتائج السحب الرمضاني</h2>
            <div className="mx-auto h-1 w-24 bg-amber-500" />
            <p className="mt-6 text-zinc-400">نبارك للفائزين في سحوباتنا اليومية خلال شهر رمضان المبارك</p>
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
                السحب الأول - 10 رمضان
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white md:text-4xl">الفائز بالجائزة الكبرى</h3>
              <div className="mb-6 font-serif text-4xl font-black text-amber-500 md:text-6xl">
                أمير معمر المولد
              </div>

              <p className="text-lg text-zinc-400">
                تهانينا الحارة للأخ أمير على فوزه في السحب الأول. <br />
                حظاً أوفر للبقية في السحوبات القادمة!
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-tighter">رمضان</div>
                </div>
                <div className="border-r border-white/10 text-center">
                  <div className="text-3xl font-bold text-white">#1</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-tighter">رقم السحب</div>
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
              <h4 className="mb-2 font-bold text-white group-hover:text-amber-500 transition-colors">الموقع</h4>
              <p className="text-sm text-zinc-400">مجمع البندر مول،خط السده النادره</p>
            </a>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <Clock size={32} />
              </div>
              <h4 className="mb-2 font-bold text-white">ساعات العمل</h4>
              <p className="text-sm text-zinc-400">من الساعه 12 ظهرا حتى أذان المغرب</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <a 
                href="tel:+967779484807"
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-colors hover:bg-amber-500 hover:text-black shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                title="اتصل بنا الآن"
              >
                <Phone size={32} />
              </a>
              <h4 className="mb-2 font-bold text-white">للحجز والطلب</h4>
              <p className="text-sm text-zinc-400">اتصل بنا: 00967779484807</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <Star size={32} />
              </div>
              <h4 className="mb-2 font-bold text-white">الجودة</h4>
              <p className="text-sm text-zinc-400">نستخدم أفضل المكونات الطازجة يومياً</p>
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
          <h2 className="mb-6 font-serif text-4xl font-black md:text-6xl">لا تفوت إفطار اليوم!</h2>
          <p className="mb-10 text-lg font-medium opacity-90">نحن بانتظارك في مجمع البندر مول لنقدم لك أفضل تجربة إفطار رمضانية.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+967779484807"
              className="rounded-full bg-black px-10 py-4 text-lg font-bold text-amber-500 transition-transform hover:scale-105 active:scale-95 shadow-xl"
            >
              اطلب عبر الهاتف
            </a>
            <a 
              href="https://maps.app.goo.gl/SuiFTerCrNsxvg7GA?g_st=awb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border-2 border-black/20 bg-transparent px-10 py-4 text-lg font-bold text-black transition-colors hover:bg-black/5"
            >
              عرض الموقع على الخريطة
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
            <span className="font-serif text-lg font-bold text-amber-500">كافتيريا البندر مول</span>
          </div>
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} كافتيريا مجمع البندر مول. جميع الحقوق محفوظة.</p>
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
    </div>
  );
}
