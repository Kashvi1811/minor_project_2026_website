import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard, CodeBlock } from "@/components/DocsComponents";

const AsmBinWorkflow = () => (
  <DocsLayout>
    <PageHeader step={5} title="ASM → BIN Workflow" description="From human-readable assembly to binary machine code." />

    <SectionCard title="Workflow Pipeline">
      <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
        <span className="bg-primary/10 text-primary font-mono px-3 py-1.5 rounded-lg">.asm file</span>
        <span className="text-muted-foreground">→</span>
        <span className="bg-accent/10 text-accent font-mono px-3 py-1.5 rounded-lg">Assembler</span>
        <span className="text-muted-foreground">→</span>
        <span className="bg-primary/10 text-primary font-mono px-3 py-1.5 rounded-lg">.bin file</span>
        <span className="text-muted-foreground">→</span>
        <span className="bg-accent/10 text-accent font-mono px-3 py-1.5 rounded-lg">VM Engine</span>
        <span className="text-muted-foreground">→</span>
        <span className="bg-primary/10 text-primary font-mono px-3 py-1.5 rounded-lg">trace.jsonl</span>
      </div>
    </SectionCard>

    <SectionCard title="Assembly Syntax" className="mt-4">
      <p className="text-sm text-muted-foreground mb-3">Write programs using mnemonic instructions:</p>
      <CodeBlock title="example.asm">{`LOAD R0, 1
LOAD R1, 5
LOAD R2, 3
MUL R0, R1
SUB R1, 1
JZ R1, 1
JMP R2
HALT`}</CodeBlock>
    </SectionCard>

    <SectionCard title="Assembling & Running" className="mt-4">
      <CodeBlock title="Terminal">{`# Using the CLI:
# Option 3 → Enter path to .asm file
# The CLI assembles, runs, and generates trace

# Direct binary dump:
# Use option to inspect the .bin file in hex`}</CodeBlock>
    </SectionCard>
  </DocsLayout>
);

export default AsmBinWorkflow;
