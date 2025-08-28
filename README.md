# Pārdodas Dzīvoklis Āgenskalnā - Conscious Creator

Eleganta dzīvokļa pārdošanas mājas lapa ar modernu dizainu un interaktīvu funkcionalitāti.

## 🏠 **Projekta Apraksts**

Šī ir mājas lapa dzīvokļa pārdošanai Āgenskalnā, Meža ielā. Lapa iekļauj:

- **Bildes galeriju** ar 12 dzīvokļa attēliem
- **Pārdošanas cenu** €100,000
- **Maksājumu informāciju** ar paroli aizsargātu sadaļu
- **Papildus informāciju** ar PDF dokumentiem
- **Kontaktu informāciju** (e-pasts un tālrunis)

## 🚀 **Netlify Deployment**

### Automātiska Deployment:
1. Pievienojiet šo repository savam Netlify kontam
2. Netlify automātiski izmantos `netlify.toml` konfigurāciju
3. Lapa būs pieejama pēc dažām minūtēm

### Manuāla Deployment:
```bash
# Instalēt Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=src
```

## 📁 **Projekta Struktūra**

```
src/
├── apartment-gallery.html    # Galvenā HTML lapa
├── css/
│   └── apartment-gallery.css # Galvenie stili
├── js/
│   └── apartment-gallery.js  # JavaScript funkcionalitāte
├── images/                   # Dzīvokļa attēli
│   ├── ēka.PNG
│   ├── virtuve.PNG
│   ├── guļamistaba.PNG
│   └── ...
├── images/bills/            # Rēķinu attēli
│   ├── IMG_5766.JPG
│   └── ...
└── documents/               # PDF dokumenti
    ├── ZEMES NOMA.pdf
    ├── Meža iela_plāns.pdf
    └── Atskaite par paveikto 2009-2025.pdf
```

## 🎨 **Dizaina Iezīmes**

- **Conscious Creator** dizaina filozofija
- **Responsive** dizains mobilajām ierīcēm
- **GSAP animācijas** gludām pārejām
- **Lightbox** attēlu apskatei
- **Paroles aizsardzība** konfidenciālai informācijai

## 🔧 **Tehniskās Specifikācijas**

- **HTML5** semantiskais markup
- **CSS3** ar moderniem CSS Grid un Flexbox
- **JavaScript ES6+** ar GSAP bibliotēku
- **Responsive** dizains ar CSS media queries
- **Progressive Web App** funkcionalitāte

## 📱 **Pārlūku Atbalsts**

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 **Lokālā Izstrāde**

```bash
# Navigēt uz src mapi
cd src

# Startēt lokālo serveri
python3 -m http.server 8000

# Atvērt pārlūkā
open http://localhost:8000/apartment-gallery.html
```

## 📞 **Kontakti**

- **E-pasts:** martakmajore@gmail.com
- **Tālrunis:** +371 26 531 123

## 📄 **Licence**

Šis ir privāts projekts dzīvokļa pārdošanai.

---

**Izstrādāts ar ❤️ Conscious Creator dizaina filozofijā**