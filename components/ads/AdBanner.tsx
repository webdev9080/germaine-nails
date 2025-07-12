"use client";

import { useEffect } from "react";

type AdBannerProps = {
  adSlot: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function AdBanner({
  adSlot,
  className = "adsbygoogle",
  style = { display: "block", margin: "2rem auto" },
}: AdBannerProps) {
  useEffect(() => {
    try {
      if (window.adsbygoogle && typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error", err);
    }
  }, []);

  return (
    <ins
      className={className}
      style={style}
      data-ad-client="ca-pub-8324514138250709"
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}