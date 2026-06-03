# AppelWeb — Landing page

Landing page premium pour **AppelWeb**, une entreprise qui crée des sites internet modernes pour les
artisans et entreprises locales (plombiers, électriciens, couvreurs, serruriers, climaticiens…).

> **Des sites internet qui génèrent des appels et des devis.**

## ✨ Stack technique

- **Next.js 14** (App Router) — export statique (`output: "export"`)
- **TailwindCSS 3** — design system sur-mesure (bleu foncé / blanc / bleu électrique)
- **Framer Motion** — animations fluides et reveals au scroll
- **Lucide Icons** — iconographie
- **Polices** Clash Display + Satoshi (via Fontshare)
- **SEO** — métadonnées, Open Graph, `sitemap.xml`, `robots.txt`, données structurées JSON-LD
- **Optimisé Netlify** — `netlify.toml` + formulaire de devis compatible Netlify Forms

## 🧱 Sections

1. **Hero** — titre, sous-titre, CTA (devis / rappel), fond animé, cartes UI flottantes
2. **Services** — création, refonte, référencement local, Google Business, maintenance
3. **Avant / Après** — comparateur interactif (glisser pour comparer)
4. **Pourquoi AppelWeb** — grille de bénéfices avec icônes
5. **Processus** — timeline en 4 étapes
6. **Tarifs** — Starter 49€ · Pro 99€ (mis en avant) · Premium 199€
7. **Avis clients** — témoignages d'artisans
8. **CTA final** — formulaire de devis + téléphone + WhatsApp
9. **Footer** — navigation, contact, mentions légales, réseaux sociaux

## 🚀 Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## 📦 Build de production (export statique)

```bash
npm run build
```

Le site statique est généré dans le dossier `out/`.

## ☁️ Déploiement Netlify

Le projet est prêt pour Netlify (`netlify.toml` inclus) :

- **Build command** : `npm run build`
- **Publish directory** : `out`

Connectez le dépôt à Netlify, ou utilisez `netlify deploy --prod --dir=out`.

### Formulaire de devis (Netlify Forms)

Le formulaire de la section contact (`name="devis"`) est compatible **Netlify Forms** :
les demandes apparaissent automatiquement dans l'onglet *Forms* de votre tableau de bord Netlify
une fois le site déployé. En local, la soumission affiche simplement l'état de confirmation.

## 🛠️ Personnalisation

Tout le contenu est centralisé dans **`lib/data.ts`** :

- `CONTACT` — téléphone, WhatsApp, email
- `SERVICES`, `FEATURES`, `STEPS`, `PLANS`, `TESTIMONIALS`

Les couleurs, polices, ombres et animations sont définies dans **`tailwind.config.ts`**.

> ⚠️ Le numéro de téléphone, le WhatsApp et les avis clients sont des **exemples** à remplacer
> par vos informations réelles avant la mise en production.
