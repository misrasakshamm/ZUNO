"use client";

// <img> that hides itself if the file is missing (so the gradient placeholder below it stays visible).
export default function Art({ src, className, style, alt = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      draggable={false}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
