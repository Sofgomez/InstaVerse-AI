import "../styles/global.css";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default MyApp;
