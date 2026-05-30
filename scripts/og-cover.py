"""
Render a 1200x630 OpenGraph cover for the portfolio.

Saves to public/assets/og-cover.png. Reproducible — re-run after editing
TITLE / SUBTITLE / URL constants to regenerate.

Usage:  python3 scripts/og-cover.py
"""
import math
import random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630

# Theme — matches the dark-mode portfolio tokens.
BG_TOP    = (15, 17, 28)         # near-black, slightly blue
BG_BOTTOM = (10, 12, 22)
ACCENT    = (116, 156, 220)      # approx oklch(68% 0.15 240)
ACCENT_DIM = (90, 120, 175)
TEXT      = (245, 247, 250)
TEXT_DIM  = (160, 175, 200)
MUTED     = (95, 110, 135)

TITLE = "Samrat Alam"
ROLE  = "Backend Engineer"
TAGLINE = "FinTech & Telecom · Java · Spring Boot · Kafka"
URL = "samratalamshanto.github.io/samrat-alam-portfolio"

FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
F_TITLE   = ImageFont.truetype(str(FONT_DIR / "DejaVuSans-Bold.ttf"), 110)
F_ROLE    = ImageFont.truetype(str(FONT_DIR / "DejaVuSans-Bold.ttf"), 42)
F_TAGLINE = ImageFont.truetype(str(FONT_DIR / "DejaVuSans.ttf"), 28)
F_EYEBROW = ImageFont.truetype(str(FONT_DIR / "DejaVuSansMono.ttf"), 20)
F_URL     = ImageFont.truetype(str(FONT_DIR / "DejaVuSansMono.ttf"), 22)

img = Image.new("RGB", (W, H), BG_BOTTOM)
draw = ImageDraw.Draw(img, "RGBA")

# Vertical gradient
for y in range(H):
    t = y / (H - 1)
    r = round(BG_TOP[0] * (1 - t) + BG_BOTTOM[0] * t)
    g = round(BG_TOP[1] * (1 - t) + BG_BOTTOM[1] * t)
    b = round(BG_TOP[2] * (1 - t) + BG_BOTTOM[2] * t)
    draw.line([(0, y), (W, y)], fill=(r, g, b))

# Radial accent glow top-right
glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow_layer)
gx, gy = int(W * 0.82), int(H * 0.18)
for r in range(420, 0, -40):
    alpha = int(40 * (r / 420))
    gdraw.ellipse((gx - r, gy - r, gx + r, gy + r), fill=(*ACCENT, alpha))
img = Image.alpha_composite(img.convert("RGBA"), glow_layer).convert("RGB")
draw = ImageDraw.Draw(img, "RGBA")

# Subtle dot/network pattern (right third)
random.seed(7)
network_pts = []
for _ in range(34):
    nx = random.randint(int(W * 0.55), W - 60)
    ny = random.randint(60, H - 60)
    network_pts.append((nx, ny))

# Lines between nearby pts
for i, (ax, ay) in enumerate(network_pts):
    for bx, by in network_pts[i + 1 :]:
        d = math.hypot(ax - bx, ay - by)
        if d < 150:
            a = int(60 * (1 - d / 150))
            draw.line([(ax, ay), (bx, by)], fill=(*ACCENT, a), width=1)

# Dots on top of lines
for x, y in network_pts:
    draw.ellipse((x - 3, y - 3, x + 3, y + 3), fill=(*ACCENT, 220))

# Accent rule under content (left col)
draw.rectangle((80, 200, 140, 204), fill=ACCENT)

# Eyebrow
draw.text((80, 165), "PORTFOLIO / 2026", fill=ACCENT, font=F_EYEBROW)

# Title
draw.text((80, 220), TITLE, fill=TEXT, font=F_TITLE)

# Role + tagline
draw.text((80, 360), ROLE, fill=TEXT, font=F_ROLE)
draw.text((80, 420), TAGLINE, fill=TEXT_DIM, font=F_TAGLINE)

# Footer URL
draw.line([(80, H - 90), (220, H - 90)], fill=(*MUTED, 180), width=1)
draw.text((80, H - 75), URL, fill=MUTED, font=F_URL)

# Save
out = Path(__file__).resolve().parents[1] / "public" / "assets" / "og-cover.png"
img.save(out, "PNG", optimize=True)
print(f"wrote {out}  {img.size}  ({out.stat().st_size // 1024} KB)")
