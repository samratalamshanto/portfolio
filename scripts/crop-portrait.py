"""
Crop public/assets/portrait.jpg to a target portrait aspect, anchored on the
subject. Trims white side margins, no upscaling, high-quality JPEG.

Two modes:
- Default (FACE_TOP_PCT = None):
    crop centred on the bbox of non-white pixels. Face ends up at upper-
    third (~30% from top). Conservative, keeps the suit visible.
- Face-forward (FACE_TOP_PCT set, e.g. 0.18):
    crop anchored so the bbox TOP sits at FACE_TOP_PCT of the output. Face
    appears higher in frame; bottom of suit gets clipped.

Usage:  python3 scripts/crop-portrait.py
"""
from pathlib import Path
import sys
import numpy as np
from PIL import Image

SRC = Path(__file__).resolve().parents[1] / "public" / "assets" / "portrait.jpg"
WHITE_THRESHOLD = 240   # pixels with all channels >= this are treated as background
TARGET_W_RATIO, TARGET_H_RATIO = 4, 5

# Set to a fraction (e.g. 0.08) to anchor the head closer to the top of
# the output frame. None = subject-bbox-centered (default).
FACE_TOP_PCT = None

if not SRC.exists():
    sys.exit(f"missing source file: {SRC}")

img = Image.open(SRC).convert("RGB")
W, H = img.size

arr = np.asarray(img)
mask = (arr < WHITE_THRESHOLD).any(axis=2)
ys, xs = np.where(mask)
if xs.size == 0:
    sys.exit("subject not detected (image appears all white)")

x_min, x_max = int(xs.min()), int(xs.max())
y_min, y_max = int(ys.min()), int(ys.max())
cx = (x_min + x_max) / 2.0
cy = (y_min + y_max) / 2.0

# Largest 4:5 region that fits inside source.
max_h = H
max_w = max_h * TARGET_W_RATIO / TARGET_H_RATIO
if max_w > W:
    max_w = W
    max_h = W * TARGET_H_RATIO / TARGET_W_RATIO

half_w, half_h = max_w / 2.0, max_h / 2.0
left = cx - half_w
right = cx + half_w

if FACE_TOP_PCT is None:
    top = cy - half_h
    bottom = cy + half_h
else:
    # Anchor bbox top to FACE_TOP_PCT of output. Trim from the bottom.
    top = y_min - max_h * FACE_TOP_PCT
    bottom = top + max_h

# Clamp to image, preserving box size by shifting.
if left < 0:
    right -= left; left = 0
elif right > W:
    left -= (right - W); right = W
if top < 0:
    bottom -= top; top = 0
elif bottom > H:
    top -= (bottom - H); bottom = H

box = (int(left), int(top), int(right), int(bottom))
cropped = img.crop(box)
cropped.save(SRC, "JPEG", quality=95, optimize=True, progressive=True)

print(f"src: {W}x{H} -> out: {cropped.size}  subject bbox=({x_min},{y_min})-({x_max},{y_max})  centered at ({cx:.0f},{cy:.0f})")
