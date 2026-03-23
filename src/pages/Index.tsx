import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard, CodeBlock, ActionButton, VideoEmbed } from "@/components/DocsComponents";
import { Play, ExternalLink, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <DocsLayout>
      <div className="mb-10 p-8 rounded-2xl border bg-gradient-to-br from-primary/5 via-card to-accent/5">
        <span className="text-xs font-mono font-semibold text-primary tracking-wider uppercase">College Project</span>
        <h1 className="text-4xl font-bold tracking-tight mt-2 mb-3">Custom 16-Bit Virtual Machine</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A fully functional 16-bit VM built from scratch in C++. Features a custom instruction set, assembler, trace-based debugger, and interactive visualizer.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <ActionButton label="Try Visualizer" icon={<ExternalLink className="w-4 h-4" />} variant="accent" href="https://kashvi1811.github.io/Mini_Project_2026/" />
          <ActionButton label="Download CLI" icon={<ExternalLink className="w-4 h-4" />} variant="secondary" href="https://github.com/Kashvi1811/Mini_Project_2026/releases/tag/v1.0.0" />
        </div>
      </div>

      <VideoEmbed
        title="Custom VM CLI Tutorial"
        description="A complete walkthrough of the CLI tool — running presets, assembling programs, and analyzing traces."
        src="/videos/Custom_VM_CLI_Tutorial.mp4"
      />

      <VideoEmbed
        title="Custom VM Visualizer Tutorial"
        description="See the browser-based trace viewer in action — step through execution and watch registers update in real time."
        src="/videos/Custom_VM_Visualizer_Tutorial.mp4"
      />

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <SectionCard title="🏗️ Architecture">
          <p className="text-sm text-muted-foreground mb-3">8 general-purpose 16-bit registers, 64K memory, and condition flags (Z, N, P).</p>
          <button onClick={() => navigate("/architecture")} className="text-sm text-primary font-medium hover:underline">Learn more →</button>
        </SectionCard>
        <SectionCard title="⚡ 9 Opcodes">
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
