export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-6 italic">
            IQAMATI
            <span className="text-blue-500">.com</span>
          </h2>

          <p className="max-w-md leading-relaxed">
            المنصة المغربية الذكية للسكن والخدمات العقارية. ابحث، انشر، وتواصل
            بسهولة.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-bold mb-6">روابط سريعة</h3>

          <ul className="space-y-3">
            <li>شراء عقار</li>
            <li>كراء سكن</li>
            <li>مشاريع جديدة</li>
            <li>خدمات ومهنيين</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-bold mb-6">قانوني</h3>

          <ul className="space-y-3">
            <li>سياسة الخصوصية</li>
            <li>شروط الاستخدام</li>
            <li>اتصل بنا</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-sm">
        © 2026 IQAMATI.COM
      </div>
    </footer>
  );
}
