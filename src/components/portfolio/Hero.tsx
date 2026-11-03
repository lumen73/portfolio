import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "/Gemini_Generated_Image_81rj3081rj3081rj.png";
import cvUrl from "/CV_Boris_Merveille_DOSSA.pdf";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground glass">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            LUM3N · Développeur web · Ouidah, Bénin
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Développeur web full-stack junior : <span className="text-gradient">PHP, Laravel</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Je conçois des applications web de gestion (documents, stocks, recensement,
            compétitions) en PHP, avec un soin particulier pour la sécurité et la structure du code.
          </p>

          <p className="mt-4 text-sm font-medium text-primary-glow">
            Disponible pour un stage, CDD ou CDI · Ouidah / Cotonou ou remote
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero" className="group gap-2">
              <a href="#projets">
                Découvrir mes projets
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-border/60">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Me contacter
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-border/60">
              <a href={cvUrl} target="_blank" rel="noreferrer noopener">
                <FileText className="h-4 w-4" />
                CV PDF
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid gap-x-6 gap-y-5 text-sm text-muted-foreground sm:grid-cols-3">
            <div>
              <dt className="font-medium text-foreground">Formation</dt>
              <dd className="mt-1">
                Licence professionnelle en Gestion et Administration des Entreprises, option
                Systèmes Informatiques et Logiciels, mention Bien
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Expériences</dt>
              <dd className="mt-1">Port Autonome · GETECH</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Spécialité</dt>
              <dd className="mt-1">PHP · Laravel · JavaScript</dd>
            </div>
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-glow-pulse" />
          <div className="relative animate-float">
            <img
              src={heroImg}
              alt="Portrait de marque LUM3N, développeur web"
              width={1024}
              height={1536}
              className="mx-auto w-full max-w-lg rounded-3xl shadow-elevated"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
