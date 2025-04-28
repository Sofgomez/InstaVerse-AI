import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const noAuthRequired = ["/login", "/signup", "/signup-form"];

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !noAuthRequired.includes(router.pathname)) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return children;
}
