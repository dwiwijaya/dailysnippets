import "@/styles/globals.css";
import "@/styles/css/fa.min.css";
import Container from "@/components/layouts/Container";
import Nav from "@/components/layouts/Nav";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'  >
    <Container>
      <Nav />
      <main className="flex h-full flex-col items-center justify-between p-24">
      <Component {...pageProps} />
      </main>
    </Container>
    </ThemeProvider>
  );
}
