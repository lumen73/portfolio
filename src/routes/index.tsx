import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

const SITE_URL = "https://merveille-dossa.vercel.app";
const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mawuna Boris Merveille Dossa — Développeur web full-stack junior : PHP, Laravel" },
      {
        name: "description",
        content:
          "Portfolio de Mawuna Boris Merveille Dossa, développeur web full-stack junior à Ouidah et Cotonou. Applications de gestion en PHP et Laravel.",
      },
      {
        property: "og:title",
        content: "Mawuna Boris Merveille Dossa — Développeur web full-stack junior : PHP, Laravel",
      },
      {
        property: "og:description",
        content:
          "GED, gestion sportive, suivi de stock et recensement : des applications métier conçues par Mawuna Boris Merveille Dossa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:alt", content: "Illustration d’un développeur web au travail" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "1024" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "LUM3N — Mawuna Boris Merveille Dossa" },
      {
        name: "twitter:title",
        content: "Mawuna Boris Merveille Dossa — Développeur web full-stack junior : PHP, Laravel",
      },
      {
        name: "twitter:description",
        content:
          "GED, gestion sportive, suivi de stock et recensement : des applications métier conçues par Mawuna Boris Merveille Dossa.",
      },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:not-sr-only focus:rounded-md focus:bg-background focus:px-4 focus:py-3 focus:text-foreground focus:shadow-elevated"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-right" />
    </div>
  );
}
