"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  useEffect(() => {
    document.body.className = "antialiased"; // Or merge with existing classes from layout if needed
  }, []);

  return <>{children}</>;
}