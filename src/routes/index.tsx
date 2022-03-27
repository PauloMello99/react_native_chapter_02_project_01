import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { useAuth } from "../contexts/auth";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {/* {!!user.id ? <AppRoutes /> : <AuthRoutes />} */}
      <AppRoutes />
    </NavigationContainer>
  );
}