/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Utensils, Coffee, MapPin, Clock, Phone, Star, Moon, Sun } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MenuCard = ({ title, description, icon: Icon, price }: { title: string, description: string, icon: any, price?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-black p-6 transition-all hover:border-amber-500/50"
  >
    <div className="absolute -right-4 -top-4 opacity-10 transition-transform group-hover:scale-110">
      <Icon size={120} className="text-amber-500" />
    </div>
    <div className="relative z-10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 font-serif text-2xl font-bold text-amber-400">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      {price && (
        <div className="mt-4 text-lg font-bold text-amber-500">{price}</div>
      )}
    </div>
  </motion.div>
);

export default function App() {
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
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500 bg-black text-amber-500">
              <Utensils size={20} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-amber-500">البندر مول</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">الرئيسية</a>
            <a href="#menu" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">قائمة الإفطار</a>
            <a href="#contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500">اتصل بنا</a>
          </div>
          <button className="rounded-full bg-amber-500 px-6 py-2 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95">
            اطلب الآن
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/ramadan/1920/1080?blur=2" 
            alt="Ramadan Background" 
            className="h-full w-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center">
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
            استمتع بأشهى وجبات الإفطار الرمضانية التقليدية. سمبوسة مقرمشة، طعمية ساخنة، وعصائر طازجة تروي عطشك.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-amber-500 px-8 py-4 text-lg font-bold text-black transition-all hover:pr-10">
              استعرض المنيو
              <div className="absolute right-4 translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                ←
              </div>
            </button>
            <button className="rounded-full border border-amber-500/30 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
              موقعنا في المول
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features / Menu Section */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">قائمة إفطارنا المميزة</h2>
          <div className="mx-auto h-1 w-24 bg-amber-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <MenuCard 
            title="سمبوسة مقرمشة" 
            description="سمبوسة محضرة يومياً بحشوات متنوعة (دقة، جبن، عدس ) مقلية حتى الكمال الذهبي."
            icon={Utensils}
          />
          <MenuCard 
            title="طعمية ساخنة" 
            description="طعمية (فلافل) طازجة ومقرمشة مع خلطتنا السرية من البهارات "
            icon={Sun}
          />
          <MenuCard 
            title="عصائر رمضانية" 
            description="تشكيلة واسعة من العصائر الطازجة والرمضانية (فيمتو، فخفخينه، عصير مركز ،اسبيشل) لتنعش إفطارك."
            icon={Coffee}
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-zinc-900/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <MapPin size={32} />
              </div>
              <h4 className="mb-2 font-bold text-white">الموقع</h4>
              <p className="text-sm text-zinc-400">مجمع البندر مول،خط السده النادره</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <Clock size={32} />
              </div>
              <h4 className="mb-2 font-bold text-white">ساعات العمل</h4>
              <p className="text-sm text-zinc-400">من الساعه 12 ظهرا حتى أذان المغرب</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <Phone size={32} />
              </div>
              <h4 className="mb-2 font-bold text-white">للحجز والطلب</h4>
              <p className="text-sm text-zinc-400">اتصل بنا: 784056218- 713833068</p>
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
            <button className="rounded-full bg-black px-10 py-4 text-lg font-bold text-amber-500 transition-transform hover:scale-105 active:scale-95">
              اطلب عبر الهاتف
            </button>
            <button className="rounded-full border-2 border-black/20 bg-transparent px-10 py-4 text-lg font-bold text-black transition-colors hover:bg-black/5">
              عرض الموقع على الخريطة
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/10 py-12 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-500 bg-black text-amber-500">
              <Utensils size={16} />
            </div>
            <span className="font-serif text-lg font-bold text-amber-500">كافتيريا البندر مول</span>
          </div>
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} كافتيريا مجمع البندر مول. جميع الحقوق محفوظة.</p>
          <div className="mt-4 flex justify-center gap-6 text-zinc-400">
            <a href="#" className="hover:text-amber-500 transition-colors">انستغرام</a>
            <a href="#" className="hover:text-amber-500 transition-colors">تويتر</a>
            <a href="#" className="hover:text-amber-500 transition-colors">فيسبوك</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
