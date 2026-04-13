import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard, CodeBlock } from "@/components/DocsComponents";

const InstructionFormat = () => (
  <DocsLayout>
    <PageHeader title="Instruction Format" headingColor="text-accent" description="How each 16-bit instruction word is structured." />

    <SectionCard title="Bit Layout">
      <p className="text-sm text-muted-foreground mb-3">Each instruction is a single 16-bit word divided into fixed fields:</p>
      <CodeBlock title="16-bit Instruction Word">{`┌──────┬──────┬──────┬────────────┐
│ 15-12│ 11-9 │  8-6 │    5-0     │
│ OP   │  Rd  │  Rs  │  Imm6      │
└──────┴──────┴──────┴────────────┘
  4 bit  3 bit  3 bit   6 bit`}</CodeBlock>
    </SectionCard>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <SectionCard title="Field Descriptions">
        <ul className="text-sm text-muted-foreground space-y-2">
          <li><code className="font-mono text-primary">OP (4 bits)</code> — Opcode identifying the operation (0–15)</li>
          <li><code className="font-mono text-primary">Rd (3 bits)</code> — Destination register (R0–R7)</li>
          <li><code className="font-mono text-primary">Rs (3 bits)</code> — Source register (R0–R7)</li>
          <li><code className="font-mono text-primary">Imm6 (6 bits)</code> — Immediate value (0–63)</li>
        </ul>
      </SectionCard>
      <SectionCard title="Encoding Example">
        <p className="text-sm text-muted-foreground mb-2">Encoding <code className="font-mono text-primary">LOAD R1, 5</code>:</p>
        <CodeBlock>{`Opcode = 6 (0110)
Rd     = 1 (001)
Imm6   = 5 (000101)

Binary: 0110 001 000 000101
Hex:    0x6205
C++:    (6<<12)|(1<<9)|5`}</CodeBlock>
      </SectionCard>
    </div>
  </DocsLayout>
);

export default InstructionFormat;
