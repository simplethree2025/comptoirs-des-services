"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const heroSlides = [
  {
    image: "/hero-bg.jpg",
    title: "Faire grandir votre organisation",
    subtitle: "Cabinet de conseil stratégique, veille, analyse et formation basé à Abidjan, Côte d&apos;Ivoire.",
  },
  {
    image: "/hero1-bg.jpg",
    title: "l’analyse économique et l’information du marché c&apos;est notre passion",
    subtitle: "",
  },
];

const pointsForts = [
  {
    imageName: "ecoute",
    title: "Écoute sociale",
    desc: "Suivi instantané des conversations et tendances pour anticiper les besoins de vos clients.",
  },
  {
    imageName: "analyse",
    title: "Rapports & Analyses",
    desc: "Des analyses approfondies et des visualisations de données pour piloter vos décisions.",
  },
  {
    imageName: "reussite",
    title: "Réussite client",
    desc: "Des résultats concrets grâce à l&apos;engagement et l&apos;expertise de nos consultants.",
  },
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section
      className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center transition-all duration-700"
      style={{
        backgroundImage: `url('${slide.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-violet-900/60 to-pink-900/60" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          {slide.title}
        </h1>
        {slide.subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
            {slide.subtitle}
          </p>
        )}
        <Link
          href="/services"
          className="inline-block bg-white text-violet-700 font-bold px-8 py-3 rounded shadow hover:bg-violet-100 transition"
        >
          Découvrir nos services
        </Link>
      </div>
      {/* Flèches de navigation */}
      <button
        aria-label="Précédent"
        onClick={() => setIndex((index - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 text-violet-700 rounded-full p-2 shadow hover:bg-violet-100 transition z-20"
      >
        ◀
      </button>
      <button
        aria-label="Suivant"
        onClick={() => setIndex((index + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 text-violet-700 rounded-full p-2 shadow hover:bg-violet-100 transition z-20"
      >
        ▶
      </button>
      {/* Pagination */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  // Section problématiques : tableau des avatars et textes
  const problems = [
    {
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiM0RjQ2RTUiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4xPC9zdmc+Cjwvc3ZnPgo=",
      text: "« Je suis victime d&apos;un <b>sinistre de relations publiques ou de réputation en ligne</b> et j&apos;ai besoin de gérer la crise »."
    },
    {
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiM3QzNBREQiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4yPC9zdmc+Cjwvc3ZnPgo=",
      text: "« Nous lançons une <b>vaste campagne</b> et ma mission est de surveiller les résultats »."
    },
    {
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiNFQzQ4OTkiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4zPC9zdmc+Cjwvc3ZnPgo=",
      text: "« J&apos;aimerais connaître la situation de <b>nos concurrents</b> en ligne et sur les réseaux sociaux »."
    },
    {
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiMxMEI5ODEiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj40PC9zdmc+Cjwvc3ZnPgo=",
      text: "« Je veux savoir qui/où sont les <b>influenceurs</b> dans mon secteur d&apos;activité »."
    },
    {
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiNGNTlFMEIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj41PC9zdmc+Cjwvc3ZnPgo=",
      text: "« Je veux <b>savoir ce que dit mon public</b> sur ma marque ou mon produit »."
    },
    {
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiNFRjQ0NDQiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj42PC9zdmc+Cjwvc3ZnPgo=",
      text: "« Pour promouvoir ma marque, je veux pouvoir <b>entrer en contact</b> avec mon public, l&apos;écouter et lui répondre »."
    },
    {
      avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiM4QjVDRjYiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj43PC9zdmc+Cjwvc3ZnPgo=",
      text: "« Je sais que les gens parlent de ma marque, mais je ne sais pas <b>où se trouve mon public</b> »."
    },
  ];
  return (
    <main className="bg-white min-h-screen w-full">
      {/* Hero carousel */}
      <HeroCarousel />
      {/* Présentation */}
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-violet-700 mb-2">Comptoir des Services</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 mx-auto mb-6 rounded"></div>
        <p className="text-lg text-gray-700">
          Créé en 2020 à Abidjan, Comptoir des Services est un cabinet jeune et ambitieux, spécialisé dans le conseil stratégique, l&apos;analyse économique et de marché, la veille stratégique, la formation, et le développement de politiques publiques. Nos consultants totalisent en moyenne dix ans d&apos;expérience chacun.
        </p>
      </section>
      {/* Points forts */}
      <section className="max-w-6xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pointsForts.map((point, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition">
              <div className="w-80 h-44 mb-6">
                <Image src={`/points-forts/${point.imageName}.jpg`} alt={point.title} width={320} height={180} className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-violet-800">{point.title}</h3>
              <p className="text-gray-700 text-base">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Appel à l'action */}
      <section className="w-full flex flex-col items-center py-12">
        <Link href="/services" className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform text-lg">
          Découvrir nos services
        </Link>
      </section>
      {/* Bannière d'appel */}
      <section
        className="relative w-full min-h-[220px] flex items-center justify-center my-8"
        style={{
          backgroundImage: "url('/ville.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white drop-shadow-lg">
            Des consultants expérimentés et engagés<br />
            pour accompagner votre entreprise
          </h2>
        </div>
      </section>

      {/* Problématiques section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          POUR QUELLES PROBLÉMATIQUES <span className="text-violet-700">choisir Comptoir des services&nbsp;?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Ligne du haut : 4 avatars */}
          {problems.slice(0, 4).map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <img 
                src={item.avatar} 
                alt="avatar" 
                className="w-16 h-16 rounded-full object-cover"
                onError={(e) => {
                  console.error(`Erreur de chargement de l'avatar: ${item.avatar}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div
                className="bg-white rounded-xl shadow p-4 text-gray-800 text-base"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
          {/* Ligne du bas : 3 avatars centrés */}
          <div className="hidden md:block" /> {/* Espace vide pour centrer */}
          {problems.slice(4).map((item, i) => (
            <div key={i+4} className="flex items-start gap-4">
              <img 
                src={item.avatar} 
                alt="avatar" 
                className="w-16 h-16 rounded-full object-cover"
                onError={(e) => {
                  console.error(`Erreur de chargement de l'avatar: ${item.avatar}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div
                className="bg-white rounded-xl shadow p-4 text-gray-800 text-base"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
          <div className="hidden md:block" /> {/* Espace vide pour centrer */}
        </div>
      </section>
    </main>
  );
}

export function RotatingBanner() {
  const messages = [
    <span key="1">Faites un choix, choisissez <span className="font-bold text-black">Comptoir des Services</span></span>,
    <span key="2">Ensemble, révélons le potentiel de votre organisation !</span>,
    <span key="3">Votre succès, notre mission</span>,
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white text-center py-2 text-sm font-semibold tracking-wide shadow min-h-[32px] flex items-center justify-center">
      <div className="transition-opacity duration-700 ease-in-out" key={index}>
        {messages[index]}
      </div>
    </div>
  );
}