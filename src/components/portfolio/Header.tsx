import { useEffect, useState } from "react";
import { Github, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/contactInfo";
import cvUrl from "/CV_Boris_Merveille_DOSSA.pdf";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "Présentation" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#accueil");

  useEffect(() => {
    let scrollFrame = 0;
    let activeObserver: IntersectionObserver | null = null;

    const updateScrolled = () => {
      scrollFrame = 0;
      const nextScrolled = window.scrollY > 12;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };
    const onScroll = () => {
      if (scrollFrame === 0) scrollFrame = window.requestAnimationFrame(updateScrolled);
    };
    const observeActiveSection = () => {
      activeObserver?.disconnect();
      const line = 120;
      const bottomMargin = Math.max(0, window.innerHeight - line - 1);
      activeObserver = new IntersectionObserver(
        (entries) => {
          const section = entries
            .filter((entry) => entry.isIntersecting)
            .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)
            .at(-1);
          if (section) setActive(`#${section.target.id}`);
        },
        { rootMargin: `-${line}px 0px -${bottomMargin}px 0px` },
      );
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section) activeObserver.observe(section);
      }
    };

    updateScrolled();
    observeActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", observeActiveSection, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", observeActiveSection);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      activeObserver?.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled ? "glass border-b border-border/40" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#accueil"
          className="font-display text-lg font-bold tracking-tight text-gradient"
          aria-label="LUM3N, accueil"
        >
          LUM3N
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "location" : undefined}
              className={cn(
                "relative min-h-11 rounded-md px-3 py-2 text-sm transition-smooth",
                active === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center xl:flex">
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-3 inline-flex min-h-11 items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-smooth hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="https://github.com/lumen73"
            target="_blank"
            rel="noreferrer noopener"
            className="mr-3 inline-flex min-h-11 items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-smooth hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-3 min-h-11 rounded-md px-3 py-2 text-sm text-muted-foreground transition-smooth hover:text-foreground"
          >
            CV PDF
          </a>
          <Button asChild size="sm" variant="hero" className="min-h-11">
            <a href="#contact">Parlons projet</a>
          </Button>
        </div>

        <button
          type="button"
          className="h-11 w-11 rounded-md p-0 text-foreground xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="animate-fade-in border-t border-border/40 glass xl:hidden"
        >
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Navigation mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-md px-3 py-3 text-sm text-muted-foreground transition-smooth hover:bg-muted/50 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 py-3 text-sm text-muted-foreground transition-smooth hover:bg-muted/50 hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="min-h-11 rounded-md px-3 py-3 text-sm text-muted-foreground transition-smooth hover:bg-muted/50 hover:text-foreground"
            >
              CV PDF
            </a>
            <a
              href="https://github.com/lumen73"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 py-3 text-sm text-muted-foreground transition-smooth hover:bg-muted/50 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
