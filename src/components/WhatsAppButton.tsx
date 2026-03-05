'use client';

export default function WhatsAppButton() {
  const phoneNumber = '27712345678';
  const message = 'Hi AfriBridge! I\'d like to discuss a shipment.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-xl">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.966 1.511c-2.71 1.601-4.405 4.306-4.405 7.24 0 2.262.739 4.395 2.124 6.181l-.555 2.026 2.139-.556c1.674.937 3.579 1.439 5.555 1.439 5.462 0 9.951-4.488 9.951-9.95 0-2.65-1.09-5.14-3.087-7.027a9.83 9.83 0 00-6.156-2.864" />
        </svg>
        <span className="font-semibold text-sm hidden sm:inline">Chat on WhatsApp</span>
      </div>
    </a>
  );
}
