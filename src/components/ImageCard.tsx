import Link from "next/link";
import type { ReactNode } from "react";

interface ImageCardProps {
  href: string;
  image: string | null; 
  title: string;
  children?: ReactNode;
  footer?: ReactNode;
  aspectRatio?: number | string;
  ariaLabel?: string;
}

export function ImageCard({
  href,
  image,
  title,
  children,
  footer,
  aspectRatio = 5 / 3,
  ariaLabel,
}: ImageCardProps) {
  return (
    <article
      style={{
        backgroundColor: "#333",
        backgroundImage: image
          ? `linear-gradient(
                rgba(0, 0, 0, 0.35),
                rgba(0, 0, 0, 0.35)
                ), url("${image}")`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio,
      }}
    >
      <Link
        href={href}
        aria-label={ariaLabel || title}
        style={{
          color: "white",
          textDecoration: "none",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div>
            <h6 style={{ color: "white", margin: 0 }}>{title}</h6>
            <span>{children}</span>
        </div>

        <small style={{ color: "white", margin: 0 }}>{footer}</small>
      </Link>
    </article>
  );
}
