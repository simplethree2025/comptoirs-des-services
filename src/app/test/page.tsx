"use client";

import React from "react";

export default function TestPage() {
  const avatars = [
    "https://via.placeholder.com/64x64/4F46E5/FFFFFF?text=1",
    "https://via.placeholder.com/64x64/7C3AED/FFFFFF?text=2",
    "https://via.placeholder.com/64x64/EC4899/FFFFFF?text=3",
    "https://via.placeholder.com/64x64/10B981/FFFFFF?text=4",
    "https://via.placeholder.com/64x64/F59E0B/FFFFFF?text=5",
    "https://via.placeholder.com/64x64/EF4444/FFFFFF?text=6",
    "https://via.placeholder.com/64x64/8B5CF6/FFFFFF?text=7",
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test des Avatars</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {avatars.map((avatar, index) => (
          <div key={index} className="border p-4 rounded">
            <p className="text-sm mb-2">Avatar {index + 1}</p>
            <p className="text-xs text-gray-500 mb-2">{avatar}</p>
            <img
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className="w-16 h-16 rounded-full object-cover border"
              onError={(e) => {
                console.error(`Erreur de chargement: ${avatar}`);
                e.currentTarget.style.border = '2px solid red';
                e.currentTarget.alt = `ERREUR: ${avatar}`;
              }}
              onLoad={() => {
                console.log(`Avatar chargé avec succès: ${avatar}`);
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Test direct des URLs</h2>
        <div className="space-y-2">
          {avatars.map((avatar, index) => (
            <div key={index} className="flex items-center gap-4">
              <a 
                href={avatar} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Tester {avatar}
              </a>
              <span className="text-sm text-gray-500">(ouvre dans un nouvel onglet)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
