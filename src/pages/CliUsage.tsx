import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard, CodeBlock } from "@/components/DocsComponents";

const CliUsage = () => (
  <DocsLayout>
    <PageHeader title="CLI Usage" headingColor="text-rose-500" description="The interactive command-line interface for running and debugging programs." />

    <SectionCard title="Basic VM (vm.cpp)" titleColor="text-sky-400">
      <p className="text-sm text-muted-foreground mb-3">The simple VM supports two preset programs via command-line arguments:</p>
      <CodeBlock title="Compile & Run">{`g++ -o vm vm.cpp
./vm fact 5    # Run factorial of 5
./vm fib 10    # Run Fibonacci for 10 steps`}</CodeBlock>
    </SectionCard>

    <SectionCard title="Advanced CLI (vm_cli_2.cpp)" className="mt-4" titleColor="text-violet-400">
      <p className="text-sm text-muted-foreground mb-3">The full CLI provides an interactive menu with extended features:</p>
      <CodeBlock title="Menu Options">{`Custom VM CLI v2.0

=== VM CLI Menu ===
1) Factorial
2) Fibonacci
3) Run ASM file (loader)
4) Trace summary
5) Viewer path
6) Process State Visualizer
0) Exit
Select option:`}</CodeBlock>
    </SectionCard>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <SectionCard title="CLI Flags" titleColor="text-amber-400">
        <ul className="text-sm text-muted-foreground space-y-1.5">
          <li><code className="font-mono text-primary">--json</code> — JSON output mode</li>
          <li><code className="font-mono text-primary">--quiet</code> — Suppress step logs</li>
          <li><code className="font-mono text-primary">--verbose</code> — Detailed output</li>
          <li><code className="font-mono text-primary">--trace &lt;path&gt;</code> — Custom trace file</li>
          <li><code className="font-mono text-primary">--max-steps &lt;n&gt;</code> — Execution limit</li>
        </ul>
      </SectionCard>
      <SectionCard title="Input Limits" titleColor="text-teal-400">
        <ul className="text-sm text-muted-foreground space-y-1.5">
          <li>Factorial: max input <strong>17</strong> (16-bit overflow)</li>
          <li>Fibonacci: max input <strong>63</strong> (6-bit immediate)</li>
          <li>Max steps: configurable, default <strong>100,000</strong></li>
        </ul>
      </SectionCard>
    </div>
  </DocsLayout>
);

export default CliUsage;
