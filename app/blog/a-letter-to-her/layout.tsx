import React from "react";

export const metadata = {
  title: "a letter to her",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
