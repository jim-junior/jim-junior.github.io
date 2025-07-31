"use client";
import { Container } from "@mui/joy";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default layout;
