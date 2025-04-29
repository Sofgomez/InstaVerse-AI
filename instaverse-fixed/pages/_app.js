import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { WorldProvider } from "@/context/WorldContext";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <WorldProvider>
        <Navbar />
        <Component {...pageProps} />
      </WorldProvider>
    </AuthProvider>
  );
}
