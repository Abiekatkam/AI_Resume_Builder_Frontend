import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { HomePage } from "@/pages/home";
import { SignInPage } from "@/pages/sign-in";
import { SignUpPage } from "@/pages/sign-up";
import { ResumePreviewPage } from "@/pages/resume-preview";
import { GenerateResumeContainer } from '@/pages/generateResumePage'; // Import the container

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="h-full w-full bg-background selection:bg-indigo-500/50 selection:text-indigo-50 flex flex-col dark:bg-black bg-white"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/generate" element={<GenerateResumeContainer />} /> 
            <Route path="/preview" element={<ResumePreviewPage />} />
          </Routes>
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;