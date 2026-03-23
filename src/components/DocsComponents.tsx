import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({ title, children, className = "" }: SectionCardProps) => (
  <div className={`bg-card rounded-xl border p-6 shadow-sm ${className}`}>
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    {children}
  </div>
);

interface CodeBlockProps {
  children: string;
  title?: string;
}

export const CodeBlock = ({ children, title }: CodeBlockProps) => (
  <div className="my-4">
    {title && (
      <div className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1.5 rounded-t-lg border border-b-0">
        {title}
      </div>
    )}
    <pre className={`code-block ${title ? "rounded-t-none" : ""}`}>
      <code>{children}</code>
    </pre>
  </div>
);

interface PageHeaderProps {
  title: string;
  description: string;
  step?: number;
}

export const PageHeader = ({ title, description, step }: PageHeaderProps) => (
  <div className="mb-8">
    {step !== undefined && (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
        Step {step}
      </span>
    )}
    <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
    <p className="text-muted-foreground text-lg">{description}</p>
  </div>
);

interface ActionButtonProps {
  label: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  onClick?: () => void;
  href?: string;
}

export const ActionButton = ({ label, icon, variant = "primary", href }: ActionButtonProps) => {
  const base = "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all";
  const styles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    accent: "bg-accent text-accent-foreground hover:opacity-90",
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]}`}>
        {icon}{label}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles[variant]}`}>
      {icon}{label}
    </button>
  );
};

interface VideoEmbedProps {
  title: string;
  description?: string;
  src?: string;
  placeholder?: boolean;
}

export const VideoEmbed = ({ title, description, src, placeholder = false }: VideoEmbedProps) => (
  <div className="my-6 bg-card border rounded-xl overflow-hidden">
    {src ? (
      <video className="aspect-video w-full bg-muted" controls preload="metadata">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : placeholder || !src ? (
      <div className="aspect-video bg-muted flex items-center justify-center">
        <div className="text-center">
          <Play className="w-12 h-12 text-muted-foreground/40 mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Video: {title}</p>
        </div>
      </div>
    ) : null}
    {(title || description) && (
      <div className="p-4 border-t">
        <p className="text-sm font-medium mb-0.5">{title}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    )}
  </div>
);

import { Play } from "lucide-react";
