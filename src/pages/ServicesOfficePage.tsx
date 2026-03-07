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
  PhoneCall
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "التسويق الإلكتروني بالذكاء الاصطناعي",
    icon: Cpu,
    description: "استخدام أحدث تقنيات الذكاء الاصطناعي لتحليل البيانات واستهداف الجمهور بدقة عالية."
  },
  {
    id: 2,
    title: "خدمات التسويق بالعمولة",
    icon: Users,
    description: "بناء شبكات تسويق فعالة لزيادة المبيعات والوصول لشرائح أوسع من العملاء."
  },
  {
    id: 3,
    title: "إدارة حسابات التواصل الاجتماعي وإدارة الاعلانات فيها",
    icon: Share2,
    description: "إدارة احترافية لمنصات التواصل الاجتماعي مع حملات إعلانية ممولة ومستهدفة."
  },
  {
    id: 4,
    title: "خدمات التسويق الرقمي والأتمتة باستخدام الذكاء الاصطناعي",
    icon: Zap,
    description: "أتمتة العمليات التسويقية لزيادة الكفاءة وتقليل التكاليف التشغيلية."
  },
  {
    id: 5,
    title: "بناء المتاجر الإلكترونية",
    icon: ShoppingBag,
    description: "تصميم وتطوير متاجر إلكترونية متكاملة وسهلة الاستخدام تدعم الدفع الإلكتروني."
  },
  {
    id: 6,
    title: "طباعة وتصميم اللوحات الدعائية والوثائق والمستندات",
    icon: Printer,
    description: "خدمات تصميم وطباعة عالية الجودة لجميع احتياجاتكم الدعائية والمكتبية."
  },
  {
    id: 7,
    title: "كتابة ورفع عرائض الدعوى القضائية",
    icon: Scale,
    description: "صياغة قانونية احترافية للعرائض والمستندات القانونية ورفعها للجهات المختصة."
  },
  {
    id: 8,
    title: "خدمات رجال الاعمال وتجار الجملة في ( الخليج والصين )",
    icon: Globe,
    description: "تسهيل العمليات التجارية والاستيراد والتصدير بين اليمن والخليج والصين."
  },
  {
    id: 9,
    title: "تخليص المعاملات الحكومية",
    icon: FileText,
    description: "متابعة وإنجاز كافة المعاملات في الدوائر الحكومية بسرعة ومصداقية."
  },
  {
    id: 10,
    title: "تخليص البيانات الجمركية وترقيم السيارات",
    icon: Building2,
    description: "خدمات جمركية متكاملة وتسهيل إجراءات ترقيم وتسجيل المركبات."
  },
  {
    id: 11,
    title: "خدمات التوصيل المجاني للبضائع والمنتجات",
    icon: Truck,
    description: "توصيل سريع وآمن لمنتجاتكم وبضائعكم مجاناً لضمان راحتكم."
  }
];

const ServicesOfficePage = () => {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200" dir="rtl">
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
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-amber-500">البندر مول</span>
          </div>
          <Link 
            to="/" 
            className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-bold text-amber-500 transition-all hover:bg-amber-500 hover:text-black"
          >
            <Home size={16} className="md:w-5 md:h-5" />
            <span>العودة للرئيسية</span>
          </Link>
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
            مكتب <span className="text-amber-500">البندر مول</span> التجاري
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-zinc-400">
            نقدم لكم باقة متكاملة من الخدمات الرقمية والتجارية والقانونية بأعلى معايير الجودة والاحترافية، لنسهل عليكم أعمالكم ونحقق تطلعاتكم.
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
                  <span>تواصل معنا</span>
                  <ArrowRight size={16} className="rotate-90" />
                </a>
              )}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Services Section (Copied from CafeteriaPage) */}
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
                  لخدمات <br />
                  <span className="text-amber-500">رجال الأعمال</span>
                </h2>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  نقدم خدمات متميزة وحلولاً متكاملة تلبي تطلعاتكم. <br />
                  يرجى التواصل عبر الأرقام التالية للحصول على خدماتنا المتميزة.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
              {/* UAE Number */}
              <div className="flex flex-col items-center gap-3 md:gap-4 md:flex-row">
                <div className="flex items-center gap-3 md:gap-4 rounded-full bg-zinc-800 px-6 md:px-8 py-3 md:py-4 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <span className="text-xl md:text-2xl" title="الإمارات العربية المتحدة">🇦🇪</span>
                  <span className="text-lg md:text-2xl font-black text-amber-500 tracking-wider" dir="ltr">00971 55 576 6456</span>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <a 
                    href="https://wa.me/971555766456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                    title="واتساب الإمارات"
                  >
                    <MessageCircle size={24} className="md:w-7 md:h-7" />
                  </a>
                  <a 
                    href="tel:00971555766456" 
                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-amber-500 text-black transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    title="اتصال هاتفي الإمارات"
                  >
                    <PhoneCall size={24} className="md:w-7 md:h-7" />
                  </a>
                </div>
              </div>

              {/* Yemen Number */}
              <div className="flex flex-col items-center gap-3 md:gap-4 md:flex-row">
                <div className="flex items-center gap-3 md:gap-4 rounded-full bg-zinc-800 px-6 md:px-8 py-3 md:py-4 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <span className="text-xl md:text-2xl" title="اليمن">🇾🇪</span>
                  <span className="text-lg md:text-2xl font-black text-amber-500 tracking-wider" dir="ltr">00967 71 383 3068</span>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <a 
                    href="https://wa.me/967713833068" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                    title="واتساب اليمن"
                  >
                    <MessageCircle size={24} className="md:w-7 md:h-7" />
                  </a>
                  <a 
                    href="tel:00967713833068" 
                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-amber-500 text-black transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    title="اتصال هاتفي اليمن"
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
          <p className="text-zinc-500">© {new Date().getFullYear()} مجمع البندر مول التجاري. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesOfficePage;
