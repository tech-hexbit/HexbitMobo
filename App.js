import React from "react";

// state
import { AuthContextProvider } from "./store/auth-context";

import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <AppNavigation />
      </AuthContextProvider>
    </>
  );
}
