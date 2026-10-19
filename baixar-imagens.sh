#!/bin/sh
# Baixa as imagens originais do Wix para esta pasta (rode uma vez, com internet).
cd "$(dirname "$0")" || exit 1
curl -L -o lattes.jpg "https://static.wixstatic.com/media/a11273_bb7ac70bc2f84ca09145f76303bca458~mv2.jpg"
curl -L -o logos-completo.png "https://static.wixstatic.com/media/a11273_f12a00b4fe814233910973335ff8bac1~mv2.png"
# O Wix recortava a faixa de logos (1366x98 a partir de y=670). Requer ImageMagick:
convert logos-completo.png -crop 1366x98+0+670 +repage logos.png 2>/dev/null \
  || { echo "ImageMagick ausente: usando a imagem completa."; cp logos-completo.png logos.png; }
