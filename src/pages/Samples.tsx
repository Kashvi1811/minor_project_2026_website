import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard, CodeBlock } from "@/components/DocsComponents";

const programs = [
  {
    name: "Factorial",
    description: "Computes n! using a multiply-and-decrement loop.",
    code: `LOAD R0, 1      ; Accumulator = 1
LOAD R1, 5      ; Counter = 5
LOAD R2, 3      ; Loop address
MUL  R0, R1     ; R0 = R0 * R1
SUB  R1, 1      ; Decrement counter
JZ   R1, 1      ; Exit if counter == 0
JMP  R2         ; Back to MUL
HALT`,
    result: "R0 = 120 (5! = 120)",
  },
  {
    name: "Fibonacci",
    description: "Generates Fibonacci numbers by shifting register pairs.",
    code: `LOAD R0, 0      ; F(n-2) = 0
LOAD R1, 1      ; F(n-1) = 1
LOAD R4, 10     ; Steps
LOAD R5, 4      ; Loop address
LOAD R2, 0      ; Clear R2
ADD  R2, R0     ; R2 += R0
ADD  R2, R1     ; R2 += R1 → next Fib
LOAD R0, 0      ; Clear R0
ADD  R0, R1     ; R0 = R1
LOAD R1, 0      ; Clear R1
ADD  R1, R2     ; R1 = R2
SUB  R4, 1      ; Decrement
JZ   R4, 1      ; Exit if done
JMP  R5         ; Loop
HALT`,
    result: "R1 = F(10) = 55",
  },
  {
    name: "Simple Addition",
    description: "Adds two numbers using registers.",
    code: `LOAD R0, 7      ; First number
LOAD R1, 13     ; Second number
ADD  R0, R1     ; R0 = R0 + R1
HALT`,
    result: "R0 = 20",
  },
];

const Samples = () => (
  <DocsLayout>
    <PageHeader title="Sample Programs" headingColor="text-primary" description="Learn by example — three programs demonstrating the VM's capabilities." />

    {programs.map((prog) => (
      <SectionCard key={prog.name} title={prog.name} className="mb-4">
        <p className="text-sm text-muted-foreground mb-3">{prog.description}</p>
        <CodeBlock title={`${prog.name.toLowerCase()}.asm`}>{prog.code}</CodeBlock>
        <div className="mt-3 inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-lg text-sm font-mono">
          Result: {prog.result}
        </div>
      </SectionCard>
    ))}
  </DocsLayout>
);

export default Samples;
