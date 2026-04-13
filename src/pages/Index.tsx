import DocsLayout from "@/components/DocsLayout";
import { SectionCard, CodeBlock, ActionButton } from "@/components/DocsComponents";
import { ExternalLink, Cpu, Terminal, BarChart3, BookOpen, Layers, Zap, Activity, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: Cpu, label: "16-Bit Architecture", desc: "8 registers, 64K memory, condition flags" },
  { icon: Zap, label: "9 Custom Opcodes", desc: "ADD, SUB, MUL, AND, NOT, JZ, JMP, LOAD, HALT" },
  { icon: Terminal, label: "CLI Tool", desc: "Menu-driven assembler & executor" },
  { icon: BarChart3, label: "Trace Viewer", desc: "Step-through JSONL execution traces" },
  { icon: Layers, label: "ASM → BIN Pipeline", desc: "Full assembly to binary workflow" },
  { icon: Activity, label: "Process Visualizer", desc: "Interactive OS process state lifecycle simulator" },
  { icon: BookOpen, label: "Video Tutorials", desc: "Guided walkthroughs for CLI & Visualizer" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <DocsLayout>
      {/* Hero */}
      <div className="relative mb-12 p-10 rounded-2xl border overflow-hidden bg-gradient-to-br from-[hsl(var(--primary)/0.06)] via-card to-[hsl(var(--primary-glow)/0.06)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.1),transparent_60%)]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,hsl(var(--primary-glow)/0.08),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(circle,hsl(var(--accent)/0.06),transparent_70%)]" />
        <div className="relative animate-slide-up">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 border border-primary/20">
            Open Source Project
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 gradient-text leading-tight">
            Custom 16-Bit<br />Virtual Machine
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            A fully functional VM built from scratch in C++ — featuring a custom ISA, assembler, trace debugger, and interactive visualizer.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <ActionButton label="Try Visualizer" icon={<ExternalLink className="w-4 h-4" />} variant="accent" href="https://kashvi1811.github.io/Custom-Virtual-Machine/" />
            <ActionButton label="Download CLI" icon={<ExternalLink className="w-4 h-4" />} variant="secondary" href="https://github.com/Kashvi1811/Custom-Virtual-Machine/releases/tag/v2.0.0" />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {features.map(({ icon: Icon, label, desc }, i) => (
          <div
            key={label}
            className="group flex items-start gap-3 p-4 rounded-xl border bg-card hover:border-primary/30 hover-lift"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
              <Icon className="w-[18px] h-[18px]" />
            </div>
            <div>
              <p className="text-sm font-bold">{label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Process Visualizer */}
      <div className="relative mb-10 p-8 rounded-2xl border overflow-hidden bg-gradient-to-br from-[hsl(var(--accent)/0.06)] via-card to-[hsl(var(--primary)/0.06)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.08),transparent_60%)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 border border-accent/20">
            Interactive Tool
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight mb-3 text-primary-glow bg-primary-foreground">🔄 Process State Visualizer</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            An interactive tool that teaches OS process lifecycle flow — from New → Ready → Running → Waiting → Terminated. Features manual stepping, auto-run simulation, scenario-based flows, queue/lane visualization, and a color-coded CPU timeline.
          </p>
          <ul className="text-sm text-muted-foreground space-y-2 mb-6">
            {[
              "Custom Process Editor with visual step builder",
              "Per-process CPU timeline with auto-scaled labels",
              "Activity log with smart millisecond timestamps",
              "Preset scenarios & transition validation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <ActionButton label="Try Process Visualizer" icon={<ExternalLink className="w-4 h-4" />} variant="accent" href="https://kashvi1811.github.io/process-viewer-site/" />
        </div>
      </div>

      {/* Explore Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          { title: "🏗️ Architecture", desc: "8 general-purpose 16-bit registers, 64K memory, and condition flags (Z, N, P).", link: "/architecture", cta: "Learn more →" },
          { title: "⚡ Opcodes", desc: "HALT, ADD, AND, NOT, JZ, JMP, LOAD, MUL, SUB — a minimal but complete ISA.", link: "/opcodes", cta: "See all opcodes →" },
          { title: "🔧 CLI Tool", desc: "Interactive menu-driven CLI for running presets, assembling files, and analyzing traces.", link: "/cli-usage", cta: "CLI guide →" },
          { title: "📊 Trace Viewer", desc: "Step-through execution trace in JSONL format with a browser-based visualization tool.", link: "/trace-analysis", cta: "Explore traces →" },
        ].map(({ title, desc, link, cta }) => (
          <SectionCard key={title} title={title}>
            <p className="text-sm text-muted-foreground mb-3">{desc}</p>
            <button onClick={() => navigate(link)} className="text-sm text-primary font-semibold hover:underline underline-offset-4 transition-colors">
              {cta}
            </button>
          </SectionCard>
        ))}
      </div>

      <SectionCard title="Quick Start">
        <p className="text-sm text-muted-foreground mb-3">Compile and run a factorial program in seconds:</p>
        <CodeBlock title="Terminal">{`g++ -o vm vm.cpp
./vm fact 5
# → Trace written to trace.jsonl`}</CodeBlock>
      </SectionCard>
    </DocsLayout>
  );
};

export default Index;