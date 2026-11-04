import { Award, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    organization: "Port Autonome de Cotonou",
    department: "Département des Systèmes d’Information",
    role: "Développeur Full-Stack · Stage professionnel",
    period: "Mars – mai 2025",
    description:
      "Application web de gestion des cargaisons (Laravel, MySQL, JavaScript, Bootstrap), en cours de développement. Conception du back-end d'une application de gestion de projets.",
  },
  {
    organization: "GETECH (Gioveri Enterprise Technology), Cotonou",
    role: "Développeur Full-Stack · Stage académique",
    period: "01/2024 – 04/2024",
    description:
      "Développement d'une application web de prise de rendez-vous médicaux et participation à des projets de transformation digitale et de dématérialisation.",
  },
  {
    organization: "Port Autonome de Cotonou",
    role: "Développeur Full-Stack · Stage académique",
    period: "Juillet – octobre 2023",
    description:
      "Mise en pratique de la programmation orientée objet avec Laravel, de l'architecture MVC, des opérations CRUD et de l'authentification.",
  },
  {
    organization: "Port Autonome de Cotonou",
    role: "Technicien informatique · Support & infrastructure",
    description:
      "Installation et nettoyage des postes, déploiement des utilitaires de travail et montage d'ordinateurs.",
  },
];

const certificationGroups = [
  {
    title: "Formation continue",
    certificates: [
      {
        title: "Foundations of Coding Full-Stack",
        verificationUrl: "https://www.coursera.org/verify/WYLTMHVTHSRA",
      },
      {
        title: "Introduction to Programming With C#",
        verificationUrl: "https://www.coursera.org/verify/MWDMKJTSHVM9",
      },
    ],
  },
  {
    title: "Autres certifications",
    certificates: [
      { title: "Creativity, Innovation and Transformation" },
      { title: "Gestion des données avec Microsoft 365" },
      { title: "Boostez votre productivité avec Copilot" },
      { title: "AI for all" },
    ],
  },
];

export function Experience() {
  return (
    <section id="parcours" className="relative py-24 md:py-32 bg-surface/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-glow">
            Expérience & formation
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Certifications <span className="text-gradient">& Parcours</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Formation, stages et certifications regroupés pour distinguer les compétences acquises
            et leur contexte.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <section aria-labelledby="experience-title">
              <div className="mb-5 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary-glow" />
                <h3 id="experience-title" className="font-display text-xl font-semibold">
                  Expériences professionnelles
                </h3>
              </div>
              <div className="space-y-4">
                {experience.map((item) => (
                  <article
                    key={`${item.organization}-${item.role}`}
                    className="rounded-2xl border border-border/50 bg-gradient-card p-5 shadow-card"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">{item.organization}</h4>
                        {item.department && (
                          <p className="mt-1 text-sm text-muted-foreground">{item.department}</p>
                        )}
                        <p className="mt-1 text-sm text-primary-glow">{item.role}</p>
                      </div>
                      {item.period && (
                        <span className="text-xs text-muted-foreground">{item.period}</span>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="education-title"
              className="rounded-2xl border border-border/50 bg-gradient-card p-5 shadow-card"
            >
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary-glow" />
                <h3 id="education-title" className="font-display text-xl font-semibold">
                  Formation
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">
                    Licence professionnelle en Gestion et Administration des Entreprises
                  </p>
                  <p className="text-muted-foreground">
                    Option Systèmes Informatiques et Logiciels, mention Bien
                  </p>
                  <p className="text-muted-foreground">
                    École Supérieure de Management du Bénin · 2021–2024
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Baccalauréat série C</p>
                  <p className="text-muted-foreground">Complexe Scolaire Michel Dubois</p>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="profile-qualities-title"
              className="rounded-2xl border border-border/50 bg-gradient-card p-5 shadow-card"
            >
              <h3 id="profile-qualities-title" className="font-display text-lg font-semibold">
                Repères professionnels
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Français professionnel · Anglais intermédiaire
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Rigueur",
                  "Esprit d'analyse",
                  "Esprit d'équipe",
                  "Adaptabilité",
                  "Curiosité",
                  "Sens des responsabilités",
                ].map((quality) => (
                  <span
                    key={quality}
                    className="rounded-lg border border-border/40 bg-muted/60 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section aria-labelledby="certifications-title">
            <div className="mb-5 flex items-center gap-3">
              <Award className="h-5 w-5 text-primary-glow" />
              <h3 id="certifications-title" className="font-display text-xl font-semibold">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certificationGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-2xl border border-border/50 bg-gradient-card p-5 shadow-card"
                >
                  <h4 className="font-semibold">{group.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {group.certificates.map((certificate, index) => (
                      <span key={certificate.title}>
                        {index > 0 && " · "}
                        {certificate.verificationUrl ? (
                          <a
                            href={certificate.verificationUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="font-medium text-primary-glow transition-smooth hover:text-foreground"
                          >
                            {certificate.title}
                          </a>
                        ) : (
                          certificate.title
                        )}
                      </span>
                    ))}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
