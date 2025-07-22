import React from "react";
import Link from "next/link";

const articles = [
  {
    title: "L'importance de la veille stratégique pour les entreprises africaines",
    date: "2024-05-01",
    excerpt: "Découvrez comment la veille stratégique permet aux organisations de rester compétitives et d’anticiper les évolutions du marché.",
    slug: "veille-strategique-afrique",
  },
  {
    title: "Formation professionnelle : clé de la réussite organisationnelle",
    date: "2024-04-15",
    excerpt: "La formation continue est un levier essentiel pour l’adaptation et la performance des équipes.",
    slug: "formation-professionnelle-reussite",
  },
  {
    title: "Analyse de marché : les tendances 2024 en Côte d'Ivoire",
    date: "2024-03-28",
    excerpt: "Un tour d’horizon des grandes tendances économiques et sectorielles à suivre cette année.",
    slug: "tendances-marche-2024",
  },
];

export default function Blog() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white text-black">
      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Blog & Actualités
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          Suivez nos analyses, conseils et actualités pour rester informé et inspiré.
        </p>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-xl mb-2 text-violet-700">{article.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{new Date(article.date).toLocaleDateString('fr-FR')}</p>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
            </div>
            <Link href={`/blog/${article.slug}`} className="mt-auto inline-block bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition-transform">
              Lire la suite
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
} 