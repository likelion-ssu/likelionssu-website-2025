import { ThemeProvider } from "styled-components";
import theme from "./common/styles/theme";
import GlobalStyles from "./common/styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
