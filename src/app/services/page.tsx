import React from "react";
import Link from "next/link";

const services = [
  {
    icon: "📊",
    title: "Conseil stratégique",
    desc: "Accompagnement sur-mesure pour définir et piloter votre stratégie d'entreprise ou d'organisation.",
  },
  {
    icon: "🔎",
    title: "Veille & analyse de marché",
    desc: "Surveillance des tendances, analyse concurrentielle et études de marché pour anticiper les évolutions.",
  },
  {
    icon: "🎓",
    title: "Formation professionnelle",
    desc: "Programmes de formation adaptés pour renforcer les compétences de vos équipes.",
  },
  {
    icon: "🏛️",
    title: "Développement de politiques publiques",
    desc: "Appui à la conception, la mise en œuvre et l’évaluation de politiques publiques innovantes.",
  },
  {
    icon: "📈",
    title: "Rapports & Analyses",
    desc: "Production de rapports détaillés et d’analyses pour éclairer vos prises de décision.",
  },
  {
    icon: "🚀",
    title: "Réussite client",
    desc: "Des résultats concrets grâce à l’engagement et l’expertise de nos consultants.",
  },
];

export default function Services() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white text-black">
      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Nos Services
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          Découvrez l’ensemble de nos expertises pour accompagner la croissance de votre organisation.
        </p>
      </section>
      <section className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <span className="text-4xl mb-3">{service.icon}</span>
            <h3 className="font-bold text-lg mb-2 text-violet-700">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </section>
      <div className="w-full flex justify-center py-8">
        <Link href="/contact" className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform">
          Contactez-nous pour un devis personnalisé
        </Link>
      </div>
    </div>
  );
} 