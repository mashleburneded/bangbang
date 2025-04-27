{`"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement { // Add explicit return type
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  // Render children directly within a fragment, as RootLayout provides the body tag.
  // suppressHydrationWarning might not be needed here anymore, but can be left if other
  // hydration warnings specific to children are expected.
  return <>{children}</>;
}
`}
