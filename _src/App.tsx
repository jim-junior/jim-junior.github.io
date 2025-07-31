import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
