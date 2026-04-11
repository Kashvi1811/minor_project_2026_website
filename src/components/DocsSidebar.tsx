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
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-mono text-xs font-bold">16</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-sidebar-foreground">VM Project</p>
              </div>
            </div>
          )}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Guide</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-sidebar-accent/50"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
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
