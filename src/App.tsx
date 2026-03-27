import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Architecture from "./pages/Architecture.tsx";
import InstructionFormat from "./pages/InstructionFormat.tsx";
import Opcodes from "./pages/Opcodes.tsx";
import CliUsage from "./pages/CliUsage.tsx";
import AsmBinWorkflow from "./pages/AsmBinWorkflow.tsx";
import TraceAnalysis from "./pages/TraceAnalysis.tsx";

import Samples from "./pages/Samples.tsx";
import Limitations from "./pages/Limitations.tsx";
import Tutorials from "./pages/Tutorials.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/instruction-format" element={<InstructionFormat />} />
          <Route path="/opcodes" element={<Opcodes />} />
          <Route path="/cli-usage" element={<CliUsage />} />
          <Route path="/asm-bin-workflow" element={<AsmBinWorkflow />} />
          <Route path="/trace-analysis" element={<TraceAnalysis />} />
          
          <Route path="/samples" element={<Samples />} />
          <Route path="/limitations" element={<Limitations />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
