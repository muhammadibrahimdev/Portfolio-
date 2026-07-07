import { Github, Linkedin, Mail, Phone, MessageCircle, FileDown } from "lucide-react";
import { socials } from "@/lib/data";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { icon: Github, label: "GitHub", href: socials.github },
  { icon: Linkedin, label: "LinkedIn", href: socials.linkedin },
  { icon: Mail, label: "Email", href: socials.email },
  { icon: Phone, label: "Contact", href: `tel:${socials.phone}` },
  { icon: MessageCircle, label: "WhatsApp", href: socials.whatsapp },
  { icon: FileDown, label: "Resume", href: "/resume.pdf" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-subtle">
          © {new Date().getFullYear()} Muhammad Ibrahim
        </p>
        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="text-muted transition-colors hover:text-emerald"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
