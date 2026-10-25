"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, MapPin, FileDown, Phone, MessageCircle } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { socials } from "@/lib/data";

type FormData = { name: string; email: string; message: string };

const contactLinks = [
  { icon: Mail, label: "Email", value: socials.emailDisplay, href: socials.email },
  { icon: Phone, label: "Phone", value: socials.phoneDisplay, href: `tel:${socials.phone}` },
  { icon: MessageCircle, label: "WhatsApp", value: socials.phoneDisplay, href: socials.whatsapp },
  { icon: Github, label: "GitHub", value: socials.githubDisplay, href: socials.github },
  { icon: Linkedin, label: "LinkedIn", value: socials.linkedinDisplay, href: socials.linkedin },
  // { icon: MapPin, label: "Location", value: socials.location, href: undefined },
  { icon: FileDown, label: "Resume", value: "Download PDF", href: "/resume.pdf" },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    try {
      // Replace with your own EmailJS service/template/public keys.
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { from_name: data.name, from_email: data.email, message: data.message },
        "YOUR_PUBLIC_KEY"
      );
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-border py-28">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="Contact"
              title="Let's work together"
              description="Open to Junior Backend, Full Stack, and MERN Stack roles."
              className="mb-10"
            />
          </motion.div>
          <motion.ul variants={staggerContainer(0.06)} className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <motion.li key={link.label} variants={fadeUp}>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-surface-raised transition-colors group-hover:border-emerald-dim">
                      <link.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] text-subtle">{link.label}</span>
                      {link.value}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-surface-raised">
                      <link.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] text-subtle">{link.label}</span>
                      {link.value}
                    </span>
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-8 shadow-panel"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
              Name
            </label>
            <Input
              id="name"
              aria-invalid={!!errors.name}
              {...register("name", { required: "Please enter your name" })}
              placeholder="Your name"
            />
            {errors.name && (
              <p role="alert" className="mt-1 text-xs text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
              Email
            </label>
            <Input
              id="email"
              type="email"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "Please enter your email",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
              })}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p role="alert" className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
              Message
            </label>
            <Textarea
              id="message"
              rows={5}
              aria-invalid={!!errors.message}
              {...register("message", { required: "Please add a message" })}
              placeholder="What are you looking to build?"
            />
            {errors.message && (
              <p role="alert" className="mt-1 text-xs text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>

          {status === "sent" && (
            <p role="status" className="text-sm text-emerald">
              Thanks, your message was sent. I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-red-400">
              Something went wrong. Email me directly instead.
            </p>
          )}
        </motion.form>
      </Container>
    </section>
  );
}
