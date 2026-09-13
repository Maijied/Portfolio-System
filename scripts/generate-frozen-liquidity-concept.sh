#!/usr/bin/env bash
# Generate a clean concept illustration for The Frozen Liquidity degree project.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${ROOT}/public/media/frozen-liquidity/01.jpg"
mkdir -p "$(dirname "$OUT")"

SVG=$(mktemp --suffix=.svg)
cat > "$SVG" <<'SVG'
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1200" viewBox="0 0 1600 1200">
  <rect width="1600" height="1200" fill="#f7f5f2"/>
  <rect x="520" y="860" width="560" height="40" rx="4" fill="#d8d2c8"/>
  <rect x="500" y="720" width="600" height="140" fill="#ffffff" stroke="#cfc8bc" stroke-width="3"/>
  <rect x="720" y="280" width="160" height="220" rx="8" fill="#6b7280"/>
  <rect x="740" y="260" width="120" height="30" rx="6" fill="#4b5563"/>
  <path d="M800 500 C780 560, 770 620, 760 720 C820 700, 860 690, 900 720 C890 620, 880 560, 860 500 Z" fill="#2563eb" opacity="0.95"/>
  <path d="M800 500 C820 560, 830 620, 840 720 C780 700, 740 690, 700 720 C710 620, 720 560, 740 500 Z" fill="#dc2626" opacity="0.95"/>
  <ellipse cx="820" cy="760" rx="120" ry="36" fill="#1d4ed8" opacity="0.85"/>
  <ellipse cx="780" cy="780" rx="90" ry="28" fill="#b91c1c" opacity="0.85"/>
  <ellipse cx="800" cy="800" rx="140" ry="44" fill="#ffffff" opacity="0.35"/>
  <text x="800" y="1040" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#6b6560">The Frozen Liquidity — concept visualisation</text>
  <text x="800" y="1085" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#9a948c">Course Code 4102 · Under 5 ft · In development</text>
</svg>
SVG

convert "$SVG" -background white -flatten -quality 92 "$OUT"
rm -f "$SVG"
echo "Wrote $OUT"
