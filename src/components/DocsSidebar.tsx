import {
  BookOpen, Cpu, FileCode, Terminal, ArrowRightLeft,
  BarChart3, Code2, AlertTriangle, Layers, GraduationCap
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const sections = [
  { title: "Overview", url: "/", icon: BookOpen },
  { title: "VM Architecture", url: "/architecture", icon: Cpu },
  { title: "Instruction Format", url: "/instruction-format", icon: Layers },
  { title: "Opcodes", url: "/opcodes", icon: FileCode },
  { title: "CLI Usage", url: "/cli-usage", icon: Terminal },
  { title: "ASM → BIN Workflow", url: "/asm-bin-workflow", icon: ArrowRightLeft },
  { title: "Trace Analysis", url: "/trace-analysis", icon: BarChart3 },
  { title: "Sample Programs", url: "/samples", icon: Code2 },
  { title: "Limitations", url: "/limitations", icon: AlertTriangle },
  { title: "Video Tutorials", url: "/tutorials", icon: GraduationCap },
];

export function DocsSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sidebar-primary to-[hsl(260_70%_58%)] flex items-center justify-center shadow-md">
                <span className="text-sidebar-primary-foreground font-mono text-xs font-bold">16</span>
              </div>
              <div>
                <p className="text-sm font-bold text-sidebar-accent-foreground tracking-tight">VM Project</p>
                <p className="text-[10px] text-sidebar-foreground/50 font-medium uppercase tracking-widest">Guide</p>
              </div>
            </div>
          )}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-sidebar-foreground/40 font-semibold">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-sidebar-accent/60 rounded-lg transition-all duration-200"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold shadow-sm"
                    >
                      <item.icon className="mr-2.5 h-4 w-4 shrink-0" />
                      {!collapsed && <span className="text-[13px]">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}