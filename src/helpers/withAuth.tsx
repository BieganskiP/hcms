"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

export const withAuth = (Component: any) => {
  return function AuthenticatedComponent(props: any) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAuthenticated(true);
        } else {
          window.location.href = "/";
        }
      });
    }, []);

    if (!isAuthenticated) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
};
