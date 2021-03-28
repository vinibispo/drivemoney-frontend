import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
