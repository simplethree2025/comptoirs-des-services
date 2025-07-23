import React from "react";

export default function Contact() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white text-black">
      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Contactez-nous
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          Une question, un projet ? Écrivez-nous ou retrouvez nos coordonnées ci-dessous.
        </p>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formulaire de contact */}
        <form className="bg-gray-50 rounded-xl shadow p-8 flex flex-col gap-4">
          <label className="text-left font-semibold">Nom</label>
          <input type="text" required className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none" placeholder="Votre nom" />
          <label className="text-left font-semibold">Email</label>
          <input type="email" required className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none" placeholder="Votre email" />
          <label className="text-left font-semibold">Message</label>
          <textarea required className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none min-h-[120px]" placeholder="Votre message" />
          <button type="submit" className="mt-4 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:scale-105 transition-transform">
            Envoyer
          </button>
        </form>
        {/* Infos de contact */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <span>Abidjan, Côte d&apos;Ivoire</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">✉️</span>
            <a href="mailto:contact@comptoir-services.ci" className="hover:underline text-violet-700">contact@comptoir-services.ci</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📞</span>
            <a href="tel:+2250102030405" className="hover:underline text-violet-700">+225 01 02 03 04 05</a>
          </div>
          {/* Optionnel : carte Google Maps */}
          <div className="mt-6">
            <iframe
              title="Carte Abidjan"
              src="https://www.google.com/maps?q=Abidjan,+Côte+d&apos;Ivoire&output=embed"
              width="100%"
              height="180"
              className="rounded-md border-0 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
} 