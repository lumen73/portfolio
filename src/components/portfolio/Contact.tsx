import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contactInfo";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[400px] -translate-y-1/2 bg-gradient-glow" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-glow">
            Échangeons
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Un projet à <span className="text-gradient">structurer ?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Décrivez votre besoin métier ou votre prochain outil web. Je vous répondrai directement
            par e-mail ou WhatsApp.
          </p>
        </div>

        <div className="rounded-2xl border border-border/50 bg-gradient-card p-6 shadow-elevated md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href={contactInfo.emailHref}
                className="flex min-h-11 min-w-0 items-center gap-3 break-words transition-smooth hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="min-w-0 break-all">{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.telephoneHref}
                className="flex min-h-11 min-w-0 items-center gap-3 break-words transition-smooth hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary-glow" />
                {contactInfo.phoneDisplay}
              </a>
              <p className="flex min-w-0 items-center gap-3 break-words">
                <MapPin className="h-4 w-4 text-primary-glow" />
                Ouidah, Bénin
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto">
              <Button asChild variant="hero" className="min-h-11 gap-2">
                <a href={`${contactInfo.emailHref}?subject=Parlons%20de%20votre%20projet`}>
                  <Mail className="h-4 w-4" />
                  M'écrire
                </a>
              </Button>
              <Button asChild variant="outline" className="min-h-11 gap-2 border-border/60">
                <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer noopener">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
