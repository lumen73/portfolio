import gedCover from "../../sources_informations/ged-cover.png";
import gedDesktopList from "../../sources_informations/ged-list-desktop.png";
import gedMobileList from "../../sources_informations/ged-list-mobile.png";
import gedVideo from "../../sources_informations/ged_good_portfolio.mp4";

import sportSpaceCover from "../../sources_informations/localhost_td7_SportSpace_scorematch.php(Nest Hub Max).png";
import sportSpaceSchedule from "../../sources_informations/localhost_td7_SportSpace_ajoutermatch.php(Nest Hub Max).png";
import sportSpaceTeams from "../../sources_informations/localhost_td7_SportSpace_index.php(iPhone 16 Pro Max).png";
import sportSpaceScores from "../../sources_informations/localhost_td7_SportSpace_scorematch.php(iPhone 16 Pro Max).png";
import sportSpaceVideo from "../../sources_informations/sportspace_portfolio.mp4";

import tpgStockCover from "../../sources_informations/localhost_gitfich_tpgstock_(Nest Hub Max).png";
import tpgStockMobile from "../../sources_informations/localhost_gitfich_tpgstock_(iPhone 16 Pro Max).png";
import tpgStockCategories from "../../sources_informations/localhost_gitfich_tpgstock_galeriecategorie.php(Nest Hub Max).png";
import tpgStockArticle from "../../sources_informations/localhost_gitfich_tpgstock_detailsarticle.php_id=2(Nest Hub Max).png";
import tpgStockVideo from "../../sources_informations/tpgstock_portfolio.mp4";

import rgph5Cover from "../../sources_informations/localhost_td7_rgph5_index.php_route=villes(Nest Hub Max).png";
import rgph5CitiesMobile from "../../sources_informations/localhost_td7_rgph5_index.php_route=villes(Samsung Galaxy A55).png";
import rgph5Reports from "../../sources_informations/localhost_td7_rgph5_index.php_route=rapports(Nest Hub Max).png";
import rgph5ReportsMobile from "../../sources_informations/localhost_td7_rgph5_index.php_route=rapports(Samsung Galaxy A55).png";
import rgph1Video from "../../sources_informations/rgph1_portfolio.mp4";
import rgph5Video from "../../sources_informations/rgph5_portfolio.mp4";

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
    problem:
      "Les équipes ont besoin de retrouver une pièce par son nom, sa catégorie, son département et son niveau de visibilité.",
    techStack: ["PHP natif", "MySQL (PDO)", "Bootstrap"],
    security:
      "Sessions, CSRF, requêtes préparées et mots de passe hachés. Les PDF sont contrôlés (type, extension et taille ≤ 10 Mo) ; les nouveaux fichiers sont stockés par défaut hors du dossier public.",
    codeUrl: "https://github.com/lumen73/ged",
    media: {
      cover: gedCover,
      coverAlt: "Écran de connexion de l'application GED",
      screenshots: [
        { src: gedDesktopList, alt: "Liste des documents GED sur ordinateur" },
        { src: gedMobileList, alt: "Liste des documents GED sur mobile" },
      ],
      demoVideo: gedVideo,
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
      coverAlt: "Écran Sportspace des rencontres et résultats",
      screenshots: [
        { src: sportSpaceSchedule, alt: "Programmation des rencontres dans Sportspace" },
        { src: sportSpaceTeams, alt: "Vue mobile des équipes Sportspace" },
        { src: sportSpaceScores, alt: "Vue mobile des scores Sportspace" },
      ],
      demoVideo: sportSpaceVideo,
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
      coverAlt: "Vue d'ensemble du stock dans TPGStock",
      screenshots: [
        { src: tpgStockMobile, alt: "Vue mobile de la gestion de stock TPGStock" },
        { src: tpgStockCategories, alt: "Catalogue des articles par catégorie" },
        { src: tpgStockArticle, alt: "Fiche détaillée d'un article" },
      ],
      demoVideo: tpgStockVideo,
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
        v5: "Saisie multiple, jusqu'à 50 villes par lot",
      },
      { criterion: "Sorties", v1: "Totaux à l'écran", v5: "Rapports et export CSV" },
      {
        criterion: "Mise en place",
        v1: "Pas de script SQL d'installation",
        v5: "schema.sql, migrate.php, create_admin.php",
      },
    ],
    versions: [
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
          note: "Démo vidéo de la version initiale RGPH1.",
        },
      },
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
          coverAlt: "Interface RGPH5 de gestion et de recherche des villes",
          screenshots: [
            { src: rgph5CitiesMobile, alt: "Vue mobile de la gestion des villes RGPH5" },
            { src: rgph5Reports, alt: "Tableau de bord des rapports RGPH5" },
            { src: rgph5ReportsMobile, alt: "Vue mobile des indicateurs RGPH5" },
          ],
          demoVideo: rgph5Video,
          note: "Les effectifs affichés dans les captures sont des données de démonstration.",
        },
      },
    ],
  },
];

export default projectsData;
