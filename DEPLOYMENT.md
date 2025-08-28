# 🚀 Netlify Deployment Instrukcijas

## 📋 **Priekšnosacījumi**

- GitHub/GitLab konts
- Netlify konts (bezmaksas)

## 🔗 **1. GitHub Deployment (Ieteicams)**

### 1.1. Izveidojiet GitHub Repository
```bash
# Navigējiet uz projekta mapi
cd /Users/arturs_perevertailo/Desktop/dzīvoklis

# Inicializējiet Git repository
git init

# Pievienojiet visus failus
git add .

# Izveidojiet pirmo commit
git commit -m "Initial commit: Dzīvokļa pārdošanas lapa"

# Pievienojiet remote origin (aizstājiet ar savu repository URL)
git remote add origin https://github.com/YOUR_USERNAME/dzivoklis.git

# Pushojiet uz GitHub
git push -u origin main
```

### 1.2. Netlify Deployment
1. Atveriet [netlify.com](https://netlify.com)
2. Klikšķiniet **"New site from Git"**
3. Izvēlieties **GitHub**
4. Atrodiet savu `dzivoklis` repository
5. Klikšķiniet **"Deploy site"**

## 🔧 **2. Manuāla Deployment**

### 2.1. Instalējiet Netlify CLI
```bash
npm install -g netlify-cli
```

### 2.2. Login uz Netlify
```bash
netlify login
```

### 2.3. Deploy
```bash
# Navigējiet uz src mapi
cd src

# Deploy uz Netlify
netlify deploy --prod --dir=.
```

## 🌐 **3. Pēc Deployment**

### 3.1. Pārbaudiet lapu
- Atveriet saņemto Netlify URL
- Pārbaudiet, vai viss darbojas
- Testējiet mobilajās ierīcēs

### 3.2. Pielāgojiet domēnu (opcionāli)
- Netlify dashboard → Site settings → Domain management
- Pievienojiet savu domēnu

## 📱 **4. Testēšana**

### 4.1. Galvenās funkcijas
- ✅ Bildes galerija
- ✅ Lightbox
- ✅ Dropdown menu
- ✅ Maksājumu sadaļa (parole: dzivoklis2025)
- ✅ Papildus informācija (parole: dzivoklis2025)
- ✅ Kontaktu sadaļa
- ✅ Responsive dizains

### 4.2. Pārlūki
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## 🚨 **5. Problēmu Risināšana**

### 5.1. Attēli neparādās
- Pārbaudiet failu ceļus `src/images/`
- Pārbaudiet failu nosaukumus (ar īpašajiem burtiem)

### 5.2. JavaScript nedarbojas
- Pārbaudiet browser console
- Pārbaudiet, vai GSAP CDN ir pieejams

### 5.3. CSS nav pielādēts
- Pārbaudiet failu ceļus `src/css/`
- Pārbaudiet Netlify build logs

## 📞 **Atbalsts**

Ja rodas problēmas:
1. Pārbaudiet Netlify build logs
2. Pārbaudiet browser console
3. Pārbaudiet failu ceļus

---

**Veiksmīgu deployment! 🎉**
