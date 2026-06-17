"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export default function ProfileAvatar() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border shadow-sm">
      {hasError ? (
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary/15 via-muted to-primary/5"
          aria-label={`${siteConfig.fullName} profile`}
        >
          <span className="text-5xl font-bold tracking-tight text-primary/80">
            GL
          </span>
          <span className="mt-2 text-sm text-muted-foreground">
            {siteConfig.fullName}
          </span>
        </div>
      ) : (
        <Image
          src={siteConfig.profileImage}
          alt={siteConfig.fullName}
          fill
          sizes="(max-width: 768px) 288px, 288px"
          className="object-cover object-top"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
