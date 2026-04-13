import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard, CodeBlock } from "@/components/DocsComponents";

const TraceAnalysis = () => (
  <DocsLayout>
    <PageHeader title="Trace Analysis" headingColor="text-chart-4" description="Understanding execution traces for debugging and visualization." />

    <SectionCard title="Trace Format">
      <p className="text-sm text-muted-foreground mb-3">Each execution step is logged as a JSON line in <code className="font-mono text-primary">trace.jsonl</code>:</p>
      <CodeBlock title="trace.jsonl">{`{"step":0,"pc":0,"ins":24577,"regs":[0,0,0,0,0,0,0,0]}
{"step":1,"pc":1,"ins":25093,"regs":[1,0,0,0,0,0,0,0]}
{"step":2,"pc":2,"ins":25603,"regs":[1,5,0,0,0,0,0,0]}
{"step":3,"pc":3,"ins":28736,"regs":[1,5,3,0,0,0,0,0]}`}</CodeBlock>
    </SectionCard>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <SectionCard title="Fields">
        <ul className="text-sm text-muted-foreground space-y-1.5">
          <li><code className="font-mono text-primary">step</code> — Execution step number</li>
          <li><code className="font-mono text-primary">pc</code> — Program counter before execution</li>
          <li><code className="font-mono text-primary">ins</code> — Raw 16-bit instruction word</li>
          <li><code className="font-mono text-primary">regs</code> — Snapshot of all 8 registers</li>
        </ul>
      </SectionCard>
      <SectionCard title="Trace Summary">
        <p className="text-sm text-muted-foreground mb-2">The CLI can generate summaries showing:</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Total steps executed</li>
          <li>• Final register state</li>
          <li>• Instruction frequency breakdown</li>
          <li>• Loop detection patterns</li>
        </ul>
      </SectionCard>
    </div>
  </DocsLayout>
);

export default TraceAnalysis;
