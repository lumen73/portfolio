import gedCover from "@/assets/ged-cover.webp";
import gedCover640 from "@/assets/ged-cover-640.webp";
import gedDesktopList from "@/assets/ged-list-desktop.webp";
import gedMobileList from "@/assets/ged-list-mobile.webp";
import gedVideo from "../assets/ged-demo.mp4";

import sportSpaceCover from "@/assets/sportspace-cover.webp";
import sportSpaceCover640 from "@/assets/sportspace-cover-640.webp";
import sportSpaceSchedule from "@/assets/sportspace-schedule.webp";
import sportSpaceTeams from "@/assets/sportspace-teams.webp";
import sportSpaceScores from "@/assets/sportspace-scores.webp";
import sportSpaceVideo from "../assets/sportspace-demo.mp4";

import tpgStockCover from "@/assets/tpgstock-cover.webp";
import tpgStockCover640 from "@/assets/tpgstock-cover-640.webp";
import tpgStockMobile from "@/assets/tpgstock-mobile.webp";
import tpgStockCategories from "@/assets/tpgstock-categories.webp";
import tpgStockArticle from "@/assets/tpgstock-article.webp";
import tpgStockVideo from "../assets/tpgstock-demo.mp4";

import rgph5Cover from "@/assets/rgph5-cover.webp";
import rgph5CitiesMobile from "@/assets/rgph5-cities-mobile.webp";
import rgph5Reports from "@/assets/rgph5-reports.webp";
import rgph5ReportsMobile from "@/assets/rgph5-reports-mobile.webp";
import rgph1Poster from "@/assets/rgph1-poster.webp";
import rgph1Video from "../assets/rgph1-demo.mp4";
import rgph5Video from "../assets/rgph5-demo.mp4";

/**
 * Copywriting and media for the projects section.
 * Copywriting uses the supplied CV, project captures, and demo videos.
 * Values visible in demo captures are not presented as production metrics.
 */
export const projectsData = [
  {
    id: "ged",
    title: "GED",
    category: "Gestion documentaire",
    summary: "Retrouver, classer et suivre les documents dans un espace de gestion unique.",
    problem: "retrouver une pièce par son nom, sa catégorie et son département",
    techStack: ["PHP natif", "MySQL (PDO)", "Bootstrap"],
    security:
      "Sessions, CSRF, requêtes préparées et mots de passe hachés. Les PDF sont contrôlés (type, extension et taille ≤ 10 Mo) ; les nouveaux fichiers sont stockés par défaut hors du dossier public.",
    codeUrl: "https://github.com/lumen73/ged",
    media: {
      cover: gedCover,
      coverSrcSet: `${gedCover640} 640w, ${gedCover} 1280w`,
      coverSizes: "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw",
      coverWidth: 1280,
      coverHeight: 800,
      coverAlt: "Écran de connexion de l'application GED",
      screenshots: [
        {
          src: gedDesktopList,
          width: 1280,
          height: 800,
          alt: "Liste des documents GED sur ordinateur",
        },
        {
          src: gedMobileList,
          width: 589,
          height: 1280,
          alt: "Liste des documents GED sur mobile",
        },
      ],
      demoVideo: gedVideo,
      poster: gedCover,
      note: "Captures d'une instance de démonstration.",
    },
  },
  {
    id: "sportspace",
    title: "SportSpace",
    category: "Gestion sportive",
    summary: "Le calendrier, les équipes et les scores d'une compétition au même endroit.",
    problem:
      "Programmer les rencontres et suivre leur état ou leur résultat demande une vue claire sur les équipes et le calendrier.",
    features:
      "Trois rôles, quatre statuts de match (en cours, terminé, reporté, annulé), filtres partageables et téléversement de drapeaux validé.",
    security:
      "Drapeaux contrôlés par type MIME, contenu et dimensions (40 Mpx maximum ; fichier limité à 8 Mo).",
    techStack: ["PHP 8", "MySQL (PDO)", "Apache"],
    codeUrl: "https://github.com/lumen73/SportSpace",
    media: {
      cover: sportSpaceCover,
      coverSrcSet: `${sportSpaceCover640} 640w, ${sportSpaceCover} 1280w`,
      coverSizes: "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw",
      coverWidth: 1280,
      coverHeight: 800,
      coverAlt: "Écran Sportspace des rencontres et résultats",
      screenshots: [
        {
          src: sportSpaceSchedule,
          width: 1280,
          height: 800,
          alt: "Programmation des rencontres dans Sportspace",
        },
        {
          src: sportSpaceTeams,
          width: 589,
          height: 1280,
          alt: "Vue mobile des équipes Sportspace",
        },
        {
          src: sportSpaceScores,
          width: 589,
          height: 1280,
          alt: "Vue mobile des scores Sportspace",
        },
      ],
      demoVideo: sportSpaceVideo,
      poster: sportSpaceCover,
      note: "Les équipes, dates et scores visibles dans les captures illustrent l'interface de démonstration.",
    },
  },
  {
    id: "tpgstock",
    title: "TPGStock : gestion de stock d’un commerce",
    category: "Gestion de stock",
    summary: "Donner au commerçant une lecture simple de son catalogue et de ses articles.",
    problem:
      "Le suivi courant doit rendre visibles les catégories, les articles, les quantités disponibles et les prix sans multiplier les écrans dispersés.",
    features: "Tableau de bord, catégories et articles. Photos JPG, PNG ou WebP jusqu'à 5 Mo.",
    security:
      "Protection CSRF, requêtes préparées et validation MIME des photos (JPG, PNG ou WebP, ≤ 5 Mo).",
    techStack: ["PHP 8", "MySQL 8", "Apache"],
    codeUrl: "https://github.com/lumen73/tpgstock",
    media: {
      cover: tpgStockCover,
      coverSrcSet: `${tpgStockCover640} 640w, ${tpgStockCover} 1280w`,
      coverSizes: "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw",
      coverWidth: 1280,
      coverHeight: 800,
      coverAlt: "Vue d'ensemble du stock dans TPGStock",
      screenshots: [
        {
          src: tpgStockMobile,
          width: 589,
          height: 1280,
          alt: "Vue mobile de la gestion de stock TPGStock",
        },
        {
          src: tpgStockCategories,
          width: 1280,
          height: 800,
          alt: "Catalogue des articles par catégorie",
        },
        {
          src: tpgStockArticle,
          width: 1280,
          height: 800,
          alt: "Fiche détaillée d'un article",
        },
      ],
      demoVideo: tpgStockVideo,
      poster: tpgStockCover,
      note: "Les quantités affichées sont des données de démonstration, pas des résultats d'exploitation.",
    },
  },
  {
    id: "rgph",
    title: "RGPH",
    category: "Recensement & pilotage",
    summary:
      "Deux versions d'un module de recensement : de scripts à plat à une architecture MVC maison.",
    comparison: [
      {
        criterion: "Structure",
        v1: "Scripts à plat (logique, SQL et HTML mélangés)",
        v5: "MVC maison : routeur, 11 contrôleurs, 6 modèles",
      },
      {
        criterion: "Accès base",
        v1: "INSERT construit avec les valeurs de $_POST (injection SQL)",
        v5: "Modèles et noyau Database avec requêtes préparées",
      },
      {
        criterion: "Territoires",
        v1: "3 niveaux : département, commune, ville",
        v5: "4 niveaux : département, commune, arrondissement, ville",
      },
      {
        criterion: "Saisie",
        v1: "Une ville à la fois",
        v5: "Saisie multiple par lot (jusqu'à 50 arrondissements)",
      },
      { criterion: "Sorties", v1: "Totaux à l'écran", v5: "Rapports et export CSV" },
      {
        criterion: "Mise en place",
        v1: "Pas de script SQL d'installation",
        v5: "schema.sql, migrate.php, create_admin.php",
      },
    ],
    // demoUrl is optional and currently has no value.
    versions: [
      {
        id: "rgph5",
        label: "RGPH5 · Évolution",
        problem:
          "La V5 structure la saisie du recensement, le suivi territorial et la production des rapports.",
        features:
          "MVC maison avec routeur, 11 contrôleurs et 6 modèles ; saisie multiple jusqu'à 50 villes par lot ; rapports et export CSV.",
        security:
          "La couche Database exécute les requêtes via des requêtes préparées (PDO::prepare).",
        techStack: ["PHP", "PDO/MySQL", "MVC maison"],
        codeUrl: "https://github.com/lumen73/rgph/commit/ac5cd6abf3f33e951e9b75655e8b2e7d83ccc36d",
        media: {
          cover: rgph5Cover,
          poster: rgph5Cover,
          coverWidth: 1280,
          coverHeight: 800,
          coverAlt: "Interface RGPH5 de gestion et de recherche des villes",
          screenshots: [
            {
              src: rgph5CitiesMobile,
              width: 576,
              height: 1280,
              alt: "Vue mobile de la gestion des villes RGPH5",
            },
            {
              src: rgph5Reports,
              width: 1280,
              height: 800,
              alt: "Tableau de bord des rapports RGPH5",
            },
            {
              src: rgph5ReportsMobile,
              width: 576,
              height: 1280,
              alt: "Vue mobile des indicateurs RGPH5",
            },
          ],
          demoVideo: rgph5Video,
          note: "Les effectifs affichés dans les captures sont des données de démonstration.",
        },
      },
      {
        id: "rgph1",
        label: "RGPH1 · Version initiale",
        problem:
          "La première version saisit les effectifs ville par ville et affiche les totaux à l'écran.",
        features: "Scripts PHP à plat mêlant logique, SQL et HTML ; saisie d'une ville à la fois.",
        security:
          "Vulnérable à l'injection SQL : l'INSERT concatène directement les valeurs reçues par $_POST.",
        techStack: ["PHP", "MySQL"],
        codeUrl: "https://github.com/lumen73/rgph/commit/4196491a75c064301ec852c3c00c8c568e335a7b",
        media: {
          demoVideo: rgph1Video,
          poster: rgph1Poster,
          note: "Démo vidéo de la version initiale RGPH1.",
        },
      },
    ],
  },
];

export default projectsData;
