"use client";

import React from "react";
import Image from "next/image";

export default function TestPage() {
  const avatars = [
    "/avatars/avatar1.png",
    "/avatars/avatar2.png",
    "/avatars/avatar3.png",
    "/avatars/avatar4.png",
    "/avatars/avatar5.png",
    "/avatars/avatar6.png",
    "/avatars/avatar7.png",
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test des Avatars</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {avatars.map((avatar, index) => (
          <div key={index} className="border p-4 rounded">
            <p className="text-sm mb-2">Avatar {index + 1}</p>
            <p className="text-xs text-gray-500 mb-2">{avatar}</p>
            <Image
              src={avatar}
              alt={`Avatar ${index + 1}`}
              width={64}
              height={64}
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
    </div>
  );
}
