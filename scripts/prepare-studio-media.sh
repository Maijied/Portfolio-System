#!/usr/bin/env bash
# Process studio photos for portfolio/CV — auto-orient, crop, sharpen, export JPEG.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${HOME}/Downloads"
OUT="${ROOT}/public/media"
LONG=2000
QUALITY=88

process() {
  local slug="$1"
  local src_file="$2"
  local dest="${OUT}/${slug}/01.jpg"
  mkdir -p "${OUT}/${slug}"
  convert "${SRC}/${src_file}" \
    -auto-orient \
    -strip \
    -gravity center \
    -crop 92%x92%+0+0 \
    +repage \
    -resize "${LONG}x${LONG}>" \
    -colorspace sRGB \
    -brightness-contrast 3x2 \
    -unsharp 0x0.8+0.8+0.006 \
    -quality "${QUALITY}" \
    "${dest}"
  echo "  ${slug} ← ${src_file}"
}

echo "Processing studio media → public/media/"
process sleeping-dog "WhatsApp Image 2026-09-13 at 2.29.37 AM.jpeg"
process cape-buffalo-head "WhatsApp Image 2026-09-13 at 2.29.33 AM (1).jpeg"
process bull-head "WhatsApp Image 2026-09-13 at 2.29.31 AM.jpeg"
process female-torso "WhatsApp Image 2026-09-13 at 2.29.25 AM.jpeg"
process bird-relief "WhatsApp Image 2026-09-13 at 2.29.27 AM (1).jpeg"
process expressive-head "WhatsApp Image 2026-09-13 at 2.29.28 AM.jpeg"
process terracotta-head "WhatsApp Image 2026-09-13 at 2.29.28 AM (1).jpeg"
process painted-kula "WhatsApp Image 2026-09-13 at 2.29.35 AM.jpeg"
process ceremonial-vessel "WhatsApp Image 2026-09-13 at 2.29.34 AM.jpeg"
echo "Done. (Frozen Liquidity uses video frame — run extract-video-frame separately.)"
