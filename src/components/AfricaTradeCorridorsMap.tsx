'use client';

export default function AfricaTradeCorridorsMap() {
  return (
    <div className="w-full bg-white p-8 rounded-lg">
      <svg
        viewBox="0 0 1000 800"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#E8F0FC', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DFE9F7', stopOpacity: 1 }} />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background gradient */}
        <rect width="1000" height="800" fill="url(#bgGradient)" />

        {/* Title */}
        <text
          x="500"
          y="40"
          fontSize="32"
          fontWeight="bold"
          textAnchor="middle"
          fill="#0B1F3A"
        >
          African Trade Corridors
        </text>
        <text
          x="500"
          y="70"
          fontSize="14"
          textAnchor="middle"
          fill="#6B7280"
        >
          AfriBridge Regional Logistics Network
        </text>

        {/* SADC Region - Base Map Area */}
        <g id="map-base">
          {/* South Africa */}
          <rect x="400" y="600" width="80" height="100" fill="#F3F4F6" opacity="0.5" />
          <text x="440" y="655" fontSize="12" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            South Africa
          </text>

          {/* Botswana */}
          <rect x="380" y="520" width="70" height="80" fill="#F3F4F6" opacity="0.5" />
          <text x="415" y="570" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            Botswana
          </text>

          {/* Zambia */}
          <rect x="380" y="420" width="70" height="100" fill="#F3F4F6" opacity="0.5" />
          <text x="415" y="475" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            Zambia
          </text>

          {/* DRC */}
          <rect x="280" y="350" width="100" height="150" fill="#F3F4F6" opacity="0.5" />
          <text x="330" y="430" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            DRC
          </text>

          {/* Namibia */}
          <rect x="300" y="550" width="80" height="80" fill="#F3F4F6" opacity="0.5" />
          <text x="340" y="595" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            Namibia
          </text>

          {/* Mozambique */}
          <rect x="500" y="480" width="60" height="100" fill="#F3F4F6" opacity="0.5" />
          <text x="530" y="535" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            Mozambique
          </text>

          {/* Zimbabwe */}
          <rect x="430" y="480" width="70" height="70" fill="#F3F4F6" opacity="0.5" />
          <text x="465" y="520" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            Zimbabwe
          </text>

          {/* Tanzania */}
          <rect x="480" y="300" width="80" height="100" fill="#F3F4F6" opacity="0.5" />
          <text x="520" y="355" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            Tanzania
          </text>

          {/* Kenya */}
          <rect x="540" y="220" width="60" height="100" fill="#F3F4F6" opacity="0.5" />
          <text x="570" y="275" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            Kenya
          </text>

          {/* Uganda */}
          <rect x="510" y="160" width="50" height="70" fill="#F3F4F6" opacity="0.5" />
          <text x="535" y="200" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            Uganda
          </text>

          {/* Ethiopia */}
          <rect x="600" y="120" width="80" height="120" fill="#F3F4F6" opacity="0.5" />
          <text x="640" y="185" fontSize="11" fontWeight="600" textAnchor="middle" fill="#0B1F3A">
            Ethiopia
          </text>
        </g>

        {/* Major Ports - Gold highlighted nodes */}
        <g id="ports" filter="url(#glow)">
          {/* Durban, South Africa */}
          <circle cx="480" cy="630" r="10" fill="#F5B041" opacity="0.9" />
          <text x="480" y="655" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0B1F3A">
            Durban
          </text>

          {/* Cape Town */}
          <circle cx="420" cy="680" r="8" fill="#F5B041" opacity="0.7" />
          <text x="420" y="700" fontSize="9" textAnchor="middle" fill="#0B1F3A">
            Cape Town
          </text>

          {/* Dar es Salaam, Tanzania */}
          <circle cx="550" cy="370" r="10" fill="#F5B041" opacity="0.9" />
          <text x="550" y="395" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0B1F3A">
            Dar es Salaam
          </text>

          {/* Lagos, Nigeria (West Africa) */}
          <circle cx="200" cy="450" r="8" fill="#F5B041" opacity="0.7" />
          <text x="200" y="470" fontSize="9" textAnchor="middle" fill="#0B1F3A">
            Lagos
          </text>
        </g>

        {/* Corridor Routes - Emerald lines */}
        <g id="corridors" stroke="#1E6B4C" strokeWidth="3" fill="none" opacity="0.7">
          {/* SADC Corridor: Durban → Zambia → DRC */}
          <path d="M 480 630 L 415 480 L 340 380" strokeDasharray="5,5" />

          {/* SADC Corridor: Durban → Zimbabwe → Mozambique */}
          <path d="M 480 630 L 465 515 L 530 530" />

          {/* East Africa Corridor: Dar es Salaam → Tanzania → Kenya → Uganda */}
          <path d="M 550 370 L 520 350 L 570 270 L 535 200" />

          {/* Corridor: Ethiopia to Kenya */}
          <path d="M 640 180 L 610 200 L 570 240" />

          {/* Cross-regional: South Africa to East Africa */}
          <path d="M 480 630 L 550 370" strokeDasharray="5,5" opacity="0.5" />

          {/* West Africa connection (conceptual) */}
          <path d="M 300 500 L 200 450" strokeDasharray="8,4" opacity="0.4" />
        </g>

        {/* Corridor Labels */}
        <g id="corridor-labels" fontSize="12" fontWeight="600" fill="#1E6B4C">
          <text x="400" y="560" textAnchor="middle">
            SADC
          </text>
          <text x="590" y="300" textAnchor="middle">
            East Africa
          </text>
          <text x="250" y="430" textAnchor="middle" fontSize="10" opacity="0.7">
            West Africa
          </text>
        </g>

        {/* Legend */}
        <g id="legend" fontSize="11">
          {/* Port symbol */}
          <circle cx="80" cy="740" r="6" fill="#F5B041" />
          <text x="95" y="745" fill="#0B1F3A" fontWeight="600">
            Major Ports
          </text>

          {/* Corridor line */}
          <line x1="80" y1="760" x2="110" y2="760" stroke="#1E6B4C" strokeWidth="2" />
          <text x="120" y="765" fill="#0B1F3A" fontWeight="600">
            Trade Routes
          </text>

          {/* Development line */}
          <line
            x1="80"
            y1="780"
            x2="110"
            y2="780"
            stroke="#1E6B4C"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text x="120" y="785" fill="#0B1F3A" fontWeight="600">
            Developing Routes
          </text>
        </g>

        {/* Footer info */}
        <text
          x="500"
          y="750"
          fontSize="10"
          textAnchor="middle"
          fill="#6B7280"
          opacity="0.8"
        >
          AfriBridge operates across SADC, East African, and Pan-African corridors
        </text>
      </svg>
    </div>
  );
}
