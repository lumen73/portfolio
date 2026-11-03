import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          ©{" "}
          <span className="font-display font-semibold text-gradient">
            Mawuna Boris Merveille Dossa
          </span>{" "}
          · LUM3N
        </p>
        <div className="flex items-center gap-2">
          <a
            href="mailto:borisdossa1973@gmail.com"
            aria-label="Envoyer un e-mail à Mawuna Boris Merveille Dossa"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 text-muted-foreground transition-smooth hover:bg-muted/60 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/2290153835553"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Contacter Mawuna Boris Merveille Dossa sur WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 text-muted-foreground transition-smooth hover:bg-muted/60 hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
