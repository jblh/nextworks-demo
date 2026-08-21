"use client";

import * as React from "react";

import { BlocksAppProviders } from "./providers/BlocksAppProviders";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased">
      <BlocksAppProviders defaultThemeVariant="blue">
        {children}
      </BlocksAppProviders>
    </div>
  );
}
