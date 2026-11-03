import { Briefcase, Code2, GraduationCap } from "lucide-react";

const badges = [
  { icon: GraduationCap, label: "Licence professionnelle · mention Bien" },
  { icon: Briefcase, label: "Stages au PAC et chez GETECH" },
  { icon: Code2, label: "PHP · Laravel · JavaScript" },
];

export function About() {
  return (
    <section id="apropos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-glow">
            Présentation
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Mawuna Boris <span className="text-gradient">Merveille Dossa</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-5">
          <div className="md:col-span-5">
            <p className="font-display text-xl leading-relaxed md:text-2xl">
              Développeur web <span className="font-bold">full-stack junior</span>, titulaire d’une
              licence professionnelle en Gestion et Administration des Entreprises, option Systèmes
              Informatiques et Logiciels, mention Bien.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Mes stages au Port Autonome de Cotonou et chez GETECH m'ont amené à travailler sur des
              applications de gestion de cargaisons, de projets et de rendez-vous médicaux.
              J'applique cette expérience à des outils concrets : documents à retrouver, rencontres
              à organiser, stocks à suivre et données de recensement à structurer.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Projets en cours : application de gestion des cargaisons et application de prise de
              rendez-vous médicaux.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-xl px-4 py-2 glass transition-smooth hover:border-primary/40"
                >
                  <badge.icon className="h-4 w-4 text-primary-glow" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
