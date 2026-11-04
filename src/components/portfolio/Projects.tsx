import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RgphVersionToggle } from "@/components/portfolio/RgphVersionToggle";
import type { ProjectData, ProjectMedia, ProjectVersion } from "@/data/projectsData.js";
import { projectsData } from "@/data/projectsData.js";

type ProjectContentData = Pick<
  ProjectVersion,
  "problem" | "features" | "security" | "techStack" | "media" | "demoUrl"
>;

function ProjectMediaPreview({
  title,
  media,
  showPreview = true,
}: {
  title: string;
  media: ProjectMedia;
  showPreview?: boolean;
}) {
  return (
    <div className="space-y-3">
      {showPreview && (
        <div className="overflow-hidden rounded-xl border border-border/50 bg-surface">
          {media.cover ? (
            <img
              src={media.cover}
              alt={media.coverAlt ?? `Capture d'écran de ${title}`}
              width={media.coverWidth}
              height={media.coverHeight}
              loading="lazy"
              className="aspect-video h-full w-full object-cover"
            />
          ) : media.demoVideo ? (
            <video
              controls
              preload="none"
              poster={media.poster}
              aria-label={`Démo vidéo de ${title}`}
              className="aspect-video h-full w-full object-cover"
            >
              <source src={media.demoVideo} type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          ) : null}
        </div>
      )}

      {media.note && <p className="text-xs leading-relaxed text-muted-foreground">{media.note}</p>}

      {media.screenshots && media.screenshots.length > 0 && (
        <details className="group rounded-xl border border-border/50 bg-surface/50 px-4 py-3">
          <summary className="cursor-pointer list-none text-sm font-medium text-foreground marker:hidden">
            Voir les captures supplémentaires ({media.screenshots.length})
          </summary>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {media.screenshots.map((screenshot) => (
              <figure
                key={screenshot.src}
                className="overflow-hidden rounded-lg border border-border/50"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={screenshot.width}
                  height={screenshot.height}
                  loading="lazy"
                  className="aspect-video w-full bg-surface object-contain"
                />
                <figcaption className="p-2 text-xs text-muted-foreground">
                  {screenshot.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function ProjectDetails({
  title,
  content,
  codeUrl,
  demoUrl,
  showPreview = true,
}: {
  title: string;
  content: ProjectContentData;
  codeUrl?: string;
  demoUrl?: string;
  showPreview?: boolean;
}) {
  return (
    <div className="space-y-5">
      <ProjectMediaPreview title={title} media={content.media} showPreview={showPreview} />

      <div className="space-y-4">
        <section>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
            Le problème
          </h4>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{content.problem}</p>
        </section>
        <section>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
            Stack
          </h4>
          <div className="mt-2 flex flex-wrap gap-2" aria-label={`Technologies de ${title}`}>
            {content.techStack.map((technology) => (
              <Badge
                key={technology}
                variant="secondary"
                className="border border-border/40 bg-muted/60 font-normal text-muted-foreground"
              >
                {technology}
              </Badge>
            ))}
          </div>
        </section>
        {content.features && (
          <section>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
              Fonctionnalités
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {content.features}
            </p>
          </section>
        )}
        {content.security && (
          <section>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
              Sécurité
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {content.security}
            </p>
          </section>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-border/40 pt-4">
        {content.media.demoVideo && (
          <Button asChild size="sm" variant="hero" className="gap-2">
            <a href={content.media.demoVideo} target="_blank" rel="noreferrer noopener">
              <ExternalLink className="h-4 w-4" />
              Voir la démo vidéo
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button asChild size="sm" variant="outline" className="gap-2 border-border/60">
            <a href={demoUrl} target="_blank" rel="noreferrer noopener">
              <ExternalLink className="h-4 w-4" />
              Tester la démo
            </a>
          </Button>
        )}
        {codeUrl && (
          <Button asChild size="sm" variant="outline" className="gap-2 border-border/60">
            <a href={codeUrl} target="_blank" rel="noreferrer noopener">
              <Github className="h-4 w-4" />
              Voir le code
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  const hasVersions = Boolean(project.versions?.length);

  const versionUrls = {
    v1: project.versions?.find((version) => version.id === "rgph1")?.codeUrl,
    v5: project.versions?.find((version) => version.id === "rgph5")?.codeUrl,
  };

  return (
    <article className="group relative min-w-0 overflow-hidden rounded-2xl border border-border/50 bg-gradient-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elevated">
      <div className="absolute inset-0 pointer-events-none bg-gradient-primary opacity-0 transition-smooth group-hover:opacity-10" />

      {!hasVersions && project.media?.cover && (
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <img
            src={project.media.cover}
            alt={project.media.coverAlt ?? `Capture d'écran de ${project.title}`}
            width={project.media.coverWidth}
            height={project.media.coverHeight}
            loading="lazy"
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        </div>
      )}

      <div className="relative p-6 pb-0">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary-glow">
          {project.category}
        </p>
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      </div>

      <div className="relative p-6">
        {hasVersions && project.versions ? (
          <div className="space-y-4">
            {project.comparison && versionUrls.v1 && versionUrls.v5 && (
              <>
                <div className="overflow-x-auto rounded-xl border border-border/50">
                  <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                    <caption className="px-4 py-3 text-left font-semibold text-foreground">
                      Évolution du module RGPH
                    </caption>
                    <thead className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Critère
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <a
                            className="underline underline-offset-4 hover:text-foreground"
                            href={versionUrls.v1}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            V1 · code
                          </a>
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <a
                            className="underline underline-offset-4 hover:text-foreground"
                            href={versionUrls.v5}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            V5 · code
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.comparison.map((row) => (
                        <tr key={row.criterion} className="border-t border-border/40 align-top">
                          <th scope="row" className="px-4 py-3 font-medium text-foreground">
                            {row.criterion}
                          </th>
                          <td className="px-4 py-3 text-muted-foreground">{row.v1}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.v5}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm font-medium text-foreground">
                  La V1 était vulnérable à l’injection SQL ; la V5 est née de ce constat.
                </p>
              </>
            )}
            <RgphVersionToggle projectTitle={project.title} versions={project.versions}>
              {(version) => (
                <ProjectDetails
                  title={`${project.title} ${version.label}`}
                  content={version}
                  codeUrl={version.codeUrl}
                  demoUrl={version.demoUrl}
                />
              )}
            </RgphVersionToggle>
          </div>
        ) : project.media ? (
          <ProjectDetails
            title={project.title}
            showPreview={false}
            content={{
              problem: project.problem ?? "",
              features: project.features,
              security: project.security,
              techStack: project.techStack ?? [],
              media: project.media,
            }}
            codeUrl={project.codeUrl}
            demoUrl={project.demoUrl}
          />
        ) : null}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projets" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-glow">
            Réalisations
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Des outils pour des <span className="text-gradient">besoins réels</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Gestion documentaire, compétition sportive, stock et recensement : des applications
            conçues autour de parcours métier concrets.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
