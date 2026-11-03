import { Briefcase, Code2, Lightbulb } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Démontré dans les dépôts",
    skills: [
      "PHP 8 natif",
      "PDO / MySQL",
      "MVC maison",
      "Bases de sécurité web",
      "JavaScript natif / AJAX",
      "Bootstrap",
      "Apache / WAMP",
      "Git / GitHub",
    ],
  },
  {
    icon: Briefcase,
    title: "Stages (code non public)",
    skills: ["Laravel"],
  },
  {
    icon: Lightbulb,
    title: "Notions",
    skills: ["C#", "Java"],
  },
];

export function Skills() {
  return (
    <section id="competences" className="relative py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-glow">
            Compétences
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Des bases <span className="text-gradient">concrètes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Compétences présentées selon leur contexte d’utilisation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-border/50 bg-gradient-card p-6 shadow-card"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/15">
                  <group.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="font-display font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border/40 bg-muted/60 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
