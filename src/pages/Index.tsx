import DocsLayout from "@/components/DocsLayout";
import { SectionCard, CodeBlock, ActionButton } from "@/components/DocsComponents";
import { ExternalLink, Cpu, Terminal, BarChart3, BookOpen, Layers, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: Cpu, label: "16-Bit Architecture", desc: "8 registers, 64K memory, condition flags" },
  { icon: Zap, label: "9 Custom Opcodes", desc: "ADD, SUB, MUL, AND, NOT, JZ, JMP, LOAD, HALT" },
  { icon: Terminal, label: "CLI Tool", desc: "Menu-driven assembler & executor" },
  { icon: BarChart3, label: "Trace Viewer", desc: "Step-through JSONL execution traces" },
  { icon: Layers, label: "ASM → BIN Pipeline", desc: "Full assembly to binary workflow" },
  { icon: BookOpen, label: "Video Tutorials", desc: "Guided walkthroughs for CLI & Visualizer" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <DocsLayout>
      {/* Hero */}
      <div className="relative mb-12 p-10 rounded-2xl border bg-gradient-to-br from-primary/10 via-card to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="relative">
          <span className="inline-block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            College Project
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Custom 16-Bit<br />Virtual Machine
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            A fully functional VM built from scratch in C++ — featuring a custom ISA, assembler, trace debugger, and interactive visualizer.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <ActionButton label="Try Visualizer" icon={<ExternalLink className="w-4 h-4" />} variant="accent" href="https://kashvi1811.github.io/Mini_Project_2026/" />
            <ActionButton label="Download CLI" icon={<ExternalLink className="w-4 h-4" />} variant="secondary" href="https://github.com/Kashvi1811/Mini_Project_2026/releases/tag/v1.0.0" />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {features.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="group flex items-start gap-3 p-4 rounded-xl border bg-card hover:border-primary/30 hover:shadow-md transition-all">
            <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Icon className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Explore + Quick Start */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <SectionCard title="🏗️ Architecture">
          <p className="text-sm text-muted-foreground mb-3">8 general-purpose 16-bit registers, 64K memory, and condition flags (Z, N, P).</p>
          <button onClick={() => navigate("/architecture")} className="text-sm text-primary font-medium hover:underline">Learn more →</button>
        </SectionCard>
        <SectionCard title="⚡ Opcodes">
          <p className="text-sm text-muted-foreground mb-3">HALT, ADD, AND, NOT, JZ, JMP, LOAD, MUL, SUB — a minimal but complete ISA.</p>
          <button onClick={() => navigate("/opcodes")} className="text-sm text-primary font-medium hover:underline">See all opcodes →</button>
        </SectionCard>
        <SectionCard title="🔧 CLI Tool">
          <p className="text-sm text-muted-foreground mb-3">Interactive menu-driven CLI for running presets, assembling files, and analyzing traces.</p>
          <button onClick={() => navigate("/cli-usage")} className="text-sm text-primary font-medium hover:underline">CLI guide →</button>
        </SectionCard>
        <SectionCard title="📊 Trace Viewer">
          <p className="text-sm text-muted-foreground mb-3">Step-through execution trace in JSONL format with a browser-based visualization tool.</p>
          <button onClick={() => navigate("/trace-analysis")} className="text-sm text-primary font-medium hover:underline">Explore traces →</button>
        </SectionCard>
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
