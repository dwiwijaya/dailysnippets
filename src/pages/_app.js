import "@/styles/globals.css";
import "@/styles/css/fa.min.css";
import Container from "@/components/layouts/Container";
import Nav from "@/components/layouts/Nav";
import { ThemeProvider } from "next-themes";
import { RefetchProvider } from "@/contexts/RefetchContext";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider attribute='class'  >
      <QueryClientProvider client={queryClient}>
          <RefetchProvider>
            <Container>
              <Nav />
              <main className="flex h-full items-center p-16">
                <div className="flex-1">
                  <Component {...pageProps} />
                  </div>
              </main>
            </Container>
          </RefetchProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
