import { ThemeProvider } from "styled-components";
import theme from "./common/styles/theme";
import GlobalStyles from "./common/styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { Suspense } from "react";
import Loading from "./common/components/Loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./common/components/ErrorBoundary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
