// Données générées à partir du contenu de mon-portfolio (fr.json / en.json).
// Ordre : plus récent en premier. Pour ajouter un projet, ajoute une entrée ici
// et son image dans public/projects/.

type Localized<T> = { fr: T; en: T };

export interface Project {
  slug: string;
  category: 'web' | 'uxui';
  featured: boolean;
  image: string;
  gallery: string[];
  liveUrl: string | null;
  title: Localized<string>;
  subtitle: Localized<string>;
  desc: Localized<string>;
  features: Localized<string[]>;
  tools: Localized<string[]>;
}

export const projects: Project[] = [
  {
    "slug": "yas-passerelle-api-assistant-ia-fullstack",
    "category": "web",
    "featured": true,
    "image": "/projects/YasChatDesign.jpg",
    "gallery": [],
    "liveUrl": "https://yas.nelsongalley.online",
    "title": {
      "fr": "Yas - Passerelle API & Assistant Intelligent Full-Stack",
      "en": "Yas - API Gateway & Full-Stack Intelligent Assistant"
    },
    "subtitle": {
      "fr": "Développement Web Full-Stack - Python / Django / React.js / Azure AI",
      "en": "Full-Stack Web Development - Python / Django / React.js / Azure AI"
    },
    "desc": {
      "fr": "Yas est une application web moderne et performante conçue pour servir de passerelle intelligente et centralisée. Le projet intègre des fonctionnalités avancées d'intelligence artificielle générative via les SDK Azure AI Foundry et Azure AI Inference, tout en s'appuyant sur une architecture backend robuste et sécurisée construite avec Django REST Framework.\n\nDéveloppé avec un souci d'optimisation des performances et de scalabilité, Yas met en valeur des compétences pointues en ingénierie logicielle Full-Stack, intégration de services cloud Azure, et déploiement continu via GitHub Actions et Azure App Service.",
      "en": "Yas is a modern and high-performance web application designed to serve as a smart, centralized API gateway. The project integrates advanced generative AI capabilities through the Azure AI Foundry and Azure AI Inference SDKs, backed by a robust and secure Django REST Framework architecture.\n\nBuilt with performance and scalability in mind, Yas showcases advanced Full-Stack software engineering skills, Azure cloud service integration, and continuous deployment via GitHub Actions and Azure App Service."
    },
    "features": {
      "fr": [
        "API REST propre, structurée et sécurisée avec Python, Django & Django REST Framework (DRF)",
        "Intégration poussée de l'IA générative via les SDK Azure AI Foundry & Azure AI Inference (azure-ai-projects, azure-ai-inference, azure-identity)",
        "Base de données PostgreSQL hébergée et gérée via Supabase pour la persistance et la sécurité des données",
        "Interface utilisateur dynamique et réactive développée avec React.js et JavaScript",
        "Hébergement backend sur Azure App Service (Linux) piloté par le moteur de build Oryx",
        "Déploiements continus automatisés via workflows GitHub Actions (gestion d'artefacts et archives optimisées)",
        "Architecture découplée (Decoupled Architecture) séparant efficacement le client et l'API backend",
        "Gestion des environnements de prévisualisation frontend sur Vercel",
        "Versionnage et collaboration via Git & GitHub"
      ],
      "en": [
        "Clean, structured, and secure REST API built with Python, Django & Django REST Framework (DRF)",
        "Deep integration of generative AI via Azure AI Foundry & Azure AI Inference SDKs (azure-ai-projects, azure-ai-inference, azure-identity)",
        "PostgreSQL database hosted and managed via Supabase for data persistence, security and relational data flows",
        "Dynamic and reactive UI built with React.js and JavaScript",
        "Backend infrastructure hosted on Azure App Service (Linux) powered by the Oryx build engine",
        "Automated continuous deployments via GitHub Actions workflows (artifact management and optimized archives)",
        "Decoupled Architecture cleanly separating the client from the backend API",
        "Frontend preview environments managed on Vercel",
        "Version control and collaboration via Git & GitHub"
      ]
    },
    "tools": {
      "fr": [
        "Python",
        "Django",
        "Django REST Framework",
        "React.js",
        "Azure AI Foundry",
        "Azure AI Inference",
        "PostgreSQL",
        "Supabase",
        "Azure App Service",
        "GitHub Actions",
        "Vercel",
        "Git"
      ],
      "en": [
        "Python",
        "Django",
        "Django REST Framework",
        "React.js",
        "Azure AI Foundry",
        "Azure AI Inference",
        "PostgreSQL",
        "Supabase",
        "Azure App Service",
        "GitHub Actions",
        "Vercel",
        "Git"
      ]
    }
  },
  {
    "slug": "saas-deploiement-solutions-geospatiales-lizpack",
    "category": "web",
    "featured": true,
    "image": "/projects/Lizpack.jpeg",
    "gallery": [],
    "liveUrl": "https://lizpack.com",
    "title": {
      "fr": "SaaS de déploiement de solutions géospatiales (LizPack)",
      "en": "Geospatial Solutions Deployment SaaS (LizPack)"
    },
    "subtitle": {
      "fr": "Développement Frontend - React / UI SaaS",
      "en": "Frontend Development - React / UI SaaS"
    },
    "desc": {
      "fr": "Plateforme SaaS de déploiement et gestion d'infrastructures géospatiales (Lizmap, QGIS Server, PostGIS, PostgreSQL/MySQL et QField Cloud). J'ai travaillé sur le développement frontend complet de la plateforme, incluant les interfaces utilisateur, les dashboards et les parcours clients/partenaires, avec un focus sur l'expérience utilisateur et la clarté des informations complexes liées à la géomatique.",
      "en": "SaaS platform for deploying and managing geospatial infrastructure (Lizmap, QGIS Server, PostGIS, PostgreSQL/MySQL, and QField Cloud). I worked on the complete frontend development of the platform, including user interfaces, dashboards, and client/partner journeys, with a focus on user experience and clarity of complex geomatics-related information."
    },
    "features": {
      "fr": [
        "Dashboard utilisateur pour la gestion des projets et services géospatiaux",
        "Interface de déploiement simplifié des serveurs QGIS / Lizmap",
        "Visualisation des bases de données (PostgreSQL, PostGIS, MySQL)",
        "Interface QField Cloud pour le suivi terrain et la synchronisation des données",
        "Système de gestion des abonnements et plans tarifaires (Free, Pro, Enterprise)",
        "Parcours d'onboarding (inscription, déploiement, publication, collaboration)",
        "Pages marketing SaaS (produits, comment ça marche, pricing, documentation)",
        "Interface responsive et optimisée UX pour utilisateurs techniques et non-techniques",
        "Gestion des dashboards multi-profils (client / admin / partenaires)"
      ],
      "en": [
        "User dashboard for geospatial project and service management",
        "Simplified QGIS / Lizmap server deployment interface",
        "Database visualization (PostgreSQL, PostGIS, MySQL)",
        "QField Cloud interface for field tracking and data synchronization",
        "Subscription management system and pricing plans (Free, Pro, Enterprise)",
        "Onboarding journey (registration, deployment, publishing, collaboration)",
        "SaaS marketing pages (products, how it works, pricing, documentation)",
        "Responsive and UX-optimized interface for technical and non-technical users",
        "Multi-profile dashboard management (client / admin / partners)"
      ]
    },
    "tools": {
      "fr": [
        "React JS",
        "Tailwind CSS",
        "Figma",
        "REST API",
        "Git",
        "GitHub"
      ],
      "en": [
        "React JS",
        "Tailwind CSS",
        "Figma",
        "REST API",
        "Git",
        "GitHub"
      ]
    }
  },
  {
    "slug": "location-appartements-visites-360",
    "category": "web",
    "featured": true,
    "image": "/projects/tahaga1.png",
    "gallery": [],
    "liveUrl": "https://tahaga.com",
    "title": {
      "fr": "Location d’appartements - Visites 360°",
      "en": "Apartment Rentals - 360° Virtual Tours"
    },
    "subtitle": {
      "fr": "Développement Web - React / Django",
      "en": "Web Development - React / Django"
    },
    "desc": {
      "fr": "Plateforme de location d’appartements meublés conçue pour simplifier la recherche et la réservation. Explorez les logements à distance grâce à des visites virtuelles immersives à 360°.",
      "en": "A furnished apartment rental platform designed to simplify search and booking. Explore properties remotely through immersive 360° virtual tours."
    },
    "features": {
      "fr": [
        "Catalogue d’appartements meublés",
        "Visites virtuelles immersives en 360°",
        "Recherche et filtres avancés",
        "Fiches détaillées des logements",
        "Tableau de bord administrateur",
        "Gestion des appartements et des contenus",
        "Espace partenaire pour les propriétaires",
        "Suivi des demandes et réservations",
        "Formulaire de contact et demandes de réservation"
      ],
      "en": [
        "Furnished apartment listings",
        "Immersive 360° virtual tours",
        "Advanced search and filters",
        "Detailed property pages",
        "Admin dashboard",
        "Property and content management",
        "Partner space for property owners",
        "Booking and inquiry management",
        "Contact and booking request forms"
      ]
    },
    "tools": {
      "fr": [
        "React JS",
        "Django",
        "PostgreSQL",
        "Tailwind CSS",
        "Chart.js"
      ],
      "en": [
        "React JS",
        "Python",
        "PostgreSQL",
        "Figma",
        "Vercel"
      ]
    }
  },
  {
    "slug": "saas-gestion-conteneurs",
    "category": "web",
    "featured": false,
    "image": "/projects/gcont.png",
    "gallery": [],
    "liveUrl": "https://fonc.gcontinternational.com",
    "title": {
      "fr": "SaaS de gestion des conteneurs",
      "en": "Container Management SaaS"
    },
    "subtitle": {
      "fr": "Développement Web - React / Django",
      "en": "Web Development - React / Django"
    },
    "desc": {
      "fr": "Plateforme SaaS de gestion des conteneurs destinée à optimiser le suivi, la traçabilité et les opérations logistiques de l’entreprise G-Cont. Centralisez les données et simplifiez les processus métiers.",
      "en": "SaaS platform for container management designed to optimize tracking, traceability, and logistics operations for G-Cont. Centralize data and simplify business processes."
    },
    "features": {
      "fr": [
        "Suivi en temps réel des conteneurs avec statut (chargé, en transit, arrivé, livré)",
        "Gestion des expéditions et affectation des conteneurs par client",
        "Dashboard logistique centralisé pour toutes les opérations",
        "Réservation et allocation des conteneurs disponibles",
        "Traçabilité complète de chaque conteneur avec historique",
        "Gestion des ports et des trajets maritimes",
        "Module de documents logistiques (BL, douane, factures)",
        "Alertes automatiques (retard, blocage, incident)",
        "Gestion des utilisateurs et partenaires logistiques",
        "Statistiques et suivi des performances logistiques"
      ],
      "en": [
        "Real-time container tracking with status (loaded, in transit, arrived, delivered)",
        "Shipment management and container allocation per client",
        "Centralized logistics dashboard for all operations",
        "Container reservation and availability allocation system",
        "Full traceability of each container with complete history",
        "Port and maritime route management system",
        "Logistics documents module (Bill of Lading, customs, invoices)",
        "Automated alerts (delay, blockage, incident)",
        "User and logistics partner management system",
        "Analytics and performance tracking for logistics operations"
      ]
    },
    "tools": {
      "fr": [
        "React JS",
        "Django",
        "PostgreSQL",
        "Hostinger"
      ],
      "en": [
        "React JS",
        "Django",
        "PostgreSQL",
        "Hostinger"
      ]
    }
  },
  {
    "slug": "plateforme-gestion-documents-academiques",
    "category": "web",
    "featured": false,
    "image": "/projects/Docschool.jpg",
    "gallery": [],
    "liveUrl": null,
    "title": {
      "fr": "Bibliothèque Numérique de Projets de Fin d'Études",
      "en": "Digital Library for Academic Final Year Projects"
    },
    "subtitle": {
      "fr": "Ingénierie Logicielle & Intelligence Artificielle - React / Django",
      "en": "Software Engineering & Artificial Intelligence - React / Django"
    },
    "desc": {
      "fr": "Solution avancée de gestion et de partage de travaux académiques pour l'ESGIS. La plateforme intègre des modèles d'IA générative de pointe pour l'analyse sémantique et la dématérialisation des projets de fin d'études, facilitant l'accès au savoir via une architecture moderne.",
      "en": "Advanced Electronic Document Management (EDMS) solution developed for ESGIS University. The platform centralizes academic knowledge by allowing students to manage, share, and intelligently interact with research projects through a robust and scalable architecture."
    },
    "features": {
      "fr": [
        "Architecture API-First développée avec Django REST Framework (DRF)",
        "Gestion complète du cycle de vie des mémoires (dépôt, classification et archivage PDF)",
        "Moteur de recherche multicritère pour l'indexation des thématiques académiques",
        "Assistant intelligent basé sur Llama-3.3-70b pour l'interaction contextuelle avec les documents",
        "Système de persistance des données pour la gestion des ressources favorites",
        "Module collaboratif (commentaires et likes) pour l'apprentissage social",
        "Authentification sécurisée stateless par token JWT avec gestion des rôles (RBAC)",
        "Interface responsive (Mobile-First) optimisée pour une haute disponibilité",
        "Modélisation de données relationnelle organisée par domaines et mentions académiques",
        "Intégration hybride multi-modèles (Google AI & Llama) pour une analyse sémantique accrue"
      ],
      "en": [
        "API-First architecture developed with Django REST Framework (DRF)",
        "Complete document lifecycle management (upload, classification, and PDF archiving)",
        "Multi-criteria search engine for indexing academic research themes",
        "AI Assistant powered by Llama-3.3-70b for contextual interaction with documents",
        "Data persistence system for managing favorite resources and research",
        "Collaborative module (comments and likes) to foster social learning",
        "Stateless security via JWT authentication with Role-Based Access Control (RBAC)",
        "Mobile-First responsive interface optimized for high availability",
        "Relational data modeling organized by academic fields and specialties",
        "Hybrid multi-model integration (Google AI & Llama) for enhanced semantic analysis"
      ]
    },
    "tools": {
      "fr": [
        "React JS",
        "Django REST Framework",
        "PostgreSQL",
        "Llama 3.3 70B",
        "Google AI (Gemini)",
        "GroqCloud",
        "JWT"
      ],
      "en": [
        "React JS",
        "Django REST Framework",
        "PostgreSQL",
        "Llama 3.3 70B",
        "Google AI (Gemini)",
        "GroqCloud",
        "JWT"
      ]
    }
  },
  {
    "slug": "systeme-emargement-numerique",
    "category": "web",
    "featured": false,
    "image": "/projects/EmargementGardPage.jpg",
    "gallery": [],
    "liveUrl": "https://emargement-one.vercel.app",
    "title": {
      "fr": "Système d’Émargement Numérique",
      "en": "Digital Attendance System"
    },
    "subtitle": {
      "fr": "Solution simple d’émargement pour les enseignants",
      "en": "Simple attendance solution for teachers"
    },
    "desc": {
      "fr": "Solution simple d’émargement numérique pour les établissements et enseignants. Signez les feuilles de présence en un clic, éliminez le papier et suivez/validez les cours en toute sécurité et en temps réel via une API REST.",
      "en": "Simple digital attendance solution for schools and teachers. Sign attendance sheets in one click, eliminate paper, and track and validate classes securely and in real time via a REST API."
    },
    "features": {
      "fr": [
        "Signature d’émargement en un clic pour les enseignants",
        "Suivi des présences en temps réel via API REST",
        "Authentification sécurisée pour enseignants et administrateurs",
        "Validation des cours et gestion des séances",
        "Interface mobile-first simple et rapide",
        "Remplacement des feuilles de présence papier par le numérique",
        "Historique des présences par classe",
        "Expérience utilisateur optimisée pour un usage quotidien",
        "Déploiement et hébergement de l’interface frontend"
      ],
      "en": [
        "One-click attendance signing for teachers",
        "Real-time attendance tracking via REST API",
        "Secure authentication for teachers and administrators",
        "Class validation and session management",
        "Mobile-first simple and fast interface",
        "Paperless digital attendance system",
        "Attendance history by class",
        "Optimized user experience for daily usage",
        "Frontend deployment and hosting"
      ]
    },
    "tools": {
      "fr": [
        "React JS",
        "Django",
        "PostgreSQL",
        "Figma",
        "API REST",
        "Vercel"
      ],
      "en": [
        "React JS",
        "Django",
        "PostgreSQL",
        "Figma",
        "REST API",
        "Vercel"
      ]
    }
  },
  {
    "slug": "plateforme-recrutement-influenceurs",
    "category": "web",
    "featured": false,
    "image": "/projects/influ.png",
    "gallery": [],
    "liveUrl": "https://influencehub-eta.vercel.app",
    "title": {
      "fr": "Plateforme de Recrutement d’Influenceurs",
      "en": "Influencer Recruitment Platform"
    },
    "subtitle": {
      "fr": "Développement Web - React / Django",
      "en": "Web Development - React / Django"
    },
    "desc": {
      "fr": "Plateforme SaaS de mise en relation entre influenceurs et marques, permettant aux créateurs de contenu de soumettre leur profil et d’être découverts par des entreprises recherchant des profils avec audience. L’objectif est de transformer l’audience des influenceurs en opportunités monétisables.",
      "en": "SaaS platform connecting influencers and brands, allowing content creators to submit their profiles and be discovered by companies looking for specific audience profiles. The goal is to turn influencer audiences into monetizable opportunities."
    },
    "features": {
      "fr": [
        "Soumission de profil pour influenceurs (+10 000 abonnés)",
        "Système de mise en relation entre marques et influenceurs",
        "Base de données d’influenceurs actifs et classés par niche",
        "Visibilité des profils pour les marques partenaires",
        "Système de recherche et filtrage des influenceurs",
        "Dashboard pour suivi des opportunités et collaborations",
        "Indicateurs de performance (abonnés, engagement, potentiel)",
        "Statistiques globales (influenceurs actifs, revenus générés, marques partenaires)",
        "Système de visibilité maximale pour les profils influenceurs",
        "Interface optimisée pour acquisition et conversion des influenceurs"
      ],
      "en": [
        "Influencer profile submission (+10,000 followers requirement)",
        "Matching system between brands and influencers",
        "Database of active influencers categorized by niche",
        "High visibility profiles for partner brands",
        "Advanced search and filtering system for influencers",
        "Dashboard for tracking opportunities and collaborations",
        "Performance indicators (followers, engagement, potential reach)",
        "Global statistics (active influencers, generated revenue, partner brands)",
        "Maximum visibility system for influencer profiles",
        "Optimized interface for influencer acquisition and conversion"
      ]
    },
    "tools": {
      "fr": [
        "React JS",
        "Django",
        "PostgreSQL",
        "JWT",
        "CSS3",
        "API REST"
      ],
      "en": [
        "React JS",
        "Django",
        "PostgreSQL",
        "JWT",
        "CSS3",
        "REST API"
      ]
    }
  },
  {
    "slug": "plateforme-gestion-immobiliere",
    "category": "web",
    "featured": false,
    "image": "/projects/Ekimmo.png",
    "gallery": [],
    "liveUrl": "https://ekimmobilier.techmindcommunity.com",
    "title": {
      "fr": "Plateforme de Gestion Immobilière",
      "en": "Real Estate Management Platform"
    },
    "subtitle": {
      "fr": "Développement Web - WordPress (Elementor) / Node.js / MySQL",
      "en": "Web Development - WordPress (Elementor) / Node.js / MySQL"
    },
    "desc": {
      "fr": "Plateforme immobilière complète incluant la gestion des biens, un dashboard partenaire, un panneau d'administration, des outils de gestion, un blog intégré et un système de chat en temps réel. Développée avec un backend Node.js scalable et un frontend WordPress Elementor pour une gestion de contenu flexible.",
      "en": "Full-featured real estate platform including property listings, partner dashboard, admin panel, management tools, integrated blog, and real-time chat system. Built with a scalable Node.js backend and a WordPress Elementor-based frontend for flexible content management."
    },
    "features": {
      "fr": [
        "Gestion des biens immobiliers avec détails complets et médias",
        "Système de recherche et filtres avancés pour les propriétés",
        "Dashboard administrateur pour le contrôle complet de la plateforme et des utilisateurs",
        "Dashboard partenaire pour la gestion des annonces et demandes",
        "Dashboard manager pour le suivi des opérations",
        "Blog intégré pour les actualités immobilières",
        "Système de chat en temps réel entre utilisateurs et partenaires",
        "Gestion des rôles (Admin, Manager, Partenaire, Client)",
        "Interface responsive construite avec Elementor pour une gestion facile du contenu",
        "Optimisation SEO pour améliorer la visibilité et le trafic"
      ],
      "en": [
        "Property listing management with detailed information and media support",
        "Advanced search and filtering system for properties",
        "Admin dashboard for full platform control and user management",
        "Partner dashboard for managing listings and requests",
        "Manager dashboard for operational oversight",
        "Integrated blog system for real estate news and updates",
        "Real-time chat system for communication between users and partners",
        "Role-based access control (Admin, Manager, Partner, Client)",
        "Responsive UI built with Elementor for easy content editing",
        "SEO optimization for better visibility and traffic growth"
      ]
    },
    "tools": {
      "fr": [
        "WordPress",
        "Elementor",
        "Node.js",
        "MySQL",
        "JavaScript",
        "CSS3",
        "SEO"
      ],
      "en": [
        "WordPress",
        "Elementor",
        "Node.js",
        "MySQL",
        "JavaScript",
        "CSS3",
        "SEO"
      ]
    }
  },
  {
    "slug": "audit-securite-wordpress-wp-guard",
    "category": "uxui",
    "featured": true,
    "image": "/projects/wpgard.png",
    "gallery": [
      "/projects/wpgard.png",
      "/projects/wpgard-full.png",
      "/projects/wpgard1.png",
      "/projects/wpgard2.png"
    ],
    "liveUrl": "https://www.figma.com/proto/4cFf0JAxIFrIayPKQCXPQQ/MySchool-App-Landing-Page?node-id=231-30&p=f&t=G1vgYoYcEXqQCacu-1&scaling=scale-down&content-scaling=fixed&page-id=144%3A2",
    "title": {
      "fr": "WP-Guard - Audit de sécurité WordPress",
      "en": "WP-Guard - WordPress Security Audit"
    },
    "subtitle": {
      "fr": "UX/UI Design - Maquette Figma",
      "en": "UX/UI Design - Figma Mockup"
    },
    "desc": {
      "fr": "Maquette Figma réalisée pour WP-Guard, un service d'audit de sécurité pour sites WordPress et e-commerce. Le concept : votre site WordPress a des failles, WP-Guard les trouve avant les hackers. J'ai conçu le design de la landing page complète : proposition de valeur, services, tarification et CTA - une interface claire et professionnelle pour rassurer les clients et convertir.",
      "en": "Figma mockup created for WP-Guard, a security audit service for WordPress and e-commerce websites. The concept: your WordPress site has vulnerabilities, and WP-Guard finds them before hackers do. I designed the complete landing page: value proposition, services, pricing and CTA - a clear, professional interface built to reassure clients and convert."
    },
    "features": {
      "fr": [
        "Conception de la landing page complète (hero, services, tarification, CTA)",
        "Mise en avant de la proposition de valeur sécurité",
        "Design professionnel et rassurant pour les clients WordPress",
        "Parcours utilisateur optimisé vers la prise de contact",
        "Prototype interactif haute fidélité sur Figma"
      ],
      "en": [
        "Complete landing page design (hero, services, pricing, CTA)",
        "Highlighting the security value proposition",
        "Professional, reassuring design for WordPress clients",
        "User journey optimized toward getting in touch",
        "High-fidelity interactive prototype in Figma"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX/UI Design",
        "Prototypage",
        "Design System"
      ],
      "en": [
        "Figma",
        "UX/UI Design",
        "Prototyping",
        "Design System"
      ]
    }
  },
  {
    "slug": "refonte-ux-ui-bizprex-institute",
    "category": "uxui",
    "featured": true,
    "image": "/projects/bizprex-institute.png",
    "gallery": [
      "/projects/bizprex-institute.png",
      "/projects/bizprex1.png",
      "/projects/bizprex2.png",
      "/projects/bizprex3.png",
      "/projects/bizprex4.png",
      "/projects/bizprex5.png",
      "/projects/bizprex6.png",
      "/projects/bizprex7.png"
    ],
    "liveUrl": "https://www.figma.com/proto/d9BIeMn0eMdWtxb1WvOnfq/Bizprex-Institute-Vitrine?node-id=5-2&p=f&t=or86QiUIAapZ9Vnc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    "title": {
      "fr": "Bizprex Institute - Refonte UX/UI de la plateforme de formation",
      "en": "Bizprex Institute - UX/UI Redesign of the Training Platform"
    },
    "subtitle": {
      "fr": "UX/UI Design - Figma",
      "en": "UX/UI Design - Figma"
    },
    "desc": {
      "fr": "Bizprex Institute est une plateforme de formation professionnelle. J'ai réalisé une refonte complète de leur site vitrine sur Figma, couvrant plusieurs pages et sections : la page d'accueil avec toutes ses sections (hero, formations, à propos, témoignages, CTA...) ainsi que la page de détail d'une formation. L'objectif était d'améliorer la clarté de l'offre, moderniser l'interface et faciliter le parcours de l'utilisateur de la découverte jusqu'à l'inscription.",
      "en": "Bizprex Institute is a professional training platform. I carried out a complete redesign of their website in Figma, covering several pages and sections: the home page with all its sections (hero, courses, about, testimonials, CTA...) and the course detail page. The goal was to clarify the offer, modernize the interface and make the user journey smoother, from discovery to enrollment."
    },
    "features": {
      "fr": [
        "Page d'accueil complète avec toutes les sections (hero, formations, à propos, CTA...)",
        "Page de détail d'une formation avec toutes les informations clés",
        "Nouvelle hiérarchie visuelle et parcours utilisateur optimisé",
        "Présentation claire et structurée des formations disponibles",
        "Design system cohérent avec l'identité de marque de Bizprex",
        "Interface responsive adaptée mobile et desktop",
        "Prototype interactif haute fidélité sur Figma"
      ],
      "en": [
        "Complete home page with all sections (hero, courses, about, CTA...)",
        "Course detail page with all the key information",
        "New visual hierarchy and optimized user journey",
        "Clear, structured presentation of the available courses",
        "Design system consistent with Bizprex's brand identity",
        "Responsive interface for mobile and desktop",
        "High-fidelity interactive prototype in Figma"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX/UI Design",
        "Prototypage",
        "Wireframing",
        "Design System"
      ],
      "en": [
        "Figma",
        "UX/UI Design",
        "Prototyping",
        "Wireframing",
        "Design System"
      ]
    }
  },
  {
    "slug": "plateforme-abonnements-partages-bonemia",
    "category": "uxui",
    "featured": true,
    "image": "/projects/bonemia.png",
    "gallery": [
      "/projects/Bonemia1.png",
      "/projects/bonemia.png",
      "/projects/bonemia2.png"
    ],
    "liveUrl": "https://bonemia.nelsongalley.online/fr",
    "title": {
      "fr": "Plateforme d'abonnements partagés (Bonemia)",
      "en": "Shared Subscriptions Platform (Bonemia)"
    },
    "subtitle": {
      "fr": "UX/UI Design - Figma",
      "en": "UX/UI Design - Figma"
    },
    "desc": {
      "fr": "Plateforme web permettant aux utilisateurs d'accéder à des abonnements premium (Canva, Netflix, Spotify, ChatGPT, Claude code, etc.) à des prix réduits. Plus de 100 membres économisent déjà jusqu'à 75%. Le parcours utilisateur inclut la sélection, la réservation et un paiement facilité via WhatsApp.",
      "en": "Web platform giving users access to premium subscriptions (Canva, Netflix, Spotify, ChatGPT, Claude Code, etc.) at reduced prices. More than 100 members already save up to 75%. The user journey covers selection, booking and easy payment via WhatsApp."
    },
    "features": {
      "fr": [
        "Landing page engageante présentant la proposition de valeur",
        "Catalogue complet des abonnements avec système de filtrage",
        "Processus d'inscription et de connexion simplifié (OTP)",
        "Parcours de réservation clair et rassurant pour l'utilisateur",
        "Pages légales, FAQ et section d'aide complètes",
        "Interface responsive (mobile, tablette, desktop) et moderne"
      ],
      "en": [
        "Engaging landing page presenting the value proposition",
        "Complete subscription catalog with filtering",
        "Simplified sign-up and login flow (OTP)",
        "Clear, reassuring booking journey for the user",
        "Legal pages, FAQ and a complete help section",
        "Modern, responsive interface (mobile, tablet, desktop)"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX/UI Design",
        "Prototypage",
        "Wireframing"
      ],
      "en": [
        "Figma",
        "UX/UI Design",
        "Prototyping",
        "Wireframing"
      ]
    }
  },
  {
    "slug": "plateforme-ressources-academiques-doon",
    "category": "uxui",
    "featured": false,
    "image": "/projects/Doon.png",
    "gallery": [
      "/projects/Doon.png",
      "/projects/doon-full.png",
      "/projects/doon1.png",
      "/projects/doon2.png",
      "/projects/DoonFlyer.jpg"
    ],
    "liveUrl": "https://www.figma.com/proto/CRnJlq8SmOVB5NmKqOJgyC/bonemia?node-id=217-365&t=MCkTDutOE5UiYBCq-1",
    "title": {
      "fr": "Doon - Ressources académiques partagées",
      "en": "Doon - Shared Academic Resources"
    },
    "subtitle": {
      "fr": "UX/UI Design - Figma",
      "en": "UX/UI Design - Figma"
    },
    "desc": {
      "fr": "Doon est une plateforme communautaire pensée pour les étudiants. Elle permet d'accéder à des cours, épreuves passées et travaux pratiques partagés par la communauté étudiante. Le principe : ensemble, on va plus loin. J'ai conçu l'interface de A à Z, de la landing page jusqu'aux écrans de navigation des ressources, avec un design moderne, accessible et rassurant pour les étudiants.",
      "en": "Doon is a community platform designed for students. It gives access to courses, past exams and lab work shared by the student community. The idea: together, we go further. I designed the interface from A to Z, from the landing page to the resource browsing screens, with a modern, accessible and reassuring design for students."
    },
    "features": {
      "fr": [
        "Landing page claire avec proposition de valeur immédiate",
        "Catalogue de ressources (cours, épreuves, TP) filtrable par matière",
        "Système de partage de documents par la communauté",
        "Interface épurée et accessible, pensée pour les étudiants",
        "Design système cohérent et responsive (mobile & desktop)",
        "Flyer promotionnel et identité visuelle de la plateforme"
      ],
      "en": [
        "Clear landing page with an immediate value proposition",
        "Resource catalog (courses, exams, labs) filterable by subject",
        "Community document-sharing system",
        "Clean, accessible interface designed for students",
        "Consistent, responsive design system (mobile & desktop)",
        "Promotional flyer and visual identity for the platform"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX/UI Design",
        "Prototypage",
        "Wireframing",
        "Design System"
      ],
      "en": [
        "Figma",
        "UX/UI Design",
        "Prototyping",
        "Wireframing",
        "Design System"
      ]
    }
  },
  {
    "slug": "refonte-ux-ui-nsia-banque-togo",
    "category": "uxui",
    "featured": true,
    "image": "/projects/nsia-hero.png",
    "gallery": [
      "/projects/nsia1.png",
      "/projects/nsia2.png",
      "/projects/nsia3.png",
      "/projects/nsia4.png",
      "/projects/nsia5.png",
      "/projects/nsia6.jpg",
      "/projects/nsia7.png"
    ],
    "liveUrl": "https://www.figma.com/proto/n7RVUo14UHEi0V8VmrWqtZ/nsiaBanque?node-id=27-20&t=vg2GZnd7VRHkypv2-1",
    "title": {
      "fr": "NSIA Banque Togo - Concept de refonte UX/UI",
      "en": "NSIA Banque Togo - UX/UI Redesign Concept"
    },
    "subtitle": {
      "fr": "UX/UI Design - Figma (Concept personnel - non affilié à NSIA Banque Togo)",
      "en": "UX/UI Design - Figma (Personal Concept - Not affiliated with NSIA Banque Togo)"
    },
    "desc": {
      "fr": "Repenser l’expérience digitale d’une banque à travers une interface plus moderne, claire et intuitive, tout en préservant son identité visuelle.\n\nEn explorant régulièrement les plateformes digitales d’entreprises et d’institutions, j’ai analysé le site public de NSIA Banque Togo et développé une proposition de refonte centrée sur la clarté de l’information, la hiérarchisation des contenus, l'accès simplifié aux services et la modernisation globale de l’interface.\n\n Concept personnel - non affilié à NSIA Banque Togo.",
      "en": "Rethinking the digital banking experience through a modern, clear, and intuitive interface while preserving brand identity.\n\nBy exploring corporate and financial platforms, I analyzed the public website of NSIA Banque Togo and designed a redesign proposal focused on information clarity, content hierarchy, streamlined access to services, and overall interface modernization.\n\nPersonal concept - Not affiliated with NSIA Banque Togo."
    },
    "features": {
      "fr": [
        "Hero : Proposition de valeur immédiatement visible et parcours d'onboarding clair",
        "Navigation : Accès simplifié et fluide aux principales catégories et services bancaires",
        "Services & Offres : Présentation structurée, lisible et moderne des produits financiers",
        "Call to Action (CTA) : Mise en évidence des actions clés (ouverture de compte, banque en ligne)",
        "Design System : Renforcement de la cohérence visuelle tout en respectant l'identité de marque",
        "Expérience Mobile & Desktop : Conception responsive pensée pour une utilisation fluide sans friction",
        "Prototype interactif haute fidélité réalisé sur Figma"
      ],
      "en": [
        "Hero Section: Immediately visible value proposition and clear onboarding path",
        "Navigation: Simplified and smooth access to main banking categories and services",
        "Services & Products: Structured, readable, and modern presentation of financial offerings",
        "Call to Action (CTA): Prominent highlighting of key user actions (account opening, online banking)",
        "Design System: Enhanced visual consistency while respecting the bank's core branding",
        "Mobile & Desktop Experience: Responsive design engineered for seamless everyday usage",
        "High-fidelity interactive prototype created on Figma"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX Research",
        "Wireframing",
        "Prototyping"
      ],
      "en": [
        "Figma",
        "UX Research",
        "Wireframing",
        "Prototyping"
      ]
    }
  },
  {
    "slug": "refonte-ux-ui-moov-togo",
    "category": "uxui",
    "featured": true,
    "image": "/projects/Moov.jpg",
    "gallery": [],
    "liveUrl": "https://www.figma.com/proto/VgAPJMOgYsyv3wKNGFKBJq/moovAfrica?node-id=1-3&p=f&t=uwzkMvksuQN2z7zn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    "title": {
      "fr": "Refonte UX/UI de l’application Moov Togo",
      "en": "Moov Togo App UX/UI Redesign"
    },
    "subtitle": {
      "fr": "UX/UI Design - Figma",
      "en": "UX/UI Design - Figma"
    },
    "desc": {
      "fr": "Refonte complète de l’interface de l’application Moov Togo avec un focus sur l’accessibilité, la simplicité d’utilisation et l’amélioration de l’expérience utilisateur pour tous les profils d’utilisateurs.",
      "en": "Complete redesign of the Moov Togo mobile application focused on accessibility, usability, and improving the overall user experience for all user profiles."
    },
    "features": {
      "fr": [
        "Refonte complète de l’interface utilisateur (UI moderne et cohérente)",
        "Amélioration de l’expérience utilisateur (UX simplifiée et intuitive)",
        "Optimisation de l’accessibilité pour tous les utilisateurs",
        "Navigation fluide et structure d’information améliorée",
        "Design system cohérent pour l’ensemble de l’application"
      ],
      "en": [
        "Complete user interface redesign (modern and consistent UI)",
        "Improved user experience with simplified and intuitive navigation",
        "Accessibility optimization for all user types",
        "Smooth navigation and improved information architecture",
        "Consistent design system across the entire application"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX Research",
        "Wireframing",
        "Prototypage",
        "Design System"
      ],
      "en": [
        "Figma",
        "UX Research",
        "Wireframing",
        "Prototyping",
        "Design System"
      ]
    }
  },
  {
    "slug": "assistant-ia-yas-togo",
    "category": "uxui",
    "featured": true,
    "image": "/projects/YasDesign.jpg",
    "gallery": [],
    "liveUrl": "https://www.figma.com/proto/gLsbC8ZuML9ETFv9YRBrpg/nels?node-id=2255-9&t=s86lLy6Mtj0XdnBz-1",
    "title": {
      "fr": "Assistant IA – Yas Togo",
      "en": "AI Assistant – Yas Togo"
    },
    "subtitle": {
      "fr": "UX/UI Design - Figma",
      "en": "UX/UI Design - Figma"
    },
    "desc": {
      "fr": "Conception UX d’un assistant conversationnel intelligent permettant aux clients d’accéder rapidement et de manière autonome aux informations et services de Yas Togo.",
      "en": "UX design of an intelligent conversational assistant enabling customers to quickly and autonomously access information about Yas Togo services."
    },
    "features": {
      "fr": [
        "Interface de chat conversationnel avec assistant IA",
        "Accès rapide aux informations sur les services Yas Togo",
        "Réponses automatisées et intelligentes aux questions clients",
        "Navigation simplifiée sans parcours complexe",
        "Expérience utilisateur centrée sur la rapidité et l’autonomie",
        "Design UX optimisé pour une interaction naturelle (chat)",
        "Système de suggestions de réponses rapides",
        "Interface mobile-first intuitive et accessible",
        "Flux conversationnel structuré pour guider l’utilisateur",
        "Prototype haute fidélité interactif"
      ],
      "en": [
        "Conversational chat interface with AI assistant",
        "Quick access to Yas Togo service information",
        "Automated and intelligent responses to customer inquiries",
        "Simplified navigation without complex user flows",
        "Fast and autonomy-focused user experience",
        "UX design optimized for natural chat interaction",
        "Quick reply suggestion system",
        "Mobile-first intuitive and accessible interface",
        "Structured conversational flows to guide users",
        "High-fidelity interactive prototype"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX Research",
        "Wireframing",
        "Prototyping",
        "Conversational Design"
      ],
      "en": [
        "Figma",
        "UX Research",
        "Wireframing",
        "Prototyping",
        "Conversational Design"
      ]
    }
  },
  {
    "slug": "application-suivi-gps-intelligent",
    "category": "uxui",
    "featured": false,
    "image": "/projects/trackguard.png",
    "gallery": [],
    "liveUrl": "https://www.figma.com/proto/rlgwjqv3X6xNF2vHLb7gZn/Tracking-App?node-id=2487-457&t=pTgZBFAS2OQPfr3l-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2480%3A245&show-proto-sidebar=1",
    "title": {
      "fr": "Application de Suivi GPS Intelligent",
      "en": "Smart GPS Tracking Application"
    },
    "subtitle": {
      "fr": "UX/UI Design - Figma",
      "en": "UX/UI Design - Figma"
    },
    "desc": {
      "fr": "Conception UX/UI d’une application de suivi GPS en temps réel permettant de localiser des véhicules ou des personnes, avec des alertes de sécurité, zones de protection et contrôle à distance.",
      "en": "UX/UI design of a real-time GPS tracking application allowing users to locate vehicles or people, with safety alerts, geofencing, and remote control features."
    },
    "features": {
      "fr": [
        "Localisation GPS précise en temps réel",
        "Suivi en direct des véhicules ou des personnes (enfants)",
        "Alertes instantanées en cas de sortie de zone définie",
        "Création de zones de sécurité personnalisées",
        "Coupe moteur à distance via l’application",
        "Verrouillage du véhicule à distance",
        "Système d’alertes intelligentes en temps réel",
        "Interface de suivi simple et intuitive",
        "Historique des déplacements",
        "Tableau de bord de monitoring en temps réel"
      ],
      "en": [
        "Precise real-time GPS location tracking",
        "Live tracking of vehicles or people (e.g., children)",
        "Instant alerts when leaving a defined safe zone",
        "Customizable geofencing and security zones",
        "Remote engine shutdown via the application",
        "Remote vehicle locking system",
        "Smart real-time alert notifications",
        "Simple and intuitive tracking interface",
        "Movement history tracking",
        "Real-time monitoring dashboard"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX Research",
        "Prototyping",
        "User Flow",
        "Design System",
        "Mobile-first"
      ],
      "en": [
        "Figma",
        "UX Research",
        "Prototyping",
        "User Flow",
        "Design System",
        "Mobile-first"
      ]
    }
  },
  {
    "slug": "marketplace-agricole-design",
    "category": "uxui",
    "featured": false,
    "image": "/projects/agrimarcket.png",
    "gallery": [],
    "liveUrl": "https://www.figma.com/design/oygQKkujz25JaZQC4koMCv/AgriDigital?node-id=0-1&t=1xqW3Y5sUlxbaTrK-1",
    "title": {
      "fr": "Design de Marketplace Agricole",
      "en": "Agri Market Marketplace Design"
    },
    "subtitle": {
      "fr": "UX/UI Design - Figma",
      "en": "UX/UI Design - Figma"
    },
    "desc": {
      "fr": "Conception UX/UI d’une marketplace agricole connectant directement les agriculteurs et les acheteurs avec un système de commande intégré pour les produits, la logistique et les transactions.",
      "en": "UX/UI design of an agricultural marketplace connecting farmers and buyers with an integrated ordering system for products, logistics, and transactions."
    },
    "features": {
      "fr": [
        "Marketplace connectant directement agriculteurs et acheteurs",
        "Système de catalogue et de publication de produits agricoles",
        "Système de commande et de gestion des achats intégré",
        "Recherche et filtres par produit et localisation",
        "Gestion des profils agriculteurs et acheteurs",
        "Suivi des commandes et mises à jour de statut",
        "Communication sécurisée entre acheteurs et agriculteurs",
        "Interface responsive mobile-first",
        "Parcours d’achat simple et intuitif",
        "Expérience utilisateur centrée sur la confiance et la transparence"
      ],
      "en": [
        "Marketplace connecting farmers and buyers directly",
        "Product listing and agricultural catalog system",
        "Integrated order placement and management system",
        "Search and filtering by product type and location",
        "Farmer and buyer profile management",
        "Order tracking and status updates",
        "Secure communication between buyers and farmers",
        "Responsive mobile-first interface",
        "Simple and intuitive purchasing flow",
        "Trust-focused user experience for agricultural trade"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX Research",
        "Prototyping",
        "User Flow",
        "Design System"
      ],
      "en": [
        "Figma",
        "UX Research",
        "Prototyping",
        "User Flow",
        "Design System"
      ]
    }
  },
  {
    "slug": "dashboard-hotel-reservation-mokaa",
    "category": "uxui",
    "featured": false,
    "image": "/projects/mokaaa2.png",
    "gallery": [],
    "liveUrl": "https://www.figma.com/proto/RPN9kwKUezgWuTPAapYvDb/Has-voyage-brouiillons?node-id=2001-735&t=TMFzf8Jif2eSa6DN-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    "title": {
      "fr": "Dashboard Hôtel & Réservation – Mokaa Residence",
      "en": "Hotel & Reservation Dashboard - Mokaa Residence"
    },
    "subtitle": {
      "fr": "UX/UI Design - Figma",
      "en": "UX/UI Design - Figma"
    },
    "desc": {
      "fr": "Conception d’une plateforme web pour Mokaa Residence, une résidence hôtelière proposant des séjours courts et longs, avec restaurant, piscine et divers services. La plateforme inclut un système de réservation, un site vitrine et une interface de gestion des réservations.",
      "en": "Design of a web platform for Mokaa Residence, a hotel offering short and long stays with additional services such as restaurant, pool, and amenities. The platform includes a reservation system, a corporate website, and a user-friendly interface for managing bookings and showcasing services."
    },
    "features": {
      "fr": [
        "Système de réservation en ligne pour séjours courts et longs",
        "Présentation des services de l’hôtel (chambres, restaurant, piscine, équipements)",
        "Affichage de la disponibilité des chambres en temps réel",
        "Processus de réservation simple et optimisé pour la conversion",
        "Dashboard administrateur pour la gestion des réservations",
        "Interface responsive adaptée mobile, tablette et desktop",
        "Interface moderne mettant en valeur l’identité de l’hôtel",
        "Système de contact et de demande d’informations",
        "Navigation structurée pour les services de l’établissement",
        "Expérience utilisateur optimisée pour le secteur hôtelier"
      ],
      "en": [
        "Online room reservation system for short and long stays",
        "Hotel service presentation (rooms, restaurant, pool, amenities)",
        "Real-time availability display for rooms",
        "User-friendly booking flow optimized for conversions",
        "Admin dashboard for reservation and booking management",
        "Responsive design for mobile, tablet, and desktop",
        "Modern UI showcasing hotel branding and services",
        "Contact and inquiry system for customers",
        "Structured navigation for hotel services and information",
        "Optimized user experience for hospitality booking"
      ]
    },
    "tools": {
      "fr": [
        "Figma",
        "UX Research",
        "Wireframing",
        "Prototyping"
      ],
      "en": [
        "Figma",
        "UX Research",
        "Wireframing",
        "Prototyping"
      ]
    }
  }
];
