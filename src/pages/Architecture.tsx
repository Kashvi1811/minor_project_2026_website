import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard, CodeBlock } from "@/components/DocsComponents";

const Architecture = () => (
  <DocsLayout>
    <PageHeader title="VM Architecture" headingColor="text-indigo-500" description="Understanding the core components of the 16-bit virtual machine." />

    <SectionCard title="Registers" titleColor="text-cyan-400">
      <p className="text-sm text-muted-foreground mb-3">The VM has <strong>8 general-purpose 16-bit registers</strong> (R0–R7). Each can hold unsigned values 0–65535.</p>
      <CodeBlock title="Register Layout">{`R0  R1  R2  R3  R4  R5  R6  R7
[16] [16] [16] [16] [16] [16] [16] [16]  bits each`}</CodeBlock>
    </SectionCard>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <SectionCard title="Program Counter (PC)" titleColor="text-amber-400">
        <p className="text-sm text-muted-foreground">A 16-bit register pointing to the next instruction in memory. Incremented after each fetch, modified by jump instructions.</p>
      </SectionCard>
      <SectionCard title="Condition Flags" titleColor="text-pink-400">
        <p className="text-sm text-muted-foreground mb-2">Three mutually exclusive flags updated after arithmetic operations:</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li><code className="font-mono text-primary">Z</code> — Zero (result == 0)</li>
          <li><code className="font-mono text-primary">N</code> — Negative (bit 15 set)</li>
          <li><code className="font-mono text-primary">P</code> — Positive (non-zero, bit 15 clear)</li>
        </ul>
      </SectionCard>
    </div>

    <SectionCard title="Memory" className="mt-4" titleColor="text-emerald-400">
      <p className="text-sm text-muted-foreground mb-3">
        A flat array of <strong>65,536 (2¹⁶) 16-bit words</strong>. Instructions and data share the same memory space (Von Neumann architecture).
      </p>
      <CodeBlock>{`vector<uint16_t> memory(1 << 16, 0);  // 64K words`}</CodeBlock>
    </SectionCard>

    <SectionCard title="Execution Cycle" className="mt-4" titleColor="text-violet-400">
      <p className="text-sm text-muted-foreground mb-3">The VM follows a classic fetch-decode-execute loop:</p>
      <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
        <li><strong className="text-foreground">Fetch</strong> — Read instruction at memory[PC], increment PC</li>
        <li><strong className="text-foreground">Decode</strong> — Extract opcode (bits 15–12), register fields, and immediate</li>
        <li><strong className="text-foreground">Execute</strong> — Perform the operation, update flags if needed</li>
        <li><strong className="text-foreground">Log</strong> — Record step to trace file</li>
        <li><strong className="text-foreground">Repeat</strong> until HALT (opcode 0)</li>
      </ol>
    </SectionCard>
  </DocsLayout>
);

export default Architecture;
