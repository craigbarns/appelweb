import {
  MonitorSmartphone,
  PenTool,
  MapPin,
  ServerCog,
  Zap,
  Smartphone,
  MessageCircle,
  ClipboardList,
  Cloud,
  ShieldCheck,
  Search,
  Users,
  Star,
  TrendingUp,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  phoneDisplay: "06 17 18 29 79",
  phoneHref: "tel:+33617182979",
  whatsappDisplay: "06 17 18 29 79",
  whatsappHref: "https://wa.me/33617182979?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20site%20internet",
  email: "contact@appelweb.com",
};

export const TARGETS = [
  "plombiers",
  "électriciens",
  "couvreurs",
  "serruriers",
  "climaticiens",
  "artisans du bâtiment",
];

export type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export const STATS: Stat[] = [
  { value: "+200", label: "artisans accompagnés", icon: Users },
  { value: "4,9/5", label: "note de satisfaction", icon: Star },
  { value: "+38%", label: "d'appels en moyenne", icon: TrendingUp },
  { value: "5 jours", label: "pour être en ligne", icon: Rocket },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

export const SERVICES: Service[] = [
  {
    icon: MonitorSmartphone,
    title: "Création de site internet",
    description:
      "Un site moderne, rapide et pensé pour transformer vos visiteurs en appels et en devis.",
    highlights: ["Design sur-mesure", "Livré en 5 jours"],
  },
  {
    icon: PenTool,
    title: "Refonte de site web",
    description:
      "Votre site est dépassé ? On le transforme en véritable machine à clients, sans prise de tête.",
    highlights: ["Audit gratuit", "Migration incluse"],
  },
  {
    icon: Search,
    title: "Référencement Google local",
    description:
      "Apparaissez en haut de Google quand un client cherche un artisan près de chez lui.",
    highlights: ["SEO local", "Mots-clés métier"],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "Une fiche optimisée pour récolter des avis 5 étoiles et capter un maximum d'appels.",
    highlights: ["Fiche optimisée", "Gestion des avis"],
  },
  {
    icon: ServerCog,
    title: "Maintenance & hébergement",
    description:
      "On s'occupe de tout : mises à jour, sécurité, sauvegardes et hébergement haute performance.",
    highlights: ["Hébergement inclus", "Support réactif"],
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Site ultra rapide",
    description: "Chargement instantané. Un site lent fait fuir 1 client sur 2.",
  },
  {
    icon: Smartphone,
    title: "Optimisé mobile",
    description: "Parfait sur téléphone, là où 8 recherches sur 10 ont lieu.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp intégré",
    description: "Vos clients vous contactent en un clic, même le soir.",
  },
  {
    icon: ClipboardList,
    title: "Formulaire de devis",
    description: "Recevez des demandes qualifiées directement dans votre boîte mail.",
  },
  {
    icon: Cloud,
    title: "Hébergement inclus",
    description: "Serveurs rapides et sécurisés. Zéro frais caché, jamais.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance incluse",
    description: "Sécurité, sauvegardes et mises à jour gérées pour vous.",
  },
  {
    icon: MapPin,
    title: "SEO local",
    description: "Soyez visible dans votre ville et les communes alentour.",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    number: "01",
    title: "On échange",
    description:
      "On discute de votre métier, de vos objectifs et de vos clients. Gratuit et sans engagement.",
  },
  {
    number: "02",
    title: "On crée votre site",
    description:
      "Notre équipe conçoit un site sur-mesure, moderne et entièrement optimisé pour générer des appels.",
  },
  {
    number: "03",
    title: "Mise en ligne rapide",
    description:
      "Votre site est en ligne en quelques jours, nom de domaine et hébergement compris.",
  },
  {
    number: "04",
    title: "Vous recevez des appels",
    description:
      "Vos futurs clients vous trouvent sur Google et vous contactent directement. À vous de jouer.",
  },
];

export type Plan = {
  name: string;
  price: number;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: 49,
    tagline: "Pour démarrer avec un site pro qui inspire confiance.",
    features: [
      "Site vitrine 1 page",
      "Hébergement & nom de domaine inclus",
      "Certificat de sécurité SSL",
      "Optimisé mobile & rapide",
      "Formulaire de contact",
      "Maintenance de base",
    ],
    cta: "Choisir Starter",
  },
  {
    name: "Pro",
    price: 99,
    tagline: "Le choix des artisans qui veulent vraiment générer des appels.",
    features: [
      "Site complet jusqu'à 5 pages",
      "Tout ce qu'inclut Starter",
      "Référencement Google local",
      "Google Business Profile optimisé",
      "WhatsApp + formulaire de devis",
      "Maintenance prioritaire",
      "Modifications illimitées",
    ],
    cta: "Choisir Pro",
    featured: true,
  },
  {
    name: "Premium",
    price: 199,
    tagline: "Pour dominer votre zone et capter un maximum de clients.",
    features: [
      "Site sur-mesure illimité",
      "Tout ce qu'inclut Pro",
      "SEO local avancé multi-villes",
      "Rédaction de contenu pro",
      "Photos & visuels professionnels",
      "Support dédié 7j/7",
      "Rapport de performance mensuel",
    ],
    cta: "Choisir Premium",
  },
];

export type Testimonial = {
  name: string;
  job: string;
  city: string;
  initials: string;
  rating: number;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jean-Marc Berton",
    job: "Plombier chauffagiste",
    city: "Lyon (69)",
    initials: "JB",
    rating: 5,
    quote:
      "Depuis mon nouveau site, je reçois 3 à 4 appels de plus par semaine. Le formulaire de devis tourne tout seul, je ne cours plus après les clients.",
  },
  {
    name: "Sophie Laurent",
    job: "Électricienne",
    city: "Bordeaux (33)",
    initials: "SL",
    rating: 5,
    quote:
      "En deux mois, je suis passée en première page Google sur « électricien Bordeaux ». AppelWeb gère tout, je me concentre sur mon métier.",
  },
  {
    name: "Karim Benali",
    job: "Couvreur",
    city: "Marseille (13)",
    initials: "KB",
    rating: 5,
    quote:
      "Site livré en 5 jours, propre et rapide. Mes clients me disent qu'il fait très sérieux. Le rapport qualité-prix est imbattable.",
  },
  {
    name: "Thomas Mercier",
    job: "Serrurier",
    city: "Lille (59)",
    initials: "TM",
    rating: 5,
    quote:
      "Le bouton WhatsApp a tout changé. Les gens me contactent directement, même tard le soir. Pour 99€ par mois, c'est rentabilisé en un dépannage.",
  },
  {
    name: "Nadia Cherif",
    job: "Climaticienne",
    city: "Toulouse (31)",
    initials: "NC",
    rating: 5,
    quote:
      "Refonte complète de mon ancien site qui datait de dix ans. La différence est énorme : j'ai doublé mes demandes de devis cet été.",
  },
  {
    name: "Philippe Garnier",
    job: "Maçon",
    city: "Nantes (44)",
    initials: "PG",
    rating: 5,
    quote:
      "Enfin un site dont je suis fier. Moderne, parfait sur mobile, et je n'ai rien à gérer techniquement. Un service vraiment au top.",
  },
];

export type Realisation = {
  brand: string;
  trade: string;
  city: string;
  tagline: string;
  phone: string;
  services: string[];
  accent: string;
  tint: string;
  rating: string;
  variant: "classic" | "split" | "urgency";
  result: string;
  resultDetail: string;
  description: string;
};

export const REALISATIONS: Realisation[] = [
  {
    brand: "Plomberie Martin",
    trade: "Plombier",
    city: "Lyon",
    tagline: "Dépannage plomberie 24/7",
    phone: "04 78 12 34 56",
    services: ["Dépannage", "Fuite d'eau", "Chauffe-eau"],
    accent: "#2563EB",
    tint: "#EAF1FF",
    rating: "4,9 · 87 avis",
    variant: "classic",
    result: "+42% d'appels",
    resultDetail: "en 2 mois",
    description: "Site vitrine bleu épuré + SEO local. Désormais en 1ʳᵉ page Google sur « plombier Lyon ».",
  },
  {
    brand: "ClimPro",
    trade: "Climatisation",
    city: "Marseille",
    tagline: "Installation & entretien clim",
    phone: "04 91 23 45 67",
    services: ["Climatisation", "Entretien", "Dépannage"],
    accent: "#0891B2",
    tint: "#E3F7FC",
    rating: "4,8 · 124 avis",
    variant: "split",
    result: "×3 demandes",
    resultDetail: "de devis cet été",
    description: "Design cyan avec offre saisonnière + Google Business. Un pic de demandes capté en haute saison.",
  },
  {
    brand: "Serrurerie Express",
    trade: "Serrurier",
    city: "Lille",
    tagline: "Ouverture de porte en 30 min",
    phone: "03 20 34 56 78",
    services: ["Ouverture", "Blindage", "Serrures"],
    accent: "#EA580C",
    tint: "#FFF1E8",
    rating: "5,0 · 56 avis",
    variant: "urgency",
    result: "Appels 24/7",
    resultDetail: "via WhatsApp",
    description: "Site orange « urgence » avec gros bouton d'appel. Les dépannages tombent jour et nuit.",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Avis", href: "#avis" },
];
