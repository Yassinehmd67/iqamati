import Button from "@/components/shared/Button";

export default function EmptySmartRequest() {
  return (
    <section className="bg-blue-600 text-white rounded-[2rem] p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">لم تجد ما تبحث عنه؟</h2>

      <p className="text-blue-100 max-w-2xl mx-auto mb-8 leading-8">
        أنشئ طلباً ذكياً ودع IQAMATI تقوم بالبحث وإرسال أفضل العروض لك مباشرة
        عبر WhatsApp.
      </p>

      <Button className="bg-white !text-blue-600 hover:scale-105">
        إنشاء طلب ذكي 🤖
      </Button>
    </section>
  );
}
