import { useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { Play, ChevronLeft, ChevronRight, Monitor, Terminal, CheckCircle2, ExternalLink, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const lessons = [
  {
    id: "cli",
    title: "CLI Tutorial",
    subtitle: "Master the command-line interface",
    video: "/videos/Custom_VM_CLI_Tutorial.mp4",
    description:
      "Learn how to compile and use the 16-bit VM CLI tool. This lesson walks you through running preset programs, assembling custom .asm files, generating execution traces, and analyzing them — all from the terminal.",
    icon: Terminal,
    points: [
      "Compile vm.cpp and vm_cli.cpp with g++",
      "Run built-in presets: Factorial & Fibonacci",
      "Assemble .asm source files into binary",
      "Execute binary programs and generate trace.jsonl",
      "Use CLI flags: --json, --quiet, --verbose, --trace",
      "View trace summaries and open the viewer",
    ],
    link: {
      label: "Download CLI",
      url: "https://github.com/Kashvi1811/Mini_Project_2026/releases/tag/v1.0.0",
    },
  },
  {
    id: "visualizer",
    title: "Visualizer Tutorial",
    subtitle: "See your VM execute in real time",
    video: "/videos/Custom_VM_Visualizer_Tutorial.mp4",
    description:
      "Explore the browser-based trace viewer that brings your VM execution to life. Step through instructions one by one, watch registers update, inspect memory, and understand exactly how your programs run on the VM.",
    icon: Monitor,
    points: [
      "Load a trace.jsonl file into the viewer",
      "Step through instructions one at a time",
      "Watch register values update in real time",
      "Inspect decoded instruction fields (OP, Rd, Rs, Imm)",
      "Visualize memory state at each execution step",
      "Use auto-play for continuous execution replay",
    ],
    link: {
      label: "Try Visualizer",
      url: "https://kashvi1811.github.io/Custom-Virtual-Machine/",
    },
  },
  {
    id: "process-visualizer",
    title: "Process Visualizer Tutorial",
    subtitle: "Explore OS process lifecycle",
    video: "/videos/Process_State_Visualizer_Tutorial.mp4",
    description:
      "Discover the interactive Process State Visualizer that teaches OS process lifecycle flow. Walk through process states — New, Ready, Running, Waiting, and Terminated — with manual stepping, auto-run simulation, and scenario-based flows.",
    icon: Activity,
    points: [
      "Understand the 5 process states and transitions",
      "Use manual stepping and auto-run simulation",
      "Explore preset scenarios and custom process editor",
      "Visualize queue/lane layouts for each state",
      "Read the color-coded per-process CPU timeline",
      "Track events in the Activity Log with smart timestamps",
    ],
    link: {
      label: "Try Process Visualizer",
      url: "https://kashvi1811.github.io/process-viewer-site/",
    },
  },
];

const Tutorials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lesson = lessons[activeIndex];
  const Icon = lesson.icon;

  return (
    <DocsLayout>
      <div className="flex gap-6 min-h-[calc(100vh-8rem)]">
        {/* Course sidebar */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 sticky top-24 self-start">
          <div className="rounded-xl border bg-card overflow-hidden">
            <div className="p-4 border-b bg-primary/5">
              <p className="text-xs font-mono font-semibold text-primary tracking-wider uppercase">Module</p>
              <h2 className="text-sm font-semibold mt-1">Custom VM Tutorials</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{lessons.length} lessons</p>
            </div>
            <nav className="p-2 space-y-1">
              {lessons.map((l, i) => {
                const LIcon = l.icon;
                const active = i === activeIndex;
                return (
                  <button
                    key={l.id}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all",
                      active
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className={cn(
                      "flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold shrink-0",
                      active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}>
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className={cn("font-medium truncate", active ? "text-primary-foreground" : "")}>{l.title}</p>
                      <p className={cn("text-xs truncate", active ? "text-primary-foreground/70" : "text-muted-foreground")}>{l.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Mobile lesson picker */}
          <div className="flex md:hidden gap-2 mb-4">
            {lessons.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "flex-1 py-2.5 rounded-lg text-sm font-medium transition-all",
                  i === activeIndex
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {l.title}
              </button>
            ))}
          </div>

          {/* Video player */}
          <div className="rounded-xl overflow-hidden border bg-card shadow-sm">
            {lesson.video ? (
              <video
                key={lesson.id}
                className="aspect-video w-full bg-muted"
                controls
                preload="metadata"
              >
                <source src={lesson.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="aspect-video w-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-12 h-12 text-muted-foreground/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Video coming soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Lesson info */}
          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Lesson {activeIndex + 1} of {lessons.length}</p>
                <h1 className="text-2xl font-bold tracking-tight">{lesson.title}</h1>
                <p className="text-muted-foreground mt-1">{lesson.description}</p>
              </div>
            </div>

            {/* Key points */}
            <div className="rounded-xl border bg-card p-5">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                What you'll learn
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {lesson.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action link */}
            <a
              href={lesson.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              {lesson.link.label}
            </a>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t">
              <button
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeIndex === 0
                    ? "text-muted-foreground/40 cursor-not-allowed"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <ChevronLeft className="w-4 h-4" /> Previous Lesson
              </button>
              <button
                onClick={() => setActiveIndex(Math.min(lessons.length - 1, activeIndex + 1))}
                disabled={activeIndex === lessons.length - 1}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeIndex === lessons.length - 1
                    ? "text-muted-foreground/40 cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                Next Lesson <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Tutorials;
