import React from "react";
import Image from "next/image";

export default function Apropos() {
  return (
    <main className="bg-white min-h-screen w-full">
      {/* Bandeau image en haut */}
      <div className="w-full h-40 md:h-56 relative flex items-center justify-center" style={{backgroundImage: "url('/beryl-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900/60" />
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold tracking-widest">A PROPOS</h1>
      </div>

      {/* Bloc Positionnement Unique */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 uppercase mb-4">NOTRE POSITIONNEMENT UNIQUE</h2>
            <p className="text-gray-700 mb-4">
              Comptoir des Services ambitionne de devenir une référence dans le domaine du conseil en stratégie et en management, en se positionnant comme un cabinet expert reconnu pour la qualité de ses prestations et son engagement de haut niveau auprès des entreprises.
            </p>
            <p className="text-gray-700 mb-4">
              Depuis sa création, Comptoir des Services n&apos;a cessé de développer et d&apos;élargir ses compétences autour du conseil stratégique, de l&apos;analyse économique et de l&apos;information du marché, de la veille stratégique, de la formation, ainsi que du développement de politiques publiques et de divers stratégiques.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/beryl-molecule.jpg" alt="Molecule" width={420} height={320} className="rounded shadow-lg object-cover" />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-700 text-base text-left">
            Notre cabinet se distingue par : un ADN unique et un fort esprit entrepreneurial, des valeurs fortes et des convictions affirmées sur le métier du conseil, un haut niveau de technicité de l&apos;ensemble de nos consultants, un style d&apos;intervention rigoureux, sur mesure et collaboratif. Nos experts consultants, qui justifient chacun en moyenne de dix (10) années d&apos;expérience, apportent un regard différent et stratégique sur les défis que rencontrent nos clients. Comptoir des Services les accompagne dans la définition de leurs orientations stratégiques, mais aussi dans la mise en œuvre de changements structurels visant à améliorer durablement leurs performances.
          </p>
        </div>
      </section>

      {/* Boutons/services */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <span className="bg-blue-100 text-blue-900 font-semibold px-6 py-3 rounded shadow">Stratégie et transaction</span>
        <span className="bg-blue-100 text-blue-900 font-semibold px-6 py-3 rounded shadow">Efficacité opérationnelle</span>
        <span className="bg-blue-100 text-blue-900 font-semibold px-6 py-3 rounded shadow">Gouvernance, Risques et Conformité</span>
        <span className="bg-blue-100 text-blue-900 font-semibold px-6 py-3 rounded shadow">Autres services</span>
      </div>

      {/* Bloc Proposition de Valeur */}
      <section className="w-full py-16 px-4 bg-blue-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase text-center">NOTRE PROPOSITION DE VALEUR</h2>
          <p className="text-gray-700 mb-8 text-center">
            Grâce à une alchimie solide avec nos clients, un savoir-faire pointu dans nos domaines d&apos;intervention, et des collaborateurs de haut niveau, Comptoir des Services facilite l&apos;articulation entre les orientations stratégiques et les réalités opérationnelles. Cela permet d&apos;assurer une parfaite cohérence entre la décision, sa compréhension et sa mise en œuvre sur le terrain.
          </p>
          <div className="bg-white rounded-lg shadow-lg grid md:grid-cols-2 gap-8 p-8 items-center">
            {/* Icônes + texte */}
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                {/* Icône */}
                <svg width="40" height="40" fill="none" stroke="#1e3a8a" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v4l2 2"/></svg>
                <span className="text-gray-800 text-lg">Combiner les meilleurs savoir-faire du conseil avec une expertise métier pointue</span>
              </div>
              <div className="flex items-start gap-4">
                <svg width="40" height="40" fill="none" stroke="#1e3a8a" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
                <span className="text-gray-800 text-lg">Apporter à nos clients notre solide connaissance de l&apos;environnement local et des bonnes pratiques internationales</span>
              </div>
              <div className="flex items-start gap-4">
                <svg width="40" height="40" fill="none" stroke="#1e3a8a" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span className="text-gray-800 text-lg">Répondre avec pragmatisme aux attentes de nos clients grâce à notre esprit fortement entrepreneurial</span>
              </div>
            </div>
            {/* Image cible */}
            <div className="flex justify-center">
              <Image src="/beryl-cible.jpg" alt="Cible" width={400} height={260} className="rounded shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Promesse */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2 uppercase tracking-wide">LA PROMESSE DE <span className="text-black font-semibold">Comptoir des services</span></h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Une relation complète avec votre public</h2>
          <div className="grid md:grid-cols-3 gap-8 w-full items-center">
            {/* Bloc Surveillance */}
            <div className="flex flex-col items-center text-center md:text-left md:items-end">
              <h4 className="text-2xl font-semibold text-gray-700 mb-2">Surveillance</h4>
              <p className="text-gray-600 max-w-xs">
                Recueillez des informations sur le Web et Faites-vous connaître sur les médias que vous cumulez jour après jour. Suivez l&apos;activité sur les nombreuses plateformes de réseaux sociaux pouvant être surveillées.
              </p>
            </div>
            {/* Cercle central avec icônes */}
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                  {/* Antenne */}
                  <svg width="40" height="40" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92"/></svg>
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2">
                  {/* Oreille */}
                  <svg width="40" height="40" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a4 4 0 0 0-8 0c0 4 4 4 4 8"/><circle cx="12" cy="8" r="4"/></svg>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  {/* Bulle */}
                  <svg width="40" height="40" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div className="absolute left-8 top-1/2 -translate-y-1/2">
                  {/* Crayon */}
                  <svg width="40" height="40" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.862 3.487a2.06 2.06 0 0 1 2.915 2.915l-12.02 12.02a2 2 0 0 1-.878.513l-4 1a1 1 0 0 1-1.213-1.213l1-4a2 2 0 0 1 .513-.878z"/></svg>
                </div>
              </div>
            </div>
            {/* Bloc Écoute */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <h4 className="text-2xl font-semibold text-gray-700 mb-2">Écoute</h4>
              <p className="text-gray-600 max-w-xs">
                Obtenez des informations utiles sur votre public, vos sources, votre visibilité et votre portée afin d&apos;améliorer votre stratégie marketing, relation client ou proposition de valeur globale
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 w-full mt-8">
            {/* Bloc Réponse */}
            <div className="flex flex-col items-center text-center md:text-left md:items-end">
              <h4 className="text-2xl font-semibold text-gray-700 mb-2">Réponse</h4>
              <p className="text-gray-600 max-w-xs">
                Répondez directement à votre public dans l&apos;application. Obtenez des informations approfondies sur les impressions et expériences globales suscitées par votre marque, produit ou secteur d&apos;activité.
              </p>
            </div>
            <div />
            {/* Bloc Publication */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <h4 className="text-2xl font-semibold text-gray-700 mb-2">Publication</h4>
              <p className="text-gray-600 max-w-xs">
                Publiez des contenus qui favorisent la connexion avec votre public. Inspirez-vous des résultats de surveillance et d&apos;écoute et lancez-vous au sein de la même plateforme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc valeurs */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Image src="/beryl-engagement.jpg" alt="Engagement" width={220} height={140} className="rounded shadow mb-2 object-cover" />
            <span className="font-bold text-blue-900 mt-2">Engagement</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/beryl-excellence.jpg" alt="Excellence" width={220} height={140} className="rounded shadow mb-2 object-cover" />
            <span className="font-bold text-blue-900 mt-2">Excellence</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/beryl-equipe.jpg" alt="Esprit d&apos;équipe" width={220} height={140} className="rounded shadow mb-2 object-cover" />
            <span className="font-bold text-blue-900 mt-2">Esprit d&apos;équipe</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/beryl-humilite.jpg" alt="Humilité" width={220} height={140} className="rounded shadow mb-2 object-cover" />
            <span className="font-bold text-blue-900 mt-2">Humilité</span>
          </div>
        </div>
      </section>
    </main>
  );
} 