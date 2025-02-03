import { ThemeProvider } from "styled-components";
import theme from "./common/styles/theme";
import GlobalStyles from "./common/styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import ErrorBoundary from "./common/components/ErrorBoundary";
import { Suspense } from "react";
import Loading from "./common/components/Loading";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
