import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard } from "@/components/DocsComponents";

const limitations = [
  { title: "16-bit Overflow", desc: "All arithmetic wraps at 65535. Factorial overflows after 8! in 16-bit unsigned mode." },
  { title: "6-bit Immediates", desc: "Immediate values are limited to 0–63, restricting direct loads and SUB operands." },
  { title: "No Stack or Heap", desc: "No built-in stack pointer or dynamic memory allocation — all memory management is manual." },
  { title: "No I/O Instructions", desc: "The VM has no input/output instructions. Results are observed through the trace file." },
  { title: "Fixed Instruction Width", desc: "Every instruction is exactly 16 bits — no variable-length encoding or instruction extensions." },
  { title: "No Interrupts", desc: "No interrupt mechanism or exception handling. Errors silently wrap or produce unexpected results." },
];

const Limitations = () => (
  <DocsLayout>
    <PageHeader title="Limitations" headingColor="text-emerald-500" description="Known constraints and design trade-offs of the VM." />

    <div className="grid md:grid-cols-2 gap-4">
      {limitations.map((item) => (
        <SectionCard key={item.title} title={item.title}>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </SectionCard>
      ))}
    </div>

    <SectionCard title="Why These Limits?" className="mt-6" titleColor="text-amber-400">
      <p className="text-sm text-muted-foreground">
        These constraints are deliberate design choices. The goal is to demonstrate core CPU concepts — fetch/decode/execute, registers, flags, branching — in a focused, understandable environment without the complexity of a production ISA. Each limitation is an opportunity to explore <em>why</em> real processors evolved past these boundaries and what trade-offs modern architectures make.
      </p>
    </SectionCard>
  </DocsLayout>
);

export default Limitations;
