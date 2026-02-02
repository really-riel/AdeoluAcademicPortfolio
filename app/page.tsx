"use client";
import Home from "@/components/Home/Home";
import { useHashScroll } from "@/components/Hooks/hooks";
import React from "react";

const HomePage = () => {
  useHashScroll();
  return <Home />;
};

export default HomePage;
