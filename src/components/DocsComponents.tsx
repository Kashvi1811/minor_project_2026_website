import { ReactNode } from "react";
import { Play } from "lucide-react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  titleColor?: string;
}

export const SectionCard = ({ title, children, className = "", titleColor }: SectionCardProps) => (
  <div className={`bg-card rounded-xl border p-6 shadow-sm hover-lift ${className}`}>
    <h3 className={`text-lg font-bold mb-3 ${titleColor || ""}`}>{title}</h3>
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
      <div className="text-xs font-mono text-muted-foreground bg-[hsl(var(--code-bg))] text-[hsl(var(--code-foreground)/0.5)] px-4 py-2 rounded-t-xl border border-b-0 border-[hsl(var(--code-bg))]">
        {title}
      </div>
    )}
    <pre className={`code-block ${title ? "rounded-t-none border border-t-0 border-[hsl(var(--code-bg))]" : ""}`}>
      <code>{children}</code>
    </pre>
  </div>
);

interface PageHeaderProps {
  title: string;
  description: string;
  headingColor?: string;
}

export const PageHeader = ({ title, description, headingColor }: PageHeaderProps) => (
  <div className="mb-8 animate-slide-up">
    <h1 className={`text-3xl font-extrabold tracking-tight mb-2 ${headingColor || "text-foreground"}`}>{title}</h1>
    <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
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
  const base = "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]";
  const styles = {
    primary: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    accent: "bg-gradient-to-r from-accent to-[hsl(162_68%_36%)] text-accent-foreground hover:opacity-90",
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
  <div className="my-6 bg-card border rounded-xl overflow-hidden shadow-sm hover-lift">
    {src ? (
      <video className="aspect-video w-full bg-muted" controls preload="metadata">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : placeholder || !src ? (
      <div className="aspect-video bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Play className="w-7 h-7 text-primary/50" />
          </div>
          <p className="text-sm text-muted-foreground font-medium">Video: {title}</p>
        </div>
      </div>
    ) : null}
    {(title || description) && (
      <div className="p-4 border-t">
        <p className="text-sm font-semibold mb-0.5">{title}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    )}
  </div>
);