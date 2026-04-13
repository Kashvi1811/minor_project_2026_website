import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard } from "@/components/DocsComponents";

const opcodes = [
  { code: 0, name: "HALT", syntax: "HALT", description: "Stops execution." },
  { code: 1, name: "ADD", syntax: "ADD Rd, Rs", description: "Rd = Rd + Rs. Updates flags." },
  { code: 2, name: "AND", syntax: "AND Rd, Rs", description: "Rd = Rd & Rs. Updates flags." },
  { code: 3, name: "NOT", syntax: "NOT Rd, Rs", description: "Rd = ~Rs. Updates flags." },
  { code: 4, name: "JZ", syntax: "JZ Rd, Imm6", description: "If Rd == 0, skip Imm6 instructions (PC += Imm6)." },
  { code: 5, name: "JMP", syntax: "JMP Rd", description: "Jump to address in Rd (PC = Rd)." },
  { code: 6, name: "LOAD", syntax: "LOAD Rd, Imm6", description: "Load immediate value into Rd. Updates flags." },
  { code: 7, name: "MUL", syntax: "MUL Rd, Rs", description: "Rd = Rd * Rs. Updates flags." },
  { code: 8, name: "SUB", syntax: "SUB Rd, Imm6", description: "Rd = Rd - Imm6. Updates flags." },
];

const Opcodes = () => (
  <DocsLayout>
    <PageHeader title="Opcodes" headingColor="text-chart-1" description="The complete instruction set — 9 operations that power the VM." />

    <SectionCard title="Instruction Set Table">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2 pr-4 font-semibold text-muted-foreground">Code</th>
              <th className="py-2 pr-4 font-semibold text-muted-foreground">Name</th>
              <th className="py-2 pr-4 font-semibold text-muted-foreground">Syntax</th>
              <th className="py-2 font-semibold text-muted-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            {opcodes.map((op) => (
              <tr key={op.code} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-2.5 pr-4 font-mono text-primary font-semibold">{op.code}</td>
                <td className="py-2.5 pr-4 font-mono font-medium">{op.name}</td>
                <td className="py-2.5 pr-4 font-mono text-muted-foreground">{op.syntax}</td>
                <td className="py-2.5 text-muted-foreground">{op.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <SectionCard title="Arithmetic">
        <p className="text-sm text-muted-foreground">ADD, MUL, and SUB form the arithmetic core. ADD and MUL operate register-to-register; SUB uses an immediate value for loop counters.</p>
      </SectionCard>
      <SectionCard title="Control Flow">
        <p className="text-sm text-muted-foreground">JZ (conditional jump) and JMP (absolute jump) enable loops and branches. JZ checks if a register is zero; JMP sets PC directly.</p>
      </SectionCard>
    </div>
  </DocsLayout>
);

export default Opcodes;
