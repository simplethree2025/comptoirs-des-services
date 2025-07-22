import React from "react";

const team = [
  {
    name: "Awa Koné",
    role: "Fondatrice & CEO",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    desc: "Experte en stratégie et développement, 15 ans d’expérience dans le conseil et la formation.",
  },
  {
    name: "Jean Kouadio",
    role: "Consultant Senior",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    desc: "Spécialiste en analyse de marché et veille stratégique, passionné par l’innovation.",
  },
  {
    name: "Fatou Traoré",
    role: "Analyste & Formatrice",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    desc: "Formatrice certifiée, experte en développement de compétences et politiques publiques.",
  },
];

export default function APropos() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white text-black">
      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          À propos de nous
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          Comptoir des Services, c’est une équipe engagée pour la réussite de votre organisation.
        </p>
      </section>
      {/* Mission & valeurs */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-violet-700">Notre mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Accompagner les entreprises, institutions et organisations dans leur développement grâce à une expertise reconnue en conseil stratégique, analyse, veille et formation. Nous croyons en l’innovation, l’écoute et l’excellence pour bâtir un avenir durable.
        </p>
        <h3 className="text-xl font-bold mb-2 text-pink-600">Nos valeurs</h3>
        <ul className="flex flex-wrap justify-center gap-6 text-gray-600 text-base">
          <li className="bg-blue-50 rounded-full px-6 py-2">Écoute</li>
          <li className="bg-violet-50 rounded-full px-6 py-2">Excellence</li>
          <li className="bg-pink-50 rounded-full px-6 py-2">Innovation</li>
          <li className="bg-gray-100 rounded-full px-6 py-2">Engagement</li>
        </ul>
      </section>
      {/* Équipe */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-violet-700 text-center">Notre équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center">
              <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-violet-200" />
              <h3 className="font-bold text-lg mb-1 text-violet-700">{member.name}</h3>
              <p className="text-pink-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 