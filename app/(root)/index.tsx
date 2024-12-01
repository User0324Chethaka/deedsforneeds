import React from "react";
import { Redirect } from "expo-router";

const Index = () => {
  return <Redirect href={"/(root)/(onboarding)/getName"} />;
};

export default Index;
