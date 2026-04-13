import DocsLayout from "@/components/DocsLayout";
import { PageHeader, SectionCard, VideoEmbed, ActionButton } from "@/components/DocsComponents";
import { Play, ExternalLink } from "lucide-react";

const Demo = () => (
  <DocsLayout>
    <PageHeader step={7} title="Visualization / Demo" description="See the VM in action with the browser-based trace viewer." />

    <SectionCard title="Kali VM Viewer">
      <p className="text-sm text-muted-foreground mb-4">
        The project includes a browser-based visualization tool that renders execution traces as interactive step-through animations. Watch registers change in real time as each instruction executes.
      </p>
      <div className="flex flex-wrap gap-3">
        <ActionButton label="Try Visualizer" icon={<Play className="w-4 h-4" />} href="https://kashvi1811.github.io/Mini_Project_2026/" />
        <ActionButton label="Download CLI Version" icon={<ExternalLink className="w-4 h-4" />} variant="accent" href="https://github.com/Kashvi1811/Custom-Virtual-Machine/releases/tag/v2.0.0" />
      </div>
    </SectionCard>

    <VideoEmbed title="VM Visualizer Tutorial" description="Step through a factorial program and watch the registers update in real time." src="/videos/Custom_VM_Visualizer_Tutorial.mp4" />
    <VideoEmbed title="VM CLI Tutorial" description="A walkthrough of the CLI tool — running presets, assembling programs, and analyzing traces." src="/videos/Custom_VM_CLI_Tutorial.mp4" />

    <div className="grid md:grid-cols-2 gap-4">
      <SectionCard title="Features">
        <ul className="text-sm text-muted-foreground space-y-1.5">
          <li>• Step-by-step execution replay</li>
          <li>• Register value highlighting</li>
          <li>• Instruction decoding display</li>
          <li>• Memory state visualization</li>
        </ul>
      </SectionCard>
      <SectionCard title="How to Use">
        <ol className="text-sm text-muted-foreground space-y-1.5 list-decimal list-inside">
          <li>Generate a trace file using the VM</li>
          <li>Open the viewer (CLI option 5)</li>
          <li>Load the trace.jsonl file</li>
          <li>Step through or auto-play</li>
        </ol>
      </SectionCard>
    </div>
  </DocsLayout>
);

export default Demo;
